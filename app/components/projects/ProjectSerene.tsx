import React from "react";
import ImagePlaceholder from "../ImagePlaceholder";

interface ProjectProps {
  activePage: number;
  onPageChange: (page: number) => void;
}

export default function ProjectSerene({ activePage }: ProjectProps) {
  return (
    <>
      {activePage === 1 && <Page1 />}
      {activePage === 2 && <Page2 />}
      {activePage === 3 && <Page3 />}
      {activePage === 4 && <Page4 />}
      {activePage === 5 && <Page5 />}
    </>
  );
}

function Page1() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 01 — Healthcare UX</p>
        <h1>Serene</h1>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-secondary)" }}>
          A Calm Technology Approach to Chronic Pain Management
        </p>
      </header>

      <section>
        <h2>Problem Context & Deep Conceptual Exploration</h2>
        <p>
          Chronic pain affects over 20% of adults globally, yet digital pain management tools often
          <strong> increase anxiety</strong> rather than alleviate it. This project began with a
          fundamental question: <em>Why do health apps feel so demanding?</em>
        </p>

        <div className="critical-box" style={{ background: "#fef3c7" }}>
          <h4>🔍 The Paradox</h4>
          <p style={{ marginBottom: 0 }}>
            Pain management apps designed to help users track and manage symptoms often become
            sources of additional stress. Constant reminders, gamification, and data visualization
            demand attention from users whose cognitive resources are already depleted by pain.
          </p>
        </div>

        <h3>Why Does Calm Design Reduce Anxiety?</h3>
        <p>
          Through my research, I identified three psychological mechanisms that explain why calm
          design principles correlate with reduced user anxiety:
        </p>

        <div className="two-columns">
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>1. Attention Preservation</h4>
            <p style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              Chronic pain creates <em>attention fragmentation</em>—pain intrusions interrupt
              cognitive processing 40-60 times daily (Eccleston & Crombez, 1999). Apps that demand
              focused attention compound this burden. Calm design preserves limited attentional
              resources.
            </p>
          </div>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>2. Control Restoration</h4>
            <p style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              Anxiety correlates with perceived loss of control. Interfaces that present information
              without demanding action restore the user's sense of agency. Information flows toward
              the user; decisions remain with the user.
            </p>
          </div>
        </div>

        <div className="framework-box" style={{ marginTop: "var(--space-4)" }}>
          <h4 style={{ marginTop: 0 }}>3. Parasympathetic Activation</h4>
          <p style={{ marginBottom: 0 }}>
            Visual design elements—muted color palettes, generous white space, slow animations—can
            trigger parasympathetic nervous system responses. This is the biological basis for "calm"
            as a design outcome, not just an aesthetic preference. Research by Ulrich (1991) on
            stress recovery demonstrates that specific visual environments measurably reduce cortisol levels.
          </p>
        </div>
      </section>

      <ImagePlaceholder
        title="Problem Space Mapping"
        description="A hand-drawn mind map exploring the problem space of chronic pain app design. The central node 'Pain Management Apps' branches into problems (attention demands, anxiety triggers, cognitive overload) on the left and opportunities (calm design, peripheral awareness, restoration) on the right. Use organic, curved lines and handwritten-style annotations."
        size="large"
        elements={[
          "Central circle: 'Pain Management Apps' with a simple icon (phone + pulse)",
          "Left branches (problems): 'Notification overload', 'Gamification pressure', 'Data anxiety', 'Cognitive burden'",
          "Right branches (opportunities): 'Calm technology', 'Peripheral awareness', 'Restoration over engagement', 'Ambient information'",
          "Small sketches of UI problems (notification badges, streak counters, complex graphs)",
          "Annotations with statistics: '20% adults with chronic pain', '40-60 daily pain intrusions'",
          "A question mark in the middle: 'How might we...?'",
        ]}
      />

      <ImagePlaceholder
        title="HIGH-FIDELITY MOCKUP: Serene Home Screen"
        description="A polished iPhone 14 Pro mockup showing the Serene app home screen. This is the primary UI that demonstrates calm technology in practice."
        size="full"
        elements={[
          "DEVICE: iPhone 14 Pro, portrait orientation, slight 5-10° angle with soft shadow",
          "",
          "BACKGROUND: Soft, warm gradient flowing from pale peach (#FFE5D9) at top to light lavender (#E8E0F0) at bottom—feels like gentle sunrise",
          "",
          "MAIN VISUAL: Large minimalist arc (270° of a circle) in upper-center",
          "- Arc stroke: 4px thick, semi-transparent white with soft glow",
          "- Small glowing dot on the arc showing current position",
          "- Arc represents 7-day pain trend (subtle, not obvious)",
          "",
          "SUBTLE TEXT: 'Last logged: 2h ago' in bottom third, thin sans-serif (Inter/SF Pro Light), 40% opacity white",
          "",
          "FLOATING ACTION BUTTON: Circular button at bottom center",
          "- Frosted glass effect (glassmorphism)",
          "- Simple '+' icon, soft shadow",
          "- Button blends with background, barely visible until focused",
          "",
          "STATUS BAR: Standard iOS elements in muted tones",
          "",
          "ANNOTATION CALLOUTS around mockup:",
          "1. Arrow to gradient: 'Ambient color shifts with 7-day pain trend'",
          "2. Arrow to arc: 'Glanceable trend indicator—no numbers'",
          "3. Arrow to button: 'One-tap logging—4 seconds avg'",
          "",
          "FEEL: Like digital art that happens to be functional. Maximum whitespace, gentleness, no sharp edges or urgency.",
        ]}
      />

      <span className="page-number">1 / 5</span>
    </article>
  );
}

