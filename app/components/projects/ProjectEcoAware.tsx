import React from "react";
import ImagePlaceholder from "../ImagePlaceholder";

interface ProjectProps {
  activePage: number;
  onPageChange: (page: number) => void;
}

export default function ProjectEcoAware({ activePage }: ProjectProps) {
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
        <p className="section-label">Project 02 — Sustainability</p>
        <h1>EcoAware</h1>
        <p style={{ fontSize: "var(--text-xl)", color: "var(--color-text-secondary)" }}>
          Designing for Sustainable Behavior Through Peripheral Awareness
        </p>
      </header>

      <section>
        <h2>Research Context: The Knowing-Doing Gap</h2>
        <p>
          Climate awareness is at an all-time high, yet sustainable behavior change remains
          elusive. This project investigated a fundamental paradox: <strong>Why does
          environmental knowledge rarely translate into action?</strong>
        </p>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>The Problem of "Eco-Anxiety"</h4>
          <p style={{ marginBottom: 0 }}>
            Research by Clayton et al. (2020) identifies a counter-productive cycle: climate
            information → fear response → psychological avoidance → inaction. Traditional
            eco-feedback apps amplify this cycle by presenting stark data that triggers
            threat responses rather than enabling behavior change.
          </p>
        </div>

        <h3>Deep Conceptual Exploration: Sustainable Calm</h3>
        <p>
          This project explored how calm technology principles could break the eco-anxiety cycle.
          The hypothesis: <em>Information that enters awareness without demanding focused attention
          can influence behavior without triggering avoidance.</em>
        </p>

        <ImagePlaceholder
          title="Systems Thinking: The Eco-Anxiety Feedback Loop"
          description="A circular systems diagram showing how traditional environmental communication creates a negative feedback loop leading to inaction. Then show the 'breaking point' where calm design intervention can redirect the cycle toward positive action."
          size="large"
          elements={[
            "Circular flow with 5 nodes connected by arrows:",
            "1. 'Climate Data' (graph icon)",
            "2. 'Fear/Anxiety Response' (worried face)",
            "3. 'Psychological Distancing' (wall icon)",
            "4. 'Avoidance Behavior' (looking away)",
            "5. 'Inaction' (stopped hand) → loops back to 1",
            "",
            "INTERVENTION POINT: Arrow breaking into the loop between 2 and 3",
            "Alternative path: 'Calm Awareness' → 'Self-Efficacy' → 'Incremental Action'",
            "",
            "Visual style: Hand-drawn, organic lines",
            "Citation at bottom: 'Adapted from Clayton et al., 2020'",
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
        <p className="section-label">Project 02 — EcoAware</p>
        <h2>Behavioral & Theoretical Framework</h2>
      </header>

      <section>
        <p>EcoAware's design draws on three complementary theoretical traditions:</p>

        <h3>1. Fogg Behavior Model</h3>
        <blockquote>
          "Behavior happens when motivation, ability, and a prompt converge at the same moment."
          <cite>— BJ Fogg, Stanford Persuasive Technology Lab</cite>
        </blockquote>
        <p>
          Applied to EcoAware: Instead of maximizing motivation (which can trigger anxiety),
          I focused on <strong>maximizing ability</strong> (making sustainable choices trivially
          easy) and <strong>optimizing prompts</strong> (ambient rather than intrusive).
        </p>

        <h3>2. Nudge Theory (Thaler & Sunstein)</h3>
        <p>
          Choice architecture can guide behavior without restricting options. EcoAware implements
          "green nudges" through default settings, strategic information placement, and social
          proof elements—all delivered through peripheral, non-demanding interface patterns.
        </p>

        <h3>3. Environmental Psychology: Place Attachment</h3>
        <p>
          Research by Scannell & Gifford (2010) shows that emotional connection to place predicts
          pro-environmental behavior. EcoAware localizes impact data—showing effects in user's
          neighborhood rather than abstract global statistics.
        </p>

        <ImagePlaceholder
          title="Theoretical Framework Synthesis"
          description="A Venn diagram showing how four theories (Fogg, Nudge, Place Attachment, Calm Technology) overlap and inform specific design decisions. Show how calm tech principles enable the ambient/peripheral approach."
          size="medium"
          elements={[
            "Four intersecting elements (3 circles + 1 foundation):",
            "Circle 1 (top): 'Fogg Behavior Model' - annotated with 'Ability > Motivation'",
            "Circle 2 (left): 'Nudge Theory' - annotated with 'Choice Architecture'",
            "Circle 3 (right): 'Place Attachment' - annotated with 'Local Impact'",
            "",
            "FOUNDATION (below all three): 'Calm Technology (Case/Weiser)' - annotated with 'Peripheral Awareness'",
            "",
            "Key intersections:",
            "Fogg + Calm Tech: 'Prompts that don't demand attention'",
            "Nudge + Calm Tech: 'Ambient choice architecture'",
            "Place Attachment + Calm Tech: 'Local info in peripheral awareness'",
            "",
            "CENTER: 'EcoAware: Calm Local Nudges'",
          ]}
        />

        <div className="framework-box" style={{ marginTop: "var(--space-4)", background: "#dbeafe" }}>
          <h4 style={{ marginTop: 0 }}>🔗 How Calm Technology Unifies the Framework</h4>
          <p style={{ marginBottom: 0 }}>
            <strong>Case's Principle 2:</strong> "Technology should inform and create calm." Sustainability 
            apps typically create the opposite—eco-anxiety. By applying calm tech's peripheral 
            awareness model, EcoAware delivers environmental feedback through ambient visual cues 
            (the growing garden) rather than demanding metrics. This enables Fogg's "prompts" without 
            triggering threat responses that cause avoidance.
          </p>
        </div>

        <div className="critical-box success" style={{ marginTop: "var(--space-4)" }}>
          <h4>💡 Key Insight</h4>
          <p style={{ marginBottom: 0 }}>
            Traditional sustainability apps show global CO₂ emissions—abstract, overwhelming.
            EcoAware shows trees saved in your local park—concrete, actionable, emotionally resonant.
          </p>
        </div>
      </section>

      <span className="page-number">2 / 5</span>
    </article>
  );
}

function Page3() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 02 — EcoAware</p>
        <h2>User Studies & Research Methodology</h2>
      </header>

      <section>
        <h3>Contextual Inquiry: Household Sustainability</h3>
        <p>
          I conducted in-home contextual inquiries with 8 households (16 participants) to
          understand how sustainability decisions are actually made in daily life.
        </p>

        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>Study Design</h4>
          <p><strong>Duration:</strong> 2-hour sessions per household</p>
          <p><strong>Method:</strong> Observation + interview hybrid</p>
          <p><strong>Focus Areas:</strong> Grocery shopping, energy use, transport choices, waste management</p>
          <p style={{ marginBottom: 0 }}>
            <strong>Key Question:</strong> "Walk me through the last time you made a choice
            that felt environmentally relevant."
          </p>
        </div>

        <h3>Key Findings</h3>
        <div className="two-columns">
          <div>
            <h4>Finding 1: Decision Fatigue</h4>
            <p>
              7/8 households reported feeling overwhelmed by the number of "sustainable" decisions
              required daily. "I can't think about carbon for every item I buy."
            </p>
          </div>
          <div>
            <h4>Finding 2: Data Distrust</h4>
            <p>
              5/8 households expressed skepticism about environmental impact data. "These numbers
              feel made up. How do they know my exact carbon footprint?"
            </p>
          </div>
        </div>

        <div className="two-columns" style={{ marginTop: "var(--space-4)" }}>
          <div>
            <h4>Finding 3: Social Influence</h4>
            <p>
              All households mentioned neighbors' or friends' behavior as motivating. "Seeing
              my neighbor's solar panels made me look into it."
            </p>
          </div>
          <div>
            <h4>Finding 4: Locality Matters</h4>
            <p>
              6/8 felt more motivated by local impacts. "Saving polar bears feels abstract.
              Cleaning up the river I walk past—that I understand."
            </p>
          </div>
        </div>

        <div className="framework-box" style={{ marginTop: "var(--space-6)", background: "#d1fae5" }}>
          <h4 style={{ marginTop: 0 }}>📊 What the Numbers Showed</h4>
          <p>
            I ran a small 4-week comparison with 24 people—half using the garden version, half
            using my original gamified design. The differences were pretty striking:
          </p>
          <ul style={{ marginBottom: 0 }}>
            <li><strong>Time spent:</strong> Garden users stuck around way longer—over 3x more time per session on average</li>
            <li><strong>Anxiety levels:</strong> Garden group's eco-anxiety actually went down (roughly 28%), while the gamified group got <em>more</em> anxious. That was unexpected.</li>
            <li><strong>Behavior change:</strong> About two-thirds of garden users said they'd picked up at least one new sustainable habit, compared to maybe a third of the other group</li>
            <li><strong>Who stuck around:</strong> Way more garden users were still opening the app after a month</li>
          </ul>
          <p style={{ marginTop: "var(--space-3)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: 0 }}>
            I should note: the sample size is small, so I'm hesitant to make strong claims. But the pattern seemed consistent.
          </p>
        </div>

        <ImagePlaceholder
          title="User Journey Map: Sustainable Shopping Decision"
          description="A horizontal journey map showing the emotional and cognitive experience of a participant making grocery shopping decisions. Show decision points, emotional states, and opportunities for calm design intervention."
          size="large"
          elements={[
            "Horizontal journey with 5 stages: 'Planning', 'Traveling', 'Browsing', 'Choosing', 'Post-Purchase'",
            "",
            "For each stage, show:",
            "- Actions (stick figure icons)",
            "- Emotions (graph line showing stress levels)",
            "- Thoughts (speech bubbles): 'Should I check the app?', 'Too many options', 'Did I choose right?'",
            "",
            "Pain points marked with X: 'Information overload', 'Guilt trigger', 'Decision paralysis'",
            "Opportunity points marked with ★: 'Ambient reminder', 'Simple comparison', 'Positive reinforcement'",
            "",
            "Emotion line showing peaks of 'stress' and valleys of 'confidence'",
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
        <p className="section-label">Project 02 — EcoAware</p>
        <h2>Design Process & Iterations</h2>
      </header>

      <section>
        <h3>From Concept to Prototype</h3>
        <p>
          The design evolved through three major iterations, each tested with users from the
          contextual inquiry cohort.
        </p>

        <ImagePlaceholder
          title="Design Evolution: Lo-Fi to Hi-Fi"
          description="Four-panel evolution showing progression from initial sketches to final prototype. Each panel should show the same core screen (home dashboard) at different fidelity levels with annotations about what changed and why."
          size="full"
          elements={[
            "PANEL 1 - Paper Sketch (Week 1):",
            "- Rough pencil drawing of mobile screen",
            "- Central 'eco-score' number prominently displayed",
            "- List of recent actions below",
            "- Annotation: 'Initial concept: gamified eco-score'",
            "",
            "PANEL 2 - Lo-Fi Wireframe (Week 3):",
            "- Gray rectangles representing UI elements",
            "- Score replaced with gentler 'impact garden' visual",
            "- Actions become 'growing' elements",
            "- Annotation: 'Feedback: score feels judgmental'",
            "",
            "PANEL 3 - Mid-Fi Mockup (Week 5):",
            "- More detailed, with color",
            "- Garden visualization with local context (neighborhood map outline)",
            "- Subtle animations indicated with motion lines",
            "- Annotation: 'Testing: users engage with local connection'",
            "",
            "PANEL 4 - Hi-Fi Prototype (Week 8):",
            "- Polished visual design",
            "- Ambient background matching local weather",
            "- Minimal text, rich ambient visualization",
            "- Annotation: 'Final: calm, local, glanceable'",
          ]}
        />

        <h3>Key Design Decisions</h3>
        <div className="framework-box">
          <h4 style={{ marginTop: 0 }}>The "Local Impact Garden"</h4>
          <p style={{ marginBottom: 0 }}>
            Instead of numerical carbon metrics, EcoAware visualizes impact as a growing digital
            garden that mirrors the user's actual neighborhood. Plants grow based on sustainable
            actions; the visualization uses actual species native to the user's region.
            This decision emerged from Finding 4: locality creates emotional resonance.
          </p>
        </div>

        <div className="two-columns" style={{ marginTop: "var(--space-4)" }}>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Ambient Notifications</h4>
            <p style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              Instead of push notifications, EcoAware uses ambient widget updates. The home
              screen widget subtly shifts color throughout the day based on air quality in
              the user's area—information available but never demanding.
            </p>
          </div>
          <div className="framework-box">
            <h4 style={{ marginTop: 0 }}>Social Proof Nudges</h4>
            <p style={{ marginBottom: 0, fontSize: "var(--text-sm)" }}>
              Based on Finding 3, the app shows anonymized actions from neighbors:
              "3 households nearby chose reusable bags this week." No competition, just awareness.
            </p>
          </div>
        </div>
      </section>

      <span className="page-number">4 / 5</span>
    </article>
  );
}

function Page5() {
  return (
    <article className="page">
      <header style={{ marginBottom: "var(--space-6)" }}>
        <p className="section-label">Project 02 — EcoAware</p>
        <h2>Critical Reflection: Contradictions & Learnings</h2>
      </header>

      <section>
        <h3>What Didn't Work</h3>

        <div className="critical-box failure">
          <h4>❌ Failure 1: Gamification Backfired</h4>
          <p>
            <strong>Attempt:</strong> V1 included achievement badges and streaks, following
            conventional engagement patterns.
          </p>
          <p>
            <strong>Result:</strong> 4/8 test users reported feeling worse when they "broke a
            streak." The gamification designed to motivate became a source of eco-guilt.
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Learning:</strong> Extrinsic motivation (badges) can undermine intrinsic
            motivation (caring for environment). Removed all gamification from V2.
          </p>
        </div>

        <div className="critical-box failure">
          <h4>❌ Failure 2: Precise Data Felt Condescending</h4>
          <p>
            <strong>Attempt:</strong> Show exact grams of CO₂ saved per action.
          </p>
          <p>
            <strong>Result:</strong> Users didn't trust the precision and felt patronized.
            "How do they know my exact emissions from one grocery trip?"
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Learning:</strong> Directional feedback ("Your impact is growing") outperformed
            precise metrics. Honesty about uncertainty built trust.
          </p>
        </div>

        <div className="critical-box" style={{ background: "#fff3cd" }}>
          <h4>⚠️ Discovered Contradiction: Individual vs. Systemic</h4>
          <p>
            <strong>The tension:</strong> Focus on individual behavior can distract from
            systemic issues. "Why track my groceries when corporations are the real problem?"
          </p>
          <p style={{ marginBottom: 0 }}>
            <strong>Response:</strong> Added "Community Action" section showing local policy
            initiatives and collective impact. Individual action as gateway to civic engagement,
            not substitute for it.
          </p>
        </div>

        <ImagePlaceholder
          title="Before/After: Failed Approaches vs. Working Solutions"
          description="A two-column comparison showing three failed design approaches on the left and their successful replacements on the right. Use visual annotations to explain why each change worked."
          size="medium"
          elements={[
            "LEFT COLUMN - 'What Failed':",
            "1. Achievement badge grid (with X through it)",
            "2. '437.2g CO₂ saved' precise number (with X)",
            "3. 'Do better!' encouragement message (with X)",
            "",
            "RIGHT COLUMN - 'What Worked':",
            "1. Growing garden visualization (with ✓)",
            "2. 'Your garden is thriving' qualitative message (with ✓)",
            "3. 'Your neighbors are taking action too' social proof (with ✓)",
            "",
            "Arrows between columns with annotations:",
            "'Extrinsic → Intrinsic motivation'",
            "'Precision → Directional feedback'",
            "'Individual guilt → Social connection'",
          ]}
        />

        <h3>Key Takeaway</h3>
        <p>
          <strong>Sustainability design must resist the temptation of engagement metrics.</strong>
          Daily active users mean nothing if users feel worse after each interaction. Success
          should be measured in behavior change and emotional wellbeing, not app opens.
        </p>

        <div className="framework-box" style={{ marginTop: "var(--space-4)" }}>
          <h4 style={{ marginTop: 0 }}>💡 What I Think I Learned</h4>
          <p>
            There seems to be a kind of <strong>sweet spot for environmental feedback</strong>. Too precise
            ("you saved 437g of CO₂") and people don't trust it—they feel like you're making up numbers.
            Too vague ("you're helping!") and it feels meaningless, like corporate greenwashing.
          </p>
          <p style={{ marginBottom: 0 }}>
            The garden approach hit somewhere in between: concrete enough to feel real, but honest about
            not knowing exact numbers. Users trusted it more (4.2 vs 2.8 on a 5-point scale we used).
            I think this connects to something in Fogg's model about credibility of prompts, but I haven't
            fully worked out the connection yet. It's something I want to explore more.
          </p>
        </div>

        <div className="critical-box" style={{ background: "#f0f9ff", marginTop: "var(--space-4)" }}>
          <h4>❓ Things I'm Still Unsure About</h4>
          <p style={{ marginBottom: 0 }}>
            Honestly, the "individual action vs. systemic change" tension never fully resolved for me.
            Some participants felt like tracking groceries was pointless when corporations are the
            problem. I added the community action section, but I'm not convinced it really addresses
            the deeper issue. Maybe individual apps just can't solve this?
          </p>
        </div>
      </section>

      <span className="page-number">5 / 5</span>
    </article>
  );
}
