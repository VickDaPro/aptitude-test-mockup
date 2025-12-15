import React from "react";
import ImagePlaceholder from "../ImagePlaceholder";

interface ProjectProps {
  activePage: number;
  onPageChange: (page: number) => void;
}

export default function ProjectAccessFirst({ activePage }: ProjectProps) {
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
        <p className="section-label">Project 03 — Accessibility</p>
        <h1>AccessFirst</h1>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-secondary)" }}>
          Inclusive Wayfinding Beyond Compliance
        </p>
      </header>

      <section>
        <h2>Problem Space Exploration</h2>
        <p>
          Existing navigation systems treat accessibility as an afterthought—an
          "accessible route" option hidden in settings. This project reimagines wayfinding
          from the ground up: <strong>What if accessibility were the primary design constraint,
          not a feature to enable?</strong>
        </p>

        <div className="critical-box" style={{ background: "#dbeafe" }}>
          <h4>📊 The Reality</h4>
          <ul style={{ marginBottom: 0 }}>
            <li>15% of world population lives with some form of disability (WHO, 2023)</li>
            <li>Situational disabilities affect everyone: carrying luggage, pushing strollers,
            temporary injuries</li>
            <li>Aging populations increasingly need accessible navigation</li>
            <li>Yet most wayfinding apps treat accessibility as edge case</li>
          </ul>
        </div>

        <h3>Reframing the Problem</h3>
        <p>
          Traditional approach: "How can we add accessible routes to existing navigation?"
        </p>
        <p>
          <strong>AccessFirst approach:</strong> "How might we design navigation that works
          for the widest possible range of human abilities, and adapts to individual needs?"
        </p>

        <ImagePlaceholder
          title="Stakeholder Map: Who Benefits from Inclusive Wayfinding"
          description="A radial stakeholder map showing AccessFirst at center, surrounded by primary, secondary, and tertiary user groups. Show the diversity of users who benefit from accessible design—not just those with permanent disabilities."
          size="large"
          elements={[
            "CENTER: 'AccessFirst' logo/name",
            "",
            "INNER RING (Primary): Wheelchair users, Blind/low vision users, Deaf/hard of hearing, Cognitive disabilities",
            "",
            "MIDDLE RING (Situational): Parents with strollers, Travelers with luggage, Temporary injuries (cast, crutches), Elderly with mobility aids",
            "",
            "OUTER RING (Contextual): Tourists unfamiliar with area, Non-native language speakers, People in loud environments, Users in bright sunlight",
            "",
            "Annotations showing: '15% permanent disability', '100% situational at some point'",
            "Visual style: Inclusive icons representing each group",
          ]}
        />
      </section>

      <span className="page-number">1 / 5</span>
    </article>
  );
}