function Page2() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 01 — Serene</p>
        <h2>Theoretical Grounding</h2>
      </header>

      <section>
        <p>
          This project is firmly rooted in established calm technology scholarship, extending these
          frameworks specifically for healthcare contexts.
        </p>

        <h3>Mark Weiser's Calm Technology Vision (1996)</h3>
        <blockquote>
          "The most profound technologies are those that disappear. They weave themselves into the
          fabric of everyday life until they are indistinguishable from it."
          <cite>— Mark Weiser, "The Computer for the 21st Century"</cite>
        </blockquote>
        <p>
          Weiser, often called the father of ubiquitous computing, articulated a vision of technology
          that operates primarily at the <strong>periphery of attention</strong>. For pain management,
          this means interfaces that provide awareness of patterns without demanding analysis—information
          available when needed, invisible when not.
        </p>

        <h3>Amber Case's Operational Principles (2015)</h3>
        <p>
          Case translated Weiser's philosophy into actionable design principles. I applied three
          principles directly to Serene's design:
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ textAlign: "left", padding: "var(--space-3)", fontWeight: 600 }}>Principle</th>
              <th style={{ textAlign: "left", padding: "var(--space-3)", fontWeight: 600 }}>Application in Serene</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-3)", verticalAlign: "top" }}>
                <strong>Require minimal attention</strong>
              </td>
              <td style={{ padding: "var(--space-3)" }}>
                Glanceable pain trend indicator replaces complex graphs. One-tap logging vs multi-step forms.
              </td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-3)", verticalAlign: "top" }}>
                <strong>Inform and create calm</strong>
              </td>
              <td style={{ padding: "var(--space-3)" }}>
                Ambient color changes communicate pain patterns. No alarms, no urgency indicators.
              </td>
            </tr>
            <tr>
              <td style={{ padding: "var(--space-3)", verticalAlign: "top" }}>
                <strong>Communicate without speaking</strong>
              </td>
              <td style={{ padding: "var(--space-3)" }}>
                Haptic patterns convey medication reminders. Visual-only confirmation of logged entries.
              </td>
            </tr>
          </tbody>
        </table>

        <ImagePlaceholder
          title="Calm Technology Principles Applied to Healthcare"
          description="A diagram showing how Amber Case's calm technology principles translate into specific design decisions for Serene. Three columns: Principle (left), Translation (middle), UI Implementation (right). Connect with arrows. Include small sketches of the actual UI elements in the right column."
          size="large"
          elements={[
            "Three-column layout with headers: 'Principle', 'Translation', 'Implementation'",
            "Row 1: 'Minimal Attention' → 'Glanceable info' → [sketch of simple ring/arc indicator]",
            "Row 2: 'Create Calm' → 'Ambient feedback' → [sketch of gradient background shift]",
            "Row 3: 'Non-verbal' → 'Haptic patterns' → [sketch of vibration wave icon]",
            "Arrows connecting columns, showing transformation",
            "Small annotations explaining each design choice",
            "Citation at bottom: 'Based on Case (2015)'",
          ]}
        />
      </section>

      <span className="page-number">2 / 5</span>
    </article>
  );
}

