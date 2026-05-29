import React from "react";

export default function FooterBottomBar() {
  return (
    <div
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      style={{
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid #243140",
        color: "#7E868F",
        fontSize: "0.82rem",
      }}
    >
      <div>© {new Date().getFullYear()} QDROPAQ. All rights reserved.</div>
      <div>This website provides general information and is not legal advice.</div>
    </div>
  );
}
