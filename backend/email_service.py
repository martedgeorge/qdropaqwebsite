"""Transactional email service for QDROPAQ.

Wraps the Resend SDK with:
- async (non-blocking) send via asyncio.to_thread
- graceful degradation when RESEND_API_KEY is not set (logs warning, returns False)
- calm, branded HTML templates matching the site palette
"""
from __future__ import annotations

import asyncio
import logging
import os
from html import escape
from typing import Optional

import resend

logger = logging.getLogger(__name__)


# ─────────────── Configuration ───────────────
def _cfg(key: str, default: str = "") -> str:
    return (os.environ.get(key) or default).strip()


def _enabled() -> bool:
    return bool(_cfg("RESEND_API_KEY"))


# ─────────────── Low-level send ───────────────
async def _send(
    *,
    to: list[str],
    subject: str,
    html: str,
    bcc: Optional[list[str]] = None,
    reply_to: Optional[str] = None,
) -> bool:
    """Send a single email. Returns True on success, False on any failure.
    Never raises — callers should treat email as best-effort."""
    if not _enabled():
        logger.warning("RESEND_API_KEY not set; skipping email to %s (subject: %r)", to, subject)
        return False

    resend.api_key = _cfg("RESEND_API_KEY")
    sender = _cfg("SENDER_EMAIL", "onboarding@resend.dev")

    params: dict = {
        "from": sender,
        "to": to,
        "subject": subject,
        "html": html,
    }
    if bcc:
        params["bcc"] = bcc
    if reply_to:
        params["reply_to"] = reply_to

    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info("Resend email sent: id=%s to=%s subject=%r", result.get("id"), to, subject)
        return True
    except Exception as exc:  # noqa: BLE001 — broad catch is intentional for best-effort send
        logger.error("Resend email failed (to=%s subject=%r): %s", to, subject, exc)
        return False


# ─────────────── Templates ───────────────
PALETTE = {
    "ivory": "#F5F0E6",
    "paper": "#FBF8F2",
    "ink": "#1E2A37",
    "ink_soft": "#3A4754",
    "ink_mute": "#6B7480",
    "bronze": "#8A6A3B",
    "bronze_deep": "#6E5328",
    "cream_line": "#E6DECB",
}