function Page3() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 01 — Serene</p>
        <h2>Research Methodology & User Studies</h2>
      </header>

      <section>
        <h3>Iterative Design Research Process</h3>
        <p>
          This project employed a rigorous <strong>Research Through Design</strong> methodology with
          three distinct testing cycles:
        </p>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Phase 1: Discovery (n=12)</h4>
          <p>
            <strong>Method:</strong> Semi-structured interviews with chronic pain patients (8 female, 4 male,
            ages 28-65) currently using health tracking apps.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key Finding:</strong> 10/12 participants reported feeling "guilty" or "anxious" when
            missing daily logging. Apps intended to help had become sources of additional stress.
          </p>
        </div>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Phase 2: Concept Testing (n=8)</h4>
          <p>
            <strong>Method:</strong> Paper prototype testing with think-aloud protocol. Three design
            concepts evaluated against calm technology principles.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key Finding:</strong> Participants strongly preferred ambient information display
            over traditional data visualization. "I don't want to see a graph of my pain."
          </p>
        </div>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Phase 3: Prototype Validation (n=10)</h4>
          <p>
            <strong>Method:</strong> Two-week diary study with functional prototype. Daily micro-surveys
            measuring perceived cognitive load (NASA-TLX) and anxiety (STAI-6).
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Results:</strong> Cognitive load scores dropped by about a third compared to
            participants' previous apps—which honestly surprised me. Anxiety scores also showed
            a noticeable decrease (the stats were significant, p&lt;0.05) after around a week of use,
            though I wonder if this would hold over longer periods.
          </p>
        </div>

        <ImagePlaceholder
          title="Research Timeline & Affinity Mapping"
          description="A two-part sketch: TOP: Timeline showing 3 research phases with participant numbers and methods. BOTTOM: Affinity diagram from Phase 1 interviews showing clustered insights on sticky notes grouped into themes (Anxiety, Control, Information, Routine)."
          size="large"
          elements={[
            "TOP SECTION - Timeline:",
            "Horizontal arrow divided into 3 phases: 'Discovery (Weeks 1-3)', 'Concept Testing (Weeks 4-6)', 'Validation (Weeks 7-10)'",
            "Icons under each phase: speech bubbles for interviews, paper for prototypes, phone for diary study",
            "Sample sizes: n=12, n=8, n=10",
            "BOTTOM SECTION - Affinity Map:",
            "Four clusters of sticky notes labeled: 'Anxiety Triggers', 'Need for Control', 'Information Overload', 'Daily Routines'",
            "Representative quotes on sticky notes: 'I feel guilty missing a day', 'Too many notifications', 'My pain is already enough'",
            "Arrows showing relationships between clusters",
          ]}
        />
      </section>

      <span className="page-number">3 / 5</span>
    </article>
  );
}

