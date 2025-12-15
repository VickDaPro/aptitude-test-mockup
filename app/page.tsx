"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Expose from "./components/Expose";
import Portfolio from "./components/Portfolio";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"expose" | "portfolio">("expose");

  return (
    <>
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        {activeTab === "expose" && <Expose />}
        {activeTab === "portfolio" && <Portfolio />}
      </main>
      
      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "var(--space-8) var(--space-4)",
          borderTop: "1px solid var(--color-border-light)",
          marginTop: "var(--space-16)",
          color: "var(--color-text-muted)",
          fontSize: "var(--text-sm)",
        }}
      >
        <p style={{ marginBottom: "var(--space-2)" }}>
          <strong>Application for MA Design and Interaction</strong>
        </p>
        <p style={{ marginBottom: "var(--space-2)" }}>
          Rhine-Waal University of Applied Sciences — Summer Semester 2025
        </p>
        <p style={{ marginBottom: 0, fontStyle: "italic" }}>
          This is a visual mockup demonstrating portfolio structure and content approach.
          Replace placeholder images with hand-drawn sketches for final submission.
        </p>
      </footer>
    </>
  );
}
