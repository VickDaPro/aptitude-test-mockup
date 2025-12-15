"use client";

import React, { useState } from "react";
import ProjectSerene from "./projects/ProjectSerene";
import ProjectEcoAware from "./projects/ProjectEcoAware";
import ProjectAccessFirst from "./projects/ProjectAccessFirst";

type ProjectId = "serene" | "ecoaware" | "accessfirst";

const projects = [
  { id: "serene" as ProjectId, title: "Serene", subtitle: "Calm Technology Healthcare App" },
  { id: "ecoaware" as ProjectId, title: "EcoAware", subtitle: "Sustainable Behavior Design" },
  { id: "accessfirst" as ProjectId, title: "AccessFirst", subtitle: "Inclusive Wayfinding System" },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<ProjectId>("serene");
  const [activePage, setActivePage] = useState(1);

  const handleProjectChange = (projectId: ProjectId) => {
    setActiveProject(projectId);
    setActivePage(1);
  };

  const renderProject = () => {
    switch (activeProject) {
      case "serene":
        return <ProjectSerene activePage={activePage} onPageChange={setActivePage} />;
      case "ecoaware":
        return <ProjectEcoAware activePage={activePage} onPageChange={setActivePage} />;
      case "accessfirst":
        return <ProjectAccessFirst activePage={activePage} onPageChange={setActivePage} />;
      default:
        return null;
    }
  };

  return (
    <div className="page-container">
      {/* Research Statement */}
      <section className="research-statement" style={{ 
        marginBottom: "var(--space-12)", 
        padding: "var(--space-8)",
        background: "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-bg-secondary) 100%)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-border-light)"
      }}>
        <p className="section-label" style={{ marginBottom: "var(--space-4)" }}>Research Statement</p>
        <h2 style={{ marginBottom: "var(--space-4)", fontSize: "var(--text-2xl)" }}>Why I'm Interested in This Work</h2>
        <p style={{ fontSize: "var(--text-lg)", lineHeight: 1.7, marginBottom: "var(--space-4)" }}>
          I've become increasingly interested in how <strong>interface design affects how people feel</strong>, 
          not just what they can do. The projects in this portfolio all started from the same question: 
          can we design technology that actually supports wellbeing instead of just demanding attention?
        </p>
        <p style={{ fontSize: "var(--text-base)", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>
          I try to ground my work in research—reading papers, talking to users, testing ideas—but I'm 
          also learning as I go. Each project taught me something I wasn't expecting, and I've tried to 
          document both what worked and what didn't. I'm drawn to the master's program because I want 
          to get better at the research side: running proper studies, connecting to theory, and 
          contributing something useful to how we think about designing for human needs.
        </p>
        <div style={{ 
          display: "flex", 
          gap: "var(--space-6)", 
          flexWrap: "wrap",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid var(--color-border-light)"
        }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <p style={{ fontWeight: 600, marginBottom: "var(--space-2)", fontSize: "var(--text-sm)" }}>What I'm Exploring</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
              Calm Technology • Making interfaces less stressful • Accessibility • Behavior change • Trust
            </p>
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <p style={{ fontWeight: 600, marginBottom: "var(--space-2)", fontSize: "var(--text-sm)" }}>How I Work</p>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
              Talking to users • Prototyping and testing • Reading research • Iterating based on feedback
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Header */}
      <header style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
        <p className="section-label">Portfolio — Past Projects</p>
        <h1>Design Work & Research</h1>
        <p style={{ color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Three projects demonstrating perceptive, conceptual, and design skills
          across healthcare, sustainability, and accessibility domains.
        </p>
      </header>

      {/* Project Navigation */}
      <nav className="project-nav" style={{ justifyContent: "center" }}>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`project-nav-item ${activeProject === project.id ? "active" : ""}`}
            onClick={() => handleProjectChange(project.id)}
          >
            <strong>{project.title}</strong>
            <span style={{ display: "block", fontSize: "var(--text-xs)", opacity: 0.8 }}>
              {project.subtitle}
            </span>
          </button>
        ))}
      </nav>

      {/* Page Navigation Dots */}
      <div className="page-nav">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`page-nav-dot ${activePage === page ? "active" : ""}`}
            onClick={() => setActivePage(page)}
            aria-label={`Page ${page}`}
          />
        ))}
      </div>

      {/* Active Project Content */}
      {renderProject()}
    </div>
  );
}