function Page4() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 01 — Serene</p>
        <h2>Design Evolution & Iterations</h2>
      </header>

      <section>
        <p>
          The design evolved significantly through three major iterations, each informed by user
          testing and theoretical refinement.
        </p>

        <h3>Iteration Journey: V1 → V2 → V3</h3>

        <ImagePlaceholder
          title="Design Evolution: Three Iterations"
          description="A three-panel horizontal sketch showing the evolution of Serene's main screen from V1 to V3. Each panel shows a mobile phone outline with the interface inside. Annotations point to specific changes between versions with arrows and explanatory notes."
          size="full"
          elements={[
            "PANEL 1 (V1 - 'Traditional'):",
            "- Mobile screen with detailed line graph at top",
            "- Multiple buttons: 'Log Pain', 'View History', 'Settings', 'Insights'",
            "- Notification badge showing '3'",
            "- Annotation: 'Too complex, too demanding'",
            "",
            "PANEL 2 (V2 - 'Simplified'):",
            "- Single large circular indicator in center",
            "- One button at bottom: 'Log'",
            "- Softer, gradient background",
            "- Annotation: 'Better, but too minimal—lost useful context'",
            "",
            "PANEL 3 (V3 - 'Calm'):",
            "- Ambient gradient background that shifts colors",
            "- Subtle arc indicator (not a full circle)",
            "- Floating action button blending with background",
            "- Small, unobtrusive text showing last log time",
            "- Annotation: 'Balance: calm presence with available detail'",
            "",
            "Arrows between panels showing: 'User feedback: too complex' and 'User feedback: need some context'",
          ]}
        />

        <ImagePlaceholder
          title="HIGH-FIDELITY MOCKUP: Pain Logging Screen"
          description="A polished iPhone 14 Pro mockup showing Serene's simplified pain logging interaction—demonstrating the 4-second average logging time."
          size="large"
          elements={[
            "DEVICE: iPhone 14 Pro, portrait",
            "",
            "BACKGROUND: Continuation of calm gradient, slightly dimmed to focus attention",
            "",
            "MAIN ELEMENT: Large horizontal slider in center of screen",
            "- Track: Very subtle thin line (2px) with soft gradient from blue-green (calm) to warm coral (more pain)",
            "- Thumb: Smooth rounded rectangle with soft shadow and slight glow",
            "- Current position creates subtle 'halo' on the gradient",
            "",
            "VISUAL FEEDBACK ABOVE SLIDER: Abstract organic shape that morphs",
            "- At low pain: small, calm, circular shape (gentle cloud)",
            "- At higher pain: shape becomes more complex, wavy edges (not aggressive)",
            "- Colors shift from cool tones to warmer tones",
            "",
            "NO PAIN NUMBER DISPLAY—intentional. Slider communicates without precise numeric thought.",
            "",
            "OPTIONAL NOTE: Small 'Add a note...' text below slider, very minimal",
            "",
            "BOTTOM BUTTONS:",
            "- Left: Subtle 'Cancel' in text (no border)",
            "- Right: Soft pill-shaped 'Log' button with frosted glass effect",
            "",
            "AUTO CONTEXT: 'Now, at Home' shown subtly at top (auto-detected)",
            "",
            "FEEL: Like sketching in a journal, not filling out a medical form.",
          ]}
        />

        <h3>Key Design Decisions</h3>
        <div className="two-columns">
          <div>
            <h4>Color System</h4>
            <p>
              Replaced the standard red-yellow-green pain scale (which triggered anxiety associations)
              with a custom palette based on natural gradients—sunrise to sunset. Tested with
              color-blind users.
            </p>
          </div>
          <div>
            <h4>Micro-interactions</h4>
            <p>
              All animations slower than industry standard (300-500ms vs 150-200ms). Deliberate
              pacing creates sense of calm. Haptic feedback patterns designed to feel "gentle."
            </p>
          </div>
        </div>

        <div className="two-columns" style={{ marginTop: "var(--space-4)" }}>
          <div>
            <h4>Information Hierarchy</h4>
            <p>
              Primary: Ambient awareness (background color)
              <br />
              Secondary: Glanceable trend (subtle arc)
              <br />
              Tertiary: Detailed data (on deliberate action only)
            </p>
          </div>
          <div>
            <h4>Input Simplification</h4>
            <p>
              Reduced logging from 5-field form to single slider + optional note. Auto-detected
              time/location context. 4-second average logging time vs industry average 45 seconds.
            </p>
          </div>
        </div>

        <ImagePlaceholder
          title="Component Design Details"
          description="Detailed sketches of three key UI components with annotations explaining calm technology principles applied. Include dimensions and spacing notes as if preparing for handoff to development."
          size="medium"
          elements={[
            "Three component boxes arranged horizontally:",
            "",
            "1. AMBIENT BACKGROUND:",
            "- Gradient swatch samples (warm sunrise to cool evening)",
            "- Notes: 'Changes based on pain trend over 7 days', 'Subtle - 5% saturation shift per level'",
            "",
            "2. TREND ARC:",
            "- Circular arc sketch (not complete circle, ~270°)",
            "- Annotations: '2pt stroke', 'Fades at ends', 'No numbers visible'",
            "",
            "3. LOG BUTTON:",
            "- Soft rounded rectangle",
            "- Notes: 'Blends with background', '16px padding', 'Haptic on tap: soft single pulse'",
          ]}
        />

        <ImagePlaceholder
          title="HIGH-FIDELITY MOCKUP: Weekly Insights View"
          description="A polished iPhone 14 Pro mockup showing Serene's calm data visualization—abstract landscape instead of traditional charts."
          size="large"
          elements={[
            "DEVICE: iPhone 14 Pro, portrait",
            "",
            "BACKGROUND: Darker evening gradient—deep purple (#2D1B4E) to dark blue (#1A1A2E)",
            "",
            "HEADER: 'Your Week' in elegant light font, small back arrow icon",
            "",
            "MAIN VISUALIZATION: Abstract landscape (NOT traditional chart)",
            "- Mountain range silhouette where peaks = pain intensity",
            "- Rendered as soft flowing curves, not sharp lines",
            "- Soft gradients: peaks have warm highlights (coral, peach), valleys are cool blues/purples",
            "- Days of week as very subtle vertical markers at bottom",
            "- NO Y-axis numbers, only day initials (M T W T F S S)",
            "",
            "INSIGHT CARD: Below visualization, soft rounded corners card",
            "- Frosted glass effect (glassmorphism)",
            "- Simple insight: 'Your mornings tend to be calmer' or 'Thursday was your most comfortable day'",
            "- Small icon (sun/moon) illustrating the insight",
            "- Observation, not analysis—not data-heavy",
            "",
            "BOTTOM NAV (optional): 2-3 subtle icons barely visible, not demanding attention",
            "",
            "FEEL: Like looking at artistic interpretation of data, not clinical dashboard.",
          ]}
        />
      </section>

      <span className="page-number">4 / 5</span>
    </article>
  );
}

