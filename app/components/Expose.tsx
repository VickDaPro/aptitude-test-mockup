import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Expose() {
  return (
    <div className="page-container">
      {/* ==================== PAGE 1 ==================== */}
      <article className="page">
        {/* Header */}
        <header style={{ marginBottom: "var(--space-8)" }}>
          <p className="section-label">Project Exposé — MA Design and Interaction</p>
          <h1 style={{ marginBottom: "var(--space-4)", lineHeight: 1.2 }}>
            The Attention Paradox: How Calm Technology Principles Manifest in Healthcare Interface Design and Their Impact on Cognitive Load in Chronic Pain Patients
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-text-secondary)",
              fontStyle: "italic",
            }}
          >
            A design research investigation into the relationship between peripheral awareness interfaces and psychological burden in self-tracking health applications
          </p>
        </header>

        {/* Abstract */}
        <section className="abstract-box">
          <h3>Abstract</h3>
          <p style={{ marginBottom: 0 }}>
            This project investigates the application of calm technology principles to the design
            of chronic pain management applications. Drawing on Mark Weiser and John Seely Brown's
            foundational work on calm technology, alongside Amber Case's contemporary principles,
            this research asks: <strong>How can interface design shift from demanding attention to
            supporting peripheral awareness?</strong> The project proposes a design framework that
            prioritizes <em>restorative interaction patterns</em> over engagement metrics, aiming
            to reduce the psychological burden often associated with self-tracking health
            applications.
          </p>
        </section>

        {/* Research Question */}
        <section style={{ marginTop: "var(--space-8)" }}>
          <h2>Research Question</h2>
          <blockquote>
            How can calm technology principles be applied to chronic pain management applications
            to reduce cognitive load, minimize anxiety, and support sustained engagement without
            demanding constant attention?
            <cite>— Central Research Question</cite>
          </blockquote>
          <p>
            Secondary questions guiding this inquiry include:
          </p>
          <ul className="key-points">
            <li>
              What psychological mechanisms underlie the relationship between interface design and
              user anxiety in healthcare contexts?
            </li>
            <li>
              How do current pain management apps succeed or fail in implementing calm technology
              principles?
            </li>
            <li>
              What design patterns emerge from successful calm technology implementations, and how
              might they transfer to healthcare applications?
            </li>
          </ul>
        </section>

        {/* Theoretical Framework */}
        <section style={{ marginTop: "var(--space-8)" }}>
          <h2>Theoretical Framework</h2>
          <p>
            This project engages deeply with foundational and contemporary calm technology
            scholarship:
          </p>

          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Mark Weiser & John Seely Brown (1996)</h4>
            <blockquote style={{ margin: "var(--space-4) 0" }}>
              "Calm technology engages both the center and the periphery of our attention, and in
              fact moves back and forth between the two."
              <cite>— "The Coming Age of Calm Technology"</cite>
            </blockquote>
            <p className="text-muted" style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              Weiser's vision of computing that recedes into the background, enhancing human
              capability without demanding cognitive resources, provides the conceptual foundation
              for this project.
            </p>
          </div>

          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Amber Case — Calm Technology Principles (2015)</h4>
            <p>
              Case operationalized Weiser's vision into actionable design principles that this
              project applies directly:
            </p>
            <ul className="key-points">
              <li>
                <strong>Principle 1:</strong> Technology should require the smallest possible
                amount of attention
              </li>
              <li>
                <strong>Principle 2:</strong> Technology should inform and create calm
              </li>
              <li>
                <strong>Principle 5:</strong> Technology should communicate but doesn't need to
                speak
              </li>
            </ul>
          </div>

          <ImagePlaceholder
            title="Theoretical Framework Diagram"
            description="A conceptual diagram showing the relationships between Weiser's foundational calm technology concepts, Amber Case's principles, Attention Restoration Theory (Kaplan & Kaplan), and their application to healthcare UX. The diagram should show how these theories converge on the concept of 'Restorative Interfaces' at the center."
            size="large"
            elements={[
              "Three overlapping circles representing: Calm Technology (Weiser/Brown), Calm Technology Principles (Case), and Attention Restoration Theory (Kaplan)",
              "Center intersection labeled 'Restorative Interfaces'",
              "Arrows showing flow from theory to application",
              "Small icons representing: attention, periphery, nature, and restoration",
              "Text annotations with key concepts from each framework",
              "A timeline at the bottom showing evolution: 1996 → 2015 → Present Project",
            ]}
          />
        </section>

        {/* Research Gap */}
        <section style={{ marginTop: "var(--space-6)" }}>
          <h2>Research Gap</h2>
          <p>
            Reading through the literature, I noticed that most calm technology research seems to assume
            users have <strong>normal attention patterns</strong>. But chronic pain patients don't—they
            experience what researchers call "attentional fragmentation," where pain literally interrupts
            thinking dozens of times a day (Eccleston & Crombez, 1999). I couldn't find much work that
            addresses what calm technology looks like for people whose attention is already compromised.
          </p>
          <div className="critical-box" style={{ background: "var(--color-accent-light)" }}>
            <h4>⚡ The Question I Want to Answer</h4>
            <p style={{ marginBottom: 0 }}>
              Here's what I keep wondering: <em>how calm is too calm?</em> There seems to be a point where
              an interface becomes so minimal that users can't tell if it's working. But I haven't found
              empirical research on where that threshold is—especially for users who are already cognitively
              burdened. That's what I want to investigate: finding the "sweet spot" where an interface is
              calming without becoming invisible.
            </p>
          </div>
        </section>

        <span className="page-number">1 / 2</span>
      </article>

      {/* ==================== PAGE 2 ==================== */}
      <article className="page">
        {/* Psychology of Calm Design */}
        <section>
          <h2>The Psychology Behind Calm Design</h2>
          <p>
            <strong>Why does calm design reduce anxiety?</strong> This project synthesizes research
            from environmental psychology and human-computer interaction to answer this question:
          </p>

          <div className="two-columns">
            <div>
              <h4>Attention Restoration Theory (Kaplan & Kaplan)</h4>
              <p>
                Environments that allow "soft fascination" enable recovery from directed attention
                fatigue. Applied to interfaces, this means designs that provide information without
                demanding focused attention can reduce cognitive depletion.
              </p>
            </div>
            <div>
              <h4>Stress Reduction Theory (Ulrich)</h4>
              <p>
                Visual environments with specific characteristics (low complexity, natural
                elements) trigger parasympathetic nervous system activation. Interface design can
                incorporate these principles through color, typography, and interaction patterns.
              </p>
            </div>
          </div>

          <div className="critical-box" style={{ marginTop: "var(--space-6)" }}>
            <h4>⚡ Key Insight</h4>
            <p style={{ marginBottom: 0 }}>
              Chronic pain patients experience <em>attention fragmentation</em> due to pain
              intrusions. Traditional "engaging" app designs compound this cognitive load.
              Calm technology offers an alternative paradigm: <strong>support without demand</strong>.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section style={{ marginTop: "var(--space-8)" }}>
          <h2>Research Methodology</h2>
          <p>
            This project employs a <strong>Research Through Design</strong> methodology with
            iterative user testing at each phase:
          </p>

          <ol className="methodology-steps">
            <li>
              <strong>Contextual Inquiry (Week 1-3):</strong> In-depth interviews with 12-15
              chronic pain patients about their experiences with current health apps, pain
              management routines, and attention patterns
            </li>
            <li>
              <strong>Competitive Analysis (Week 2-3):</strong> Systematic evaluation of existing
              pain management apps against calm technology principles
            </li>
            <li>
              <strong>Concept Development (Week 4-6):</strong> Iterative sketching and low-fidelity
              prototyping based on insights, with 3 concept testing sessions
            </li>
            <li>
              <strong>Prototype Development (Week 7-10):</strong> High-fidelity interactive
              prototype development with 2 rounds of usability testing (n=8 per round)
            </li>
            <li>
              <strong>Diary Study (Week 11-14):</strong> Two-week deployment with 10 participants,
              daily brief surveys about cognitive load, anxiety, and app interaction
            </li>
            <li>
              <strong>Analysis & Framework Development (Week 15-18):</strong> Synthesis of findings
              into a transferable calm technology design framework for healthcare
            </li>
          </ol>

          <ImagePlaceholder
            title="Research Methodology Timeline"
            description="A horizontal timeline diagram showing the 18-week research process. Each phase should be represented as a distinct segment with icons representing the activity type. Show iterative loops between phases to indicate the non-linear nature of research through design. Include small sketches of deliverables at key milestones."
            size="medium"
            elements={[
              "Horizontal timeline divided into 6 phases with week numbers",
              "Icons: speech bubble (interviews), magnifying glass (analysis), pencil (sketching), phone (prototype), calendar (diary study), lightbulb (synthesis)",
              "Curved arrows showing iteration between phases 3-4",
              "Participant counts (n=12, n=8, n=10) at relevant phases",
              "Small thumbnails of deliverables: interview notes, sketches, prototype screens, framework diagram",
            ]}
          />
        </section>

        {/* Expected Outcomes */}
        <section style={{ marginTop: "var(--space-8)" }}>
          <h2>Expected Outcomes & Contribution</h2>
          <div className="two-columns">
            <div>
              <h4>Tangible Deliverables</h4>
              <ul className="key-points">
                <li>Working interactive prototype of a calm pain management app</li>
                <li>Calm Technology Design Framework for Healthcare (CTDH)</li>
                <li>Pattern library of calm interaction patterns</li>
                <li>Published case study with design guidelines</li>
              </ul>
            </div>
            <div>
              <h4>Research Contribution</h4>
              <ul className="key-points">
                <li>Bridges gap between calm technology theory and healthcare UX practice</li>
                <li>Provides empirical evidence for psychological impact of calm design</li>
                <li>Challenges engagement-centric app design paradigms</li>
                <li>Contributes to accessible design for cognitively burdened users</li>
              </ul>
            </div>
          </div>
        </section>

        {/* References */}
        <section
          style={{
            marginTop: "var(--space-8)",
            paddingTop: "var(--space-6)",
            borderTop: "1px solid var(--color-border-light)",
          }}
        >
          <h4 style={{ fontSize: "var(--text-base)" }}>References</h4>
          <div style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
            <p className="reference">
              Case, A. (2015). <em>Calm Technology: Principles and Patterns for Non-Intrusive Design</em>.
              O'Reilly Media.
            </p>
            <p className="reference">
              Eccleston, C., & Crombez, G. (1999). Pain demands attention: A cognitive-affective model
              of the interruptive function of pain. <em>Psychological Bulletin, 125</em>(3), 356-366.
            </p>
            <p className="reference">
              Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework.
              <em>Journal of Environmental Psychology, 15</em>(3), 169-182.
            </p>
            <p className="reference">
              McKnight, D. H., Choudhury, V., & Kacmar, C. (2002). Developing and validating trust
              measures for e-commerce. <em>Information Systems Research, 13</em>(3), 334-359.
            </p>
            <p className="reference">
              Norman, D. A. (2013). <em>The Design of Everyday Things</em> (Revised ed.). Basic Books.
            </p>
            <p className="reference">
              Shneiderman, B. (2000). Designing trust into online experiences.
              <em>Communications of the ACM, 43</em>(12), 57-59.
            </p>
            <p className="reference">
              Sweller, J. (1988). Cognitive load during problem solving: Effects on learning.
              <em>Cognitive Science, 12</em>(2), 257-285.
            </p>
            <p className="reference">
              Ulrich, R. S. (1991). Stress recovery during exposure to natural and urban environments.
              <em>Journal of Environmental Psychology, 11</em>(3), 201-230.
            </p>
            <p className="reference">
              Weiser, M., & Brown, J. S. (1996). The Coming Age of Calm Technology.
              <em>Xerox PARC</em>.
            </p>
          </div>
        </section>

        <span className="page-number">2 / 2</span>
      </article>
    </div>
  );
}
