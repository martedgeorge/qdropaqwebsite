import React from "react";
import { TEAM_MEMBER_IMAGE_HEIGHT } from "@/constants/ui";

export default function TeamMemberCard({ name, role, bio, img, testid }) {
  return (
    <article data-testid={testid}>
      <img
        src={img}
        alt={name}
        style={{
          width: "100%",
          height: TEAM_MEMBER_IMAGE_HEIGHT,
          objectFit: "cover",
          borderRadius: 3,
          filter: "saturate(0.85) contrast(0.96)",
          marginBottom: "1.4rem",
        }}
      />
      <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>{role}</div>
      <h2
        style={{
          fontFamily: "Newsreader, Georgia, serif",
          fontSize: "1.7rem",
          marginBottom: "0.8rem",
          color: "var(--ink)",
        }}
      >
        {name}
      </h2>
      <p>{bio}</p>
    </article>
  );
}