def _wrap(body_html: str, *, preheader: str = "") -> str:
    """Wrap inner body HTML in a calm, restrained email shell."""
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>QDROPAQ</title></head>
<body style="margin:0;padding:0;background:{PALETTE['ivory']};font-family:Georgia,'Times New Roman',serif;color:{PALETTE['ink']};">
<span style="display:none;visibility:hidden;opacity:0;height:0;width:0;font-size:1px;line-height:1px;color:{PALETTE['ivory']};">{escape(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:{PALETTE['ivory']};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:{PALETTE['paper']};border:1px solid {PALETTE['cream_line']};border-radius:3px;">
      <tr><td style="padding:28px 32px 8px 32px;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-size:20px;letter-spacing:0.01em;color:{PALETTE['ink']};">QDROPAQ</div>
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:{PALETTE['ink_mute']};margin-top:4px;">Est. 1995 · Pension Valuations &amp; QDROs</div>
      </td></tr>
      <tr><td style="padding:8px 32px 28px 32px;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.6;color:{PALETTE['ink_soft']};">
        {body_html}
      </td></tr>
      <tr><td style="padding:18px 32px 24px 32px;border-top:1px solid {PALETTE['cream_line']};font-family:Arial,Helvetica,sans-serif;font-size:12px;color:{PALETTE['ink_mute']};line-height:1.55;">
        QDROPAQ · 1657 The Fairway #169, Jenkintown, PA 19046<br>
        <a href="tel:2157829847" style="color:{PALETTE['ink_mute']};text-decoration:none;">215-782-9847</a> ·
        <a href="mailto:carol@qdropaq.com" style="color:{PALETTE['ink_mute']};text-decoration:none;">carol@qdropaq.com</a>
      </td></tr>
    </table>
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:{PALETTE['ink_mute']};margin-top:14px;">
      This email was sent because you contacted QDROPAQ. No marketing follow-up unless you ask for it.
    </div>
  </td></tr>
</table>
</body></html>"""


def _row(label: str, value: str) -> str:
    if not value:
        return ""
    return (
        f'<tr><td style="padding:8px 0;border-bottom:1px solid {PALETTE["cream_line"]};'
        f'font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;'
        f'text-transform:uppercase;color:{PALETTE["ink_mute"]};width:140px;vertical-align:top;">{escape(label)}</td>'
        f'<td style="padding:8px 0;border-bottom:1px solid {PALETTE["cream_line"]};'
        f'font-family:Georgia,serif;font-size:15px;color:{PALETTE["ink"]};">{escape(value)}</td></tr>'
    )


# ─────────────── Intake emails ───────────────
async def send_intake_emails(intake: dict) -> None:
    """Fire both intake emails in parallel; failures are logged, not raised."""
    firm = _cfg("FIRM_EMAIL")
    client_email = intake.get("email", "")

    tasks = []
    if firm:
        tasks.append(_send_intake_firm_notice(intake, firm))
    if client_email:
        tasks.append(_send_intake_ack(intake))
    if tasks:
        await asyncio.gather(*tasks, return_exceptions=True)


async def _send_intake_firm_notice(intake: dict, firm_email: str) -> bool:
    notes = intake.get("notes") or ""
    body = f"""
    <h2 style="font-family:Georgia,serif;font-weight:400;font-size:22px;color:{PALETTE['ink']};margin:0 0 12px 0;">New intake received</h2>
    <p style="margin:0 0 18px 0;">A new client has submitted the intake form on the website.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid {PALETTE['cream_line']};margin-bottom:18px;">
      {_row('Name', intake.get('name', ''))}
      {_row('Email', intake.get('email', ''))}
      {_row('Phone', intake.get('phone', '') or '')}
      {_row('State', intake.get('state', '') or '')}
      {_row('Role', intake.get('role', '') or '')}
      {_row('Matter', intake.get('matter', '') or '')}
      {_row('Submitted', intake.get('submitted_at', ''))}
      {_row('Intake ID', intake.get('id', ''))}
    </table>
    {(f'<div style="margin-top:6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:{PALETTE["ink_mute"]};">Notes</div>'
       f'<div style="margin-top:6px;padding:14px 16px;background:{PALETTE["ivory"]};border:1px solid {PALETTE["cream_line"]};border-radius:2px;white-space:pre-wrap;">{escape(notes)}</div>')
      if notes else ''}
    """
    return await _send(
        to=[firm_email],
        subject=f"QDROPAQ — new intake from {intake.get('name', 'a website visitor')}",
        html=_wrap(body, preheader=f"New intake from {intake.get('name', '')}"),
        reply_to=intake.get("email"),
    )


async def _send_intake_ack(intake: dict) -> bool:
    name = intake.get("name", "")
    greeting = f"Hello {escape(name.split()[0])}," if name else "Hello,"
    body = f"""
    <p style="margin:0 0 14px 0;">{greeting}</p>
    <p style="margin:0 0 14px 0;">Thank you for reaching out to QDROPAQ. We have your intake in hand and will read it carefully.</p>
    <p style="margin:0 0 14px 0;">Carol will respond within one business day with next steps, any follow-up questions, and — where applicable — a quote for the work, in plain English.</p>
    <p style="margin:0 0 14px 0;">If your matter is time-sensitive, please feel free to call directly at <a href="tel:2157829847" style="color:{PALETTE['bronze_deep']};">215-782-9847</a>.</p>
    <p style="margin:24px 0 0 0;font-family:Georgia,serif;font-style:italic;color:{PALETTE['ink_mute']};">— Carol Owen, Principal</p>
    """
    return await _send(
        to=[intake.get("email")],
        subject="We have your QDROPAQ intake",
        html=_wrap(body, preheader="Carol will respond within one business day."),
        reply_to=_cfg("FIRM_EMAIL") or None,
    )


# ─────────────── Primer email ───────────────
async def send_primer_email(lead: dict) -> None:
    """Send the Plan Pre-Qualification Primer to a new subscriber."""
    primer_url = _cfg("PRIMER_PDF_URL")
    firm = _cfg("FIRM_EMAIL")
    site = _cfg("PUBLIC_SITE_URL")

    download_block = ""
    if primer_url:
        download_block = (
            f'<p style="margin:18px 0 0 0;">'
            f'<a href="{escape(primer_url)}" '
            f'style="display:inline-block;background:{PALETTE["ink"]};color:{PALETTE["ivory"]};'
            f'text-decoration:none;padding:12px 22px;border-radius:2px;'
            f'font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.01em;">'
            f'Download the Primer (PDF)</a></p>'
        )
    else:
        download_block = (
            f'<p style="margin:18px 0 0 0;color:{PALETTE["ink_mute"]};font-size:14px;">'
            f'(The PDF link will be enabled once the Primer file is published. '
            f'We have your address and will email it the moment it is available.)</p>'
        )

    body = f"""
    <p style="margin:0 0 14px 0;">Thank you for asking for the Plan Pre-Qualification Primer.</p>
    <p style="margin:0 0 14px 0;">It is a short, plainly-written PDF that explains why pre-qualifying a QDRO with the plan administrator — before court entry — is the single most consequential step in the process. It also lists the three most common rejection reasons and includes a clean checklist for the parties to follow.</p>
    {download_block}
    <p style="margin:24px 0 0 0;">If anything you read raises a question, please write back — Carol reads every reply.</p>
    <p style="margin:24px 0 0 0;font-family:Georgia,serif;font-style:italic;color:{PALETTE['ink_mute']};">— QDROPAQ</p>
    {f'<p style="margin:18px 0 0 0;font-size:13px;color:{PALETTE["ink_mute"]};">More on the practice at <a href="{escape(site)}" style="color:{PALETTE["bronze_deep"]};">qdropaq.com</a>.</p>' if site else ''}
    """
    await _send(
        to=[lead.get("email")],
        subject="Your Plan Pre-Qualification Primer",
        html=_wrap(body, preheader="A short PDF on pre-qualifying a QDRO."),
        bcc=[firm] if firm else None,
        reply_to=firm or None,
    )


# ─────────────── Companion sheet email ───────────────
async def send_companion_email(lead: dict) -> None:
    """Send the 'What to ask your plan administrator' companion sheet."""
    pdf_url = _cfg("COMPANION_PDF_URL")
    firm = _cfg("FIRM_EMAIL")

    download_block = ""
    if pdf_url:
        download_block = (
            f'<p style="margin:18px 0 0 0;">'
            f'<a href="{escape(pdf_url)}" '
            f'style="display:inline-block;background:{PALETTE["ink"]};color:{PALETTE["ivory"]};'
            f'text-decoration:none;padding:12px 22px;border-radius:2px;'
            f'font-family:Arial,Helvetica,sans-serif;font-size:14px;letter-spacing:0.01em;">'
            f'Download the companion sheet (PDF)</a></p>'
        )
    else:
        download_block = (
            f'<p style="margin:18px 0 0 0;color:{PALETTE["ink_mute"]};font-size:14px;">'
            f'(The companion sheet is being finalised. We have your address and will email it the moment it is ready.)</p>'
        )

    body = f"""
    <p style="margin:0 0 14px 0;">Thank you for asking for the companion sheet.</p>
    <p style="margin:0 0 14px 0;">It is a single-page reference of the exact questions to put to a plan administrator before a QDRO is finalised — written so a pro se party, attorney, or mediator can use it directly in a call or letter.</p>
    {download_block}
    <p style="margin:24px 0 0 0;">If you would like Carol to walk through it with you, just reply.</p>
    <p style="margin:24px 0 0 0;font-family:Georgia,serif;font-style:italic;color:{PALETTE['ink_mute']};">— QDROPAQ</p>
    """
    await _send(
        to=[lead.get("email")],
        subject="Your companion sheet: what to ask your plan administrator",
        html=_wrap(body, preheader="A single-page reference of plan-administrator questions."),
        bcc=[firm] if firm else None,
        reply_to=firm or None,
    )
