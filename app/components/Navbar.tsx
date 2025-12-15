"use client";

import React from "react";

interface NavbarProps {
  activeTab: "expose" | "portfolio";
  onTabChange: (tab: "expose" | "portfolio") => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <span style={{ fontFamily: "var(--font-playfair), var(--font-serif)" }}>
            Design & Interaction
          </span>
          <span
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--color-text-muted)",
              marginLeft: "var(--space-3)",
              fontWeight: 400,
            }}
          >
            MA Application 2025
          </span>
        </div>
        <div className="navbar-tabs">
          <button
            className={`navbar-tab ${activeTab === "expose" ? "active" : ""}`}
            onClick={() => onTabChange("expose")}
          >
            Exposé
          </button>
          <button
            className={`navbar-tab ${activeTab === "portfolio" ? "active" : ""}`}
            onClick={() => onTabChange("portfolio")}
          >
            Portfolio
          </button>
        </div>
      </div>
    </nav>
  );
}
