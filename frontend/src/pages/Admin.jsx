import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const TOKEN_KEY = "qdropaq.adminToken";

const auth = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

function fmtDate(s) {
  if (!s) return "—";
  try {
    return new Date(s).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch { return s; }
}

function LoginPanel({ onAuthenticated }) {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const tryLogin = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await axios.get(`${API}/admin/me`, auth(token));
      window.sessionStorage.setItem(TOKEN_KEY, token);
      onAuthenticated(token);
    } catch {
      setError("That token is not valid.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main data-testid="page-admin-login" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container-narrow" style={{ width: "100%" }}>
        <div className="eyebrow" style={{ marginBottom: "0.8rem" }}>Operator access</div>
        <h1 className="display-md" style={{ marginBottom: "1rem" }}>QDROPAQ admin</h1>
        <p style={{ marginBottom: "1.6rem", maxWidth: "48ch" }}>
          Enter the shared operator token to see recent intakes and lead sign-ups.
          This area is not advertised on the public site.
        </p>
        <form onSubmit={tryLogin} className="card-paper" style={{ padding: "1.6rem" }}>
          <label
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-mute)",
            }}
          >
            Admin token
          </label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            data-testid="admin-token-input"
            style={INPUT}
            autoFocus
          />
          <div style={{ marginTop: "1rem", display: "flex", gap: 12, alignItems: "center" }}>
            <button type="submit" disabled={busy} className="btn-primary" data-testid="admin-login-submit">
              {busy ? "Checking…" : "Open dashboard"}
            </button>
            {error && <span data-testid="admin-error" style={{ color: "#7A2E10", fontSize: "0.9rem" }}>{error}</span>}
          </div>
        </form>
      </div>
    </main>
  );
}

function Table({ rows, columns, emptyLabel, testid }) {
  if (!rows.length) {
    return <div style={{ padding: "1.6rem", color: "var(--ink-mute)" }} data-testid={`${testid}-empty`}>{emptyLabel}</div>;
  }
  return (
    <div className="card-paper" data-testid={testid} style={{ overflow: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={TH}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              {columns.map((c) => (
                <td key={c.key} style={TD}>{c.render ? c.render(r) : (r[c.key] ?? "—")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard({ token, onLogout }) {
  const [tab, setTab] = useState("intakes");
  const [intakes, setIntakes] = useState([]);
  const [primer, setPrimer] = useState([]);
  const [companion, setCompanion] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [i, p, c] = await Promise.all([
        axios.get(`${API}/admin/intakes`, auth(token)),
        axios.get(`${API}/admin/primer-leads`, auth(token)),
        axios.get(`${API}/admin/companion-leads`, auth(token)),
      ]);
      setIntakes(i.data);
      setPrimer(p.data);
      setCompanion(c.data);
    } catch {
      onLogout();
    } finally {
      setLoading(false);
    }
  }, [token, onLogout]);

  useEffect(() => { load(); }, [load]);

  const counts = { intakes: intakes.length, primer: primer.length, companion: companion.length };

  return (
    <main data-testid="page-admin" className="container-quiet" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem", flexWrap: "wrap", gap: 12 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: "0.4rem" }}>Operator console</div>
          <h1 className="display-md" style={{ margin: 0 }}>Intakes &amp; leads</h1>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={load} className="btn-ghost" data-testid="admin-refresh">Refresh</button>
          <button onClick={onLogout} className="btn-ghost" data-testid="admin-logout">Sign out</button>
        </div>
      </div>

      <div role="tablist" style={{ display: "flex", gap: 4, borderBottom: "1px solid var(--cream-line)", marginBottom: "1.5rem" }}>
        {[
          ["intakes", `Intakes (${counts.intakes})`],
          ["primer", `Primer (${counts.primer})`],
          ["companion", `Companion (${counts.companion})`],
        ].map(([key, label]) => (
          <button
            key={key}
            role="tab"
            data-testid={`admin-tab-${key}`}
            onClick={() => setTab(key)}
            style={{
              padding: "0.7rem 1.1rem",
              background: "transparent",
              border: 0,
              borderBottom: tab === key ? "2px solid var(--bronze)" : "2px solid transparent",
              color: tab === key ? "var(--ink)" : "var(--ink-mute)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ color: "var(--ink-mute)" }}>Loading…</div>
      ) : tab === "intakes" ? (
        <Table
          testid="intakes-table"
          rows={intakes}
          emptyLabel="No intakes yet."
          columns={[
            { key: "submitted_at", label: "When", render: (r) => fmtDate(r.submitted_at) },
            { key: "name", label: "Name" },
            { key: "email", label: "Email", render: (r) => <a href={`mailto:${r.email}`} style={LINK}>{r.email}</a> },
            { key: "phone", label: "Phone" },
            { key: "matter", label: "Matter" },
            { key: "notes", label: "Notes", render: (r) => <span style={{ whiteSpace: "pre-wrap" }}>{r.notes || "—"}</span> },
          ]}
        />
      ) : tab === "primer" ? (
        <Table
          testid="primer-table"
          rows={primer}
          emptyLabel="No primer signups yet."
          columns={[
            { key: "requested_at", label: "When", render: (r) => fmtDate(r.requested_at) },
            { key: "email", label: "Email", render: (r) => <a href={`mailto:${r.email}`} style={LINK}>{r.email}</a> },
            { key: "role", label: "Role" },
          ]}
        />
      ) : (
        <Table
          testid="companion-table"
          rows={companion}
          emptyLabel="No companion-sheet signups yet."
          columns={[
            { key: "requested_at", label: "When", render: (r) => fmtDate(r.requested_at) },
            { key: "email", label: "Email", render: (r) => <a href={`mailto:${r.email}`} style={LINK}>{r.email}</a> },
            { key: "role", label: "Role" },
          ]}
        />
      )}
    </main>
  );
}

export default function Admin() {
  const [token, setToken] = useState(() => window.sessionStorage.getItem(TOKEN_KEY) || "");

  const handleLogout = () => {
    window.sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
  };

  if (!token) return <LoginPanel onAuthenticated={setToken} />;
  return <Dashboard token={token} onLogout={handleLogout} />;
}

const INPUT = {
  width: "100%",
  background: "var(--ivory)",
  border: "1px solid var(--cream-line)",
  borderRadius: 2,
  padding: "0.85rem 1rem",
  fontFamily: "Mulish, sans-serif",
  fontSize: "0.98rem",
  color: "var(--ink)",
  outline: "none",
  marginTop: "0.4rem",
};
const TH = {
  textAlign: "left",
  padding: "0.7rem 0.9rem",
  borderBottom: "1px solid var(--cream-line)",
  fontSize: "0.74rem",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--ink-mute)",
  fontWeight: 600,
};
const TD = {
  padding: "0.85rem 0.9rem",
  borderBottom: "1px solid var(--cream-line)",
  verticalAlign: "top",
  color: "var(--ink-soft)",
};
const LINK = { color: "var(--bronze-deep)", textDecoration: "none" };