function Page2() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 03 — AccessFirst</p>
        <h2>Universal Design Principles & Co-Design</h2>
      </header>

      <section>
        <h3>Theoretical Foundation: The Seven Principles</h3>
        <p>
          AccessFirst is grounded in the <strong>Seven Principles of Universal Design</strong>
          (Connell et al., 1997), which I applied specifically to wayfinding:
        </p>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--space-4)", fontSize: "var(--text-sm)" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ textAlign: "left", padding: "var(--space-2)" }}>Principle</th>
              <th style={{ textAlign: "left", padding: "var(--space-2)" }}>Wayfinding Application</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Equitable Use</td>
              <td style={{ padding: "var(--space-2)" }}>Same app, same routes—not "accessible version"</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Flexibility in Use</td>
              <td style={{ padding: "var(--space-2)" }}>Multiple modalities: visual, audio, haptic</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Simple and Intuitive</td>
              <td style={{ padding: "var(--space-2)" }}>Progressive disclosure of complexity</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Perceptible Information</td>
              <td style={{ padding: "var(--space-2)" }}>Redundant coding: color + shape + sound</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Tolerance for Error</td>
              <td style={{ padding: "var(--space-2)" }}>Gentle re-routing, no "wrong turn" alerts</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--color-border-light)" }}>
              <td style={{ padding: "var(--space-2)" }}>Low Physical Effort</td>
              <td style={{ padding: "var(--space-2)" }}>Hands-free operation, minimal input</td>
            </tr>
            <tr>
              <td style={{ padding: "var(--space-2)" }}>Size and Space</td>
              <td style={{ padding: "var(--space-2)" }}>Large touch targets, scalable interface</td>
            </tr>
          </tbody>
        </table>

        <h3>Co-Design Methodology</h3>
        <p>
          Rather than designing <em>for</em> disabled users, AccessFirst was designed
          <em>with</em> them. I conducted three co-design workshops with 15 participants
          representing diverse abilities.
        </p>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Workshop Structure</h4>
          <p><strong>Participants:</strong> 5 wheelchair users, 4 blind/low-vision, 3 d/Deaf,
          3 with cognitive disabilities</p>
          <p><strong>Format:</strong> 2-hour sessions with accessible materials (large print,
          braille, tactile prototypes)</p>
          <p style={{ marginBottom: 0 }}><strong>Method:</strong> Participatory design workshops
          where participants led design decisions; I facilitated</p>
        </div>

        <ImagePlaceholder
          title="Co-Design Workshop Synthesis"
          description="A visual summary of insights from co-design workshops, organized by user group. Show key quotes, needs, and design implications in a structured format that respects participant contributions."
          size="large"
          elements={[
            "Four quadrants representing user groups:",
            "",
            "QUADRANT 1 - Wheelchair Users:",
            "Quote: 'I need to know if the 'accessible' entrance is actually usable'",
            "Need: Real-time obstacle info",
            "Design implication: Community-reported conditions",
            "",
            "QUADRANT 2 - Blind/Low Vision:",
            "Quote: 'Spatial audio helps me understand my surroundings'",
            "Need: Audio description of environment",
            "Design implication: Landmark-based audio navigation",
            "",
            "QUADRANT 3 - d/Deaf:",
            "Quote: 'Visual alerts are crucial, but vibration helps too'",
            "Need: Non-audio alternatives for all audio",
            "Design implication: Haptic direction cues",
            "",
            "QUADRANT 4 - Cognitive Disabilities:",
            "Quote: 'Too many options overwhelm me'",
            "Need: Simple, step-by-step guidance",
            "Design implication: Single-action screens",
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
        <p className="section-label">Project 03 — AccessFirst</p>
        <h2>Research & User Testing</h2>
      </header>

      <section>
        <h3>Accessibility Audit Methodology</h3>
        <p>
          I developed a systematic accessibility audit methodology to evaluate existing
          navigation apps, which also served as a testing framework for AccessFirst iterations.
        </p>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Audit Dimensions</h4>
          <div className="two-columns">
            <div>
              <p><strong>Perceptual:</strong> Can information be perceived through multiple senses?</p>
              <p style={{ marginBottom: 0 }}><strong>Operational:</strong> Can the app be operated without fine motor control or vision?</p>
            </div>
            <div>
              <p><strong>Cognitive:</strong> Is cognitive load minimized at each step?</p>
              <p style={{ marginBottom: 0 }}><strong>Contextual:</strong> Does it adapt to environmental conditions?</p>
            </div>
          </div>
        </div>

        <h3>Competitive Analysis Results</h3>
        <p>
          Auditing 5 major navigation apps revealed consistent patterns:
        </p>
        <ul className="key-points">
          <li>All treated accessibility as "option" rather than default</li>
          <li>None provided multiple simultaneous modalities</li>
          <li>None incorporated community-reported accessibility data</li>
          <li>Only 1 provided cognitive accessibility considerations</li>
        </ul>

        <div className="framework-box" style={{ marginTop: "var(--space-4)", background: "#dbeafe" }}>
          <h4 style={{ marginTop: 0 }}>📊 How Testing Went</h4>
          <p>
            I ran three rounds of testing with my 15 co-design participants, using the
            System Usability Scale (SUS) to track improvements:
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>First version:</strong> Pretty rough—SUS score of 52 (that's below acceptable), and less than half could complete the navigation task</li>
            <li><strong>After first redesign:</strong> Much better at 71 (good range), about 78% task completion</li>
            <li><strong>Final version:</strong> Hit 84 (excellent!), with 94% completing the task successfully</li>
            <li><strong>Modality switching:</strong> Nearly 9 out of 10 users could switch between audio/visual/haptic mid-navigation, which I was really happy about</li>
            <li><strong>Interesting finding:</strong> Users trusted community-reported obstacles (4.6/5) way more than official accessibility data (3.1/5). That surprised me.</li>
          </ul>
        </div>

        <h3>Prototype Testing</h3>
        <p>
          Three rounds of prototype testing with co-design participants:
        </p>

        <ImagePlaceholder
          title="Accessibility Testing Notes & Observations"
          description="A page from my testing notebook showing observations from prototype testing sessions. Include sketches of participants using the prototype, annotations about what worked and what failed, and direct quotes captured during sessions."
          size="large"
          elements={[
            "Notebook page layout with handwritten-style elements:",
            "",
            "TOP: Date header 'Testing Round 2 - March 15'",
            "",
            "Sketch 1: Person in wheelchair using phone, annotation: 'Holding while pushing difficult—voice control essential'",
            "",
            "Sketch 2: Person with white cane, annotation: 'Earbuds block environmental sounds—bone conduction headphones needed'",
            "",
            "QUOTES BOX:",
            "'The haptic patterns are like a language—I learned them quickly' - P7",
            "'I don't trust the route until I've done it once' - P3",
            "",
            "ISSUES LIST (with checkmarks for resolved):",
            "✓ Font size needs to go larger",
            "✓ Contrast ratio insufficient",
            "⚠ Indoor navigation still unreliable",
            "",
            "INSIGHTS: Arrow pointing to: 'Trust comes from community validation'",
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
        <p className="section-label">Project 03 — AccessFirst</p>
        <h2>Multi-Modal Prototyping</h2>
      </header>

      <section>
        <h3>Design Approach: One Route, Many Modalities</h3>
        <p>
          AccessFirst's core innovation is presenting the same navigation information through
          multiple simultaneous channels, allowing users to choose (and switch between)
          modalities based on ability and context.
        </p>

        <div className="two-columns">
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Visual Mode</h4>
            <ul style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              <li>High-contrast map with customizable colors</li>
              <li>Large, clear turn indicators</li>
              <li>Photo landmarks at decision points</li>
              <li>Scalable text up to 300%</li>
            </ul>
          </div>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Audio Mode</h4>
            <ul style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              <li>Spatial audio indicating direction</li>
              <li>Landmark-based descriptions</li>
              <li>Distance in time, not meters</li>
              <li>Adjustable verbosity levels</li>
            </ul>
          </div>
        </div>

        <div className="two-columns" style={{ marginTop: "var(--space-4)" }}>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Haptic Mode</h4>
            <ul style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              <li>Rhythm patterns for direction</li>
              <li>Intensity for distance</li>
              <li>Distinct patterns for warnings</li>
              <li>Works with wearables</li>
            </ul>
          </div>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Simplified Mode</h4>
            <ul style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              <li>One instruction at a time</li>
              <li>Large "got it" confirmation</li>
              <li>Photo of next location</li>
              <li>"Call for help" always visible</li>
            </ul>
          </div>
        </div>

        <ImagePlaceholder
          title="Multi-Sensory Prototype: One Instruction, Four Modalities"
          description="A four-panel illustration showing how the same navigation instruction ('Turn left in 50 meters at the coffee shop') is communicated through visual, audio, haptic, and simplified modalities. Each panel shows the interface and interaction pattern for that modality."
          size="full"
          elements={[
            "PANEL 1 - Visual:",
            "Phone screen with map, large left-turn arrow, photo of coffee shop",
            "Text: 'Turn left at Coffee Corner' with high contrast",
            "",
            "PANEL 2 - Audio:",
            "Phone with speaker icon, sound waves emanating left",
            "Speech bubble: 'In about a minute, turn left. You'll hear the coffee shop on your left.'",
            "Small ear icon indicating spatial audio direction",
            "",
            "PANEL 3 - Haptic:",
            "Smartwatch on wrist with vibration waves",
            "Pattern diagram: '••—' (short-short-long) meaning 'left soon'",
            "Legend showing pattern meanings",
            "",
            "PANEL 4 - Simplified:",
            "Large phone screen with just: Photo of coffee shop, 'Turn LEFT here', Big green checkmark button",
            "No map, no extra info",
            "",
            "CENTER: Arrow pointing to all four with 'Same information, different channels'",
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
        <p className="section-label">Project 03 — AccessFirst</p>
        <h2>Critical Reflection & Learnings</h2>
      </header>

      <section>
        <h3>What Didn't Work</h3>

        <div className="critical-box failure">
          <h4>❌ Failure 1: GPS Unreliability Indoors</h4>
          <p>
            <strong>The problem:</strong> GPS accuracy degrades to 10-15 meters indoors,
            making turn-by-turn navigation inside buildings unreliable and potentially dangerous
            for blind users.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Attempted solutions:</strong> Beacon integration, Wi-Fi triangulation,
            magnetic field mapping. All required infrastructure not universally available.
          </p>
          <p>
            <strong>Current approach:</strong> Pivot to outdoor navigation + building-entrance
            wayfinding. Indoor navigation marked as future development requiring infrastructure
            partnerships.
          </p>
        </div>

        <div className="critical-box failure">
          <h4>❌ Failure 2: "Accessible Route" Data Quality</h4>
          <p>
            <strong>The problem:</strong> Official accessibility data is often outdated.
            Ramps blocked by construction, elevators broken, temporary obstacles.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Learning:</strong> Shifted from authoritative data to community-reported
            data. Users can report obstacles in real-time, validated by other users.
            Trust in collective knowledge over institutional data.
          </p>
        </div>

        <div className="critical-box" style={{ background: "#fff3cd" }}>
          <h4>⚠️ Ethical Tension: Privacy vs. Safety</h4>
          <p>
            <strong>The dilemma:</strong> To provide best routes, app needs to know user's
            specific disability. But collecting and storing this data creates privacy risks.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Resolution:</strong> Device-side processing only. Preferences stored
            locally, never transmitted. Route calculations done on-device where possible.
            Trade-off: slightly less optimal routes for complete privacy.
          </p>
        </div>

        <ImagePlaceholder
          title="Lessons Learned: Visual Summary"
          description="A one-page visual summary of key learnings from AccessFirst, organized as a 'lessons board' with sticky-note style elements containing insights, illustrated with small icons and connected by theme."
          size="medium"
          elements={[
            "Bulletin board background with pinned 'sticky notes':",
            "",
            "Note 1: 'Nothing about us without us' (icon: hands together)",
            "Note 2: 'Community data > Official data' (icon: people network)",
            "Note 3: 'Indoor nav needs infrastructure' (icon: building with ?)",
            "Note 4: 'Privacy is non-negotiable' (icon: lock)",
            "Note 5: 'Universal design benefits everyone' (icon: diverse people)",
            "",
            "Center quote in larger text: 'Accessibility is not a feature—it's a foundation'",
          ]}
        />

        <h3>Future Directions</h3>
        <p>
          AccessFirst demonstrated that inclusive-first navigation is possible and preferable.
          Next steps include: infrastructure partnerships for indoor navigation, expansion of
          community reporting network, and exploration of AR overlays for low-vision users.
        </p>

        <div className="framework-box" style={{ marginTop: "var(--space-4)" }}>
          <h4 style={{ marginTop: 0 }}>💡 What I Think I Figured Out</h4>
          <p>
            The biggest takeaway for me was about <strong>mixing modalities, not just offering them</strong>.
            Users didn't want to pick one mode and stick with it—they wanted audio AND haptic in
            crowded places, visual AND audio in quiet areas. The existing Universal Design principle
            talks about "Flexibility in Use," but I think it might need to include something about
            letting users <em>combine</em> modalities, not just choose between them.
          </p>
          <p style={{ marginBottom: 0 }}>
            Also, the community data thing was eye-opening. People trusted other wheelchair users
            more than official city accessibility ratings. That makes sense, but it has implications
            for how we think about accessibility infrastructure.
          </p>
        </div>

        <div className="critical-box" style={{ background: "#f0f9ff", marginTop: "var(--space-4)" }}>
          <h4>❓ What I Couldn't Solve</h4>
          <p style={{ marginBottom: 0 }}>
            Indoor navigation is still a mess. GPS doesn't work well inside buildings, and all
            the alternatives (beacons, WiFi triangulation) need infrastructure that doesn't exist
            in most places. I ended up scoping the project to outdoor navigation only, which feels
            like a cop-out. If someone has ideas on this, I'd love to hear them—it's a real barrier
            to making inclusive wayfinding actually useful.
          </p>
        </div>
      </section>

      <span className="page-number">5 / 5</span>
    </article>
  );
}
