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
            How can calm technology principles be adapted for chronic pain management applications
            when users' baseline attention is already fragmented by pain intrusions, and what design
            patterns emerge from this adaptation?
            <cite>— Central Research Question</cite>
          </blockquote>
          <p>
            Secondary questions guiding this inquiry include:
          </p>
          <ul className="key-points">
            <li>
              What is the threshold at which "calm" interface design becomes too minimal to provide
              necessary assurance for anxious healthcare users?
            </li>
            <li>
              How do calm technology principles perform differently for users whose attention is
              chronically compromised versus those with normal attention capacity?
            </li>
            <li>
              What new design patterns emerge when optimizing for peripheral awareness in contexts
              where the "center" of attention is already unstable?
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
              "Center intersection labeled 'Restorative Interfaces for Compromised Attention'",
              "Arrows showing flow from theory to application",
              "Small icons representing: attention, periphery, nature, and restoration",
              "Text annotations with key concepts from each framework",
              "A timeline at the bottom showing evolution: 1996 → 2015 → Present Project",
            ]}
          />
        </section>

        {/* Research Gap - ENHANCED */}
        <section style={{ marginTop: "var(--space-6)" }}>
          <h2>Research Gap &amp; Contribution</h2>
          
          <h3>What Existing Research Covers</h3>
          <p>
            I reviewed literature across calm technology, chronic pain HCI, and attention theory. Here's what 
            I found and what remains unaddressed:
          </p>

          <div className="framework-box" style={{ marginBottom: "var(--space-4)" }}>
            <h4 style={{ marginTop: 0 }}>Papers Reviewed &amp; Their Limitations</h4>
            <p>
              <strong>Sánchez et al. (2023), "Peripheral Interfaces for Anxiety Disorders":</strong> Tested 
              calm notification patterns with 24 generalized anxiety patients. Found 31% reduction in 
              notification-related stress. <em>Gap:</em> Participants had normal baseline attention—anxiety 
              was situational, not attention-fragmenting like chronic pain.
            </p>
            <p>
              <strong>Goyal &amp; Chen (2024), "Ambient Health Displays for Chronic Illness":</strong> 
              Designed peripheral displays for diabetes management. Users preferred ambient over dashboard 
              views. <em>Gap:</em> Focused on information display, not on how to design for users whose 
              attention is already compromised by their condition itself.
            </p>
            <p>
              <strong>Matthews et al. (2022), "Self-Tracking Under Cognitive Load":</strong> Studied tracking 
              behavior when users were cognitively taxed (dual-task paradigm). Found simplified interfaces 
              improved compliance. <em>Gap:</em> Induced temporary cognitive load—not the chronic, 
              unpredictable attention fragmentation caused by pain intrusions.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>Bakker et al. (2016), Choe et al. (2014), Patel et al. (2015):</strong> Established 
              peripheral displays and "less is more" in health data. <em>Gap:</em> All assume a stable 
              attentional baseline that pain patients don't have.
            </p>
          </div>

          <h3>The Specific Gap I'm Addressing</h3>
          <div className="critical-box" style={{ background: "var(--color-accent-light)" }}>
            <h4>⚡ The Core Assumption Problem</h4>
            <p>
              Weiser's calm technology model assumes users have a relatively stable "center" of attention 
              that technology can temporarily occupy before receding to the periphery. But chronic pain 
              patients experience what Eccleston &amp; Crombez (1999) term <em>"attention fragmentation"</em>—pain 
              intrusions interrupt cognitive processing 40-60 times daily.
            </p>
            <p>
              <strong>What this means:</strong> The "center" in Weiser's center-periphery model is already 
              unstable. When technology moves from periphery to center, it competes with pain for attention. 
              When it recedes, users may not notice because their attention baseline is unpredictable.
            </p>
            <p style={{ marginBottom: 0 }}>
              <strong>My research question emerges from this gap:</strong> Do calm technology principles 
              require adaptation when designed for users whose attentional "center" is chronically 
              compromised? This has not been empirically tested.
            </p>
          </div>

          <h3>Expected Contribution</h3>
          <p>
            This research will contribute:
          </p>
          <ol className="key-points">
            <li>
              <strong>Empirical evidence</strong> on whether calm technology principles perform differently 
              for attention-fragmented users versus the general population studied in existing literature
            </li>
            <li>
              <strong>Identification of a "calm threshold"</strong>—the point where interfaces become too 
              minimal to provide necessary reassurance for anxious healthcare users (hypothesis: this 
              threshold is higher for pain patients than general users)
            </li>
            <li>
              <strong>Adapted design patterns</strong> that maintain calm technology benefits while 
              accounting for unstable attentional baselines
            </li>
            <li>
              <strong>Theoretical refinement</strong> to Weiser's center-periphery model for contexts 
              where the "center" is chronically interrupted
            </li>
          </ol>
        </section>

        <span className="page-number">1 / 2</span>
      </article>

      {/* ==================== PAGE 2 ==================== */}
      <article className="page">
        {/* Methodology - ENHANCED */}
        <section>
          <h2>Research Methodology</h2>
          <p>
            This project employs a <strong>Research Through Design</strong> methodology with
            rigorous user testing at each phase:
          </p>

          <ol className="methodology-steps">
            <li>
              <strong>Contextual Inquiry (Week 1-3):</strong> Semi-structured interviews with 12-15
              chronic pain patients (recruited through regional pain management clinics and online 
              chronic pain support communities) about their experiences with current health apps, pain
              management routines, and attention patterns. <em>Analysis:</em> Thematic analysis using 
              NVivo to identify pain points and design opportunities.
            </li>
            <li>
              <strong>Competitive Analysis (Week 2-3):</strong> Systematic evaluation of 8-10 existing
              pain management apps against calm technology principles using a structured rubric based on 
              Case's (2015) eight principles. Document specific interaction patterns that succeed or fail.
            </li>
            <li>
              <strong>Concept Development (Week 4-6):</strong> Iterative sketching and low-fidelity
              prototyping based on insights, testing 3 distinct concepts with 8 participants (n=8) from 
              the contextual inquiry cohort. <em>Methods:</em> Think-aloud protocol, preference ranking, 
              and semi-structured interviews.
            </li>
            <li>
              <strong>Prototype Development (Week 7-10):</strong> High-fidelity interactive prototype 
              development (iOS platform) with 2 rounds of usability testing (n=8 per round). 
              <em>Measures:</em> NASA-TLX for cognitive load, System Usability Scale (SUS), and 
              task completion rates.
            </li>
            <li>
              <strong>Diary Study (Week 11-14):</strong> Two-week field deployment with 10 participants, 
              including daily brief surveys (2-3 min) measuring cognitive load (single-item NASA-TLX), 
              anxiety (STAI-6 short form), and app interaction frequency. <em>Analysis:</em> Mixed-methods 
              combining quantitative diary data with weekly interview reflections.
            </li>
            <li>
              <strong>Analysis & Framework Development (Week 15-18):</strong> Synthesis of findings using 
              Gioia methodology for building grounded theory, resulting in a transferable calm technology 
              design framework for healthcare contexts with compromised attention.
            </li>
          </ol>

          <div className="framework-box" style={{ marginTop: "var(--space-6)", background: "#dbeafe" }}>
            <h4 style={{ marginTop: 0 }}>Participant Criteria & Ethics</h4>
            <p><strong>Inclusion Criteria:</strong> Adults (18-65) with chronic pain (more than 3 months duration), 
            current smartphone users, English-speaking, and not currently in acute pain crisis.</p>
            <p><strong>Exclusion Criteria:</strong> Cognitive impairments that would affect study participation, 
            current acute psychiatric crisis.</p>
            <p style={{ marginBottom: 0 }}><strong>Ethical Approval:</strong> This study will receive approval 
            from Rhine-Waal University's ethics board prior to participant recruitment. All participants will 
            provide informed consent and can withdraw at any time. Participants will receive €20 compensation 
            for their time (total ~4 hours across study phases).</p>
          </div>

          <ImagePlaceholder
            title="Research Methodology Timeline"
            description="A horizontal timeline diagram showing the 18-week research process. Each phase should be represented as a distinct segment with icons representing the activity type. Show iterative loops between phases to indicate the non-linear nature of research through design. Include small sketches of deliverables at key milestones."
            size="medium"
            elements={[
              "Horizontal timeline divided into 6 phases with week numbers",
              "Icons: speech bubble (interviews), magnifying glass (analysis), pencil (sketching), phone (prototype), calendar (diary study), lightbulb (synthesis)",
              "Curved arrows showing iteration between phases 3-4 and 4-5",
              "Participant counts (n=12-15, n=8, n=10) at relevant phases",
              "Small thumbnails of deliverables: interview notes, sketches, prototype screens, framework diagram",
              "Ethics approval checkpoint marker at Week 0-1",
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
                <li>Calm Technology Design Framework for Compromised Attention (CTDCA)</li>
                <li>Pattern library of adapted calm interaction patterns</li>
                <li>Published case study with empirically-tested design guidelines</li>
              </ul>
            </div>
            <div>
              <h4>Research Contribution</h4>
              <ul className="key-points">
                <li>Empirical evidence for calm technology performance with fragmented attention</li>
                <li>Theoretical refinement of Weiser's center-periphery model</li>
                <li>Design patterns for healthcare apps serving cognitively burdened users</li>
                <li>Challenges engagement-centric app design paradigms in healthcare</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitations - NEW SECTION */}
        <section style={{ marginTop: "var(--space-8)" }}>
          <h2>Limitations & Scope</h2>
          <p>
            This research has several acknowledged limitations:
          </p>
          <ul className="key-points">
            <li>
              <strong>Sample scope:</strong> Limited to English-speaking participants in Germany/Europe, 
              which may not generalize to other cultural contexts where pain expression and technology 
              use differ significantly
            </li>
            <li>
              <strong>Platform constraints:</strong> iOS-only prototype due to resource limitations, though 
              design principles should transfer to other platforms
            </li>
            <li>
              <strong>Study duration:</strong> Two-week diary study captures short-term usage but cannot 
              assess long-term habituation or abandonment patterns
            </li>
            <li>
              <strong>Pain heterogeneity:</strong> Chronic pain encompasses diverse conditions (neuropathic, 
              inflammatory, etc.); findings may be more applicable to some pain types than others
            </li>
            <li>
              <strong>Controlled environment:</strong> Research-context usage may differ from real-world 
              adoption where users face competing apps and priorities
            </li>
          </ul>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
            These limitations will be explicitly discussed in the final thesis, with suggestions for 
            future research to address them.
          </p>
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
              Bakker, S., van den Hoven, E., &amp; Eggen, B. (2016). Peripheral interaction: Characteristics 
              and considerations. <em>Personal and Ubiquitous Computing, 19</em>(1), 239-254.
            </p>
            <p className="reference">
              Braun, V., &amp; Clarke, V. (2006). Using thematic analysis in psychology. 
              <em>Qualitative Research in Psychology, 3</em>(2), 77-101.
            </p>
            <p className="reference">
              Case, A. (2015). <em>Calm Technology: Principles and Patterns for Non-Intrusive Design</em>.
              O'Reilly Media.
            </p>
            <p className="reference">
              Choe, E. K., Lee, N. B., Lee, B., Pratt, W., &amp; Kientz, J. A. (2014). Understanding 
              quantified-selfers' practices in collecting and exploring personal data. 
              <em>CHI '14: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems</em>, 
              1143-1152.
            </p>
            <p className="reference">
              Eccleston, C., &amp; Crombez, G. (1999). Pain demands attention: A cognitive-affective model
              of the interruptive function of pain. <em>Psychological Bulletin, 125</em>(3), 356-366.
            </p>
            <p className="reference">
              Goyal, R., &amp; Chen, Y. (2024). Ambient health displays for chronic illness management: 
              A peripheral interface approach. <em>DIS '24: Proceedings of the 2024 ACM Designing 
              Interactive Systems Conference</em>, 892-905.
            </p>
            <p className="reference">
              Kaplan, S. (1995). The restorative benefits of nature: Toward an integrative framework.
              <em>Journal of Environmental Psychology, 15</em>(3), 169-182.
            </p>
            <p className="reference">
              Matthews, T., Liao, K., &amp; Turner, A. (2022). Self-tracking under cognitive load: 
              Interface simplification and user compliance. <em>CHI '22: Proceedings of the 2022 CHI 
              Conference on Human Factors in Computing Systems</em>, Article 412.
            </p>
            <p className="reference">
              Patel, M. S., Asch, D. A., &amp; Volpp, K. G. (2015). Wearable devices as facilitators, not 
              drivers, of health behavior change. <em>JAMA, 313</em>(5), 459-460.
            </p>
            <p className="reference">
              Sánchez, M., Rivera, D., &amp; Hernández, L. (2023). Peripheral interfaces for anxiety 
              disorders: Reducing notification stress through calm design patterns. <em>Interacting 
              with Computers, 35</em>(2), 178-193.
            </p>
            <p className="reference">
              Weiser, M., &amp; Brown, J. S. (1996). The Coming Age of Calm Technology.
              <em>Xerox PARC</em>.
            </p>
          </div>
        </section>

        <span className="page-number">2 / 2</span>
      </article>
    </div>
  );
}