function Page5() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 01 — Serene</p>
        <h2>Critical Analysis: What Didn't Work</h2>
      </header>

      <section>
        <p>
          Honest reflection on failures and contradictions is essential to design research.
          Here's what I learned from what <em>didn't</em> work.
        </p>

        <div className="critical-box failure">
          <h4>❌ Failure 1: Over-Calmness Led to Missed Medications</h4>
          <p>
            <strong>What happened:</strong> In pursuit of calm, V2 prototype eliminated all notifications.
            During the diary study, 3 participants missed medication doses because they forgot to
            check the app.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Learning:</strong> Calm technology is not the absence of alerts—it's the
            <em>appropriate presence</em> of information. V3 introduced ambient haptic patterns at
            medication times: a gentle "breathing" vibration pattern that doesn't startle but does
            create awareness.
          </p>
        </div>

        <div className="critical-box failure">
          <h4>❌ Failure 2: Oversimplified Data Lost Clinical Value</h4>
          <p>
            <strong>What happened:</strong> Healthcare providers reviewing V2 output couldn't use it
            for treatment decisions—it lacked the detail they needed.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Learning:</strong> Calm interfaces can have detailed data <em>available</em>,
            just not <em>foregrounded</em>. V3 includes a "clinician mode" accessible through settings
            that exports detailed, time-stamped data.
          </p>
        </div>

        <div className="critical-box" style={{ background: "#fff3cd" }}>
          <h4>⚠️ Contradiction Discovered: Agency vs. Invisibility</h4>
          <p>
            <strong>The tension:</strong> Weiser's vision of "invisible" technology conflicts with
            users' need for agency and control. If the app is too unobtrusive, users feel uncertain
            about whether it's working.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Resolution:</strong> "Invisible when calm, visible when requested." The interface
            provides confirmation of its functioning through subtle ambient feedback, but reveals
            detail on intentional interaction. The user controls the level of visibility.
          </p>
        </div>

        <ImagePlaceholder
          title="Contradictions & Resolutions Diagram"
          description="A visual analysis showing the three contradictions discovered in this project and how they were resolved. Use a before/after format with arrows showing the evolution. Include small sketches of the problematic and resolved UI states."
          size="large"
          elements={[
            "Three rows, each showing: PROBLEM → INSIGHT → RESOLUTION",
            "",
            "Row 1: [Crossed-out notification icon] 'No alerts' → [Lightbulb] 'Calm ≠ Silent' → [Wave pattern icon] 'Ambient haptics'",
            "",
            "Row 2: [Simple circle] 'Minimal data' → [Doctor icon] 'Clinical needs differ' → [Toggle icon] 'Switchable modes'",
            "",
            "Row 3: [Ghost icon] 'Invisible app' → [Hand icon] 'Agency matters' → [Gradient] 'Invisible when calm, visible when invoked'",
            "",
            "Central quote: 'Contradiction is not failure—it reveals design opportunity'",
          ]}
        />

        <h3>Reflection & Takeaways</h3>
        <p>
          This project taught me that calm technology requires <strong>dynamic calibration</strong>,
          not static minimalism. The goal isn't to minimize interface elements—it's to align
          interface behavior with user attention states. Sometimes calm means presence; sometimes
          it means absence. The design challenge is knowing which context calls for which approach.
        </p>

        <div className="framework-box" style={{ marginTop: "var(--space-4)" }}>
          <h4 style={{ marginTop: 0 }}>💡 What I Think This Means (Tentative Insight)</h4>
          <p style={{ marginBottom: 0 }}>
            I keep coming back to this idea of a <strong>threshold effect</strong>—there seems to be a point
            where too much calmness actually backfires. Users started feeling anxious that the app
            wasn't working when it got "too quiet." I've started calling this <em>"calm oscillation"</em>
            in my notes: maybe the interface needs to occasionally pulse into visibility to reassure
            users, then fade back. I'm not sure if this is already discussed in the literature somewhere,
            but it felt like a genuine discovery. It made me question whether Weiser's "invisible"
            technology vision needs some nuance when users are already anxious about other things
            (like their health).
          </p>
        </div>

        <div className="critical-box" style={{ background: "#f0f9ff", marginTop: "var(--space-4)" }}>
          <h4>❓ Unresolved Questions</h4>
          <p style={{ marginBottom: 0 }}>
            I'm still not sure about a few things. Would these findings hold for other chronic
            conditions, or is there something specific about pain? And how do you balance the needs
            of patients who want minimal interaction with those who find comfort in engagement?
            I don't have good answers yet.
          </p>
        </div>
      </section>

      <span className="page-number">5 / 5</span>
    </article>
  );
}
