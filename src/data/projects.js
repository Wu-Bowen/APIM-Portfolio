export const projects = [
  {
    id: 1,
    slug: "conversational-search-prototype",
    title: "ConversAI: Conversational Search Prototype",
    subtitle: "Improving answer relevance and user trust in AI search",
    role: "Product Lead",
    timeline: "6 months (2024)",
    category: "AI/ML Product",
    shortDescription: "Led product discovery and prototyping for a conversational search interface, improving answer relevance by 12% and reducing time-to-answer by 8%.",

    problem: "Users of traditional search products often struggle with trust and relevance when interacting with AI-generated answers. Key pain points identified:\n\n- 58% of users expressed uncertainty about answer accuracy (baseline user survey, n=120)\n- Average time-to-answer was 42 seconds due to users cross-checking multiple sources\n- 34% of users abandoned queries after receiving an answer they couldn't verify\n- Limited transparency into how answers were generated or which sources were used",

    approach: [
      "Conducted 40 semi-structured user interviews (mix of power users and casual searchers) to understand trust factors and decision-making patterns",
      "Identified 3 key trust signals: source provenance, confidence scoring, and comparative perspectives",
      "Designed and prototyped 5 UI variations in Figma, testing information density vs. clarity tradeoffs",
      "Built a lightweight reranking model (Python + scikit-learn) to surface high-confidence answers first",
      "Ran A/B test with 3 UI variants (n=2,400 users, 2 weeks) measuring perceived relevance, time-to-answer, and task completion",
      "Implemented offline evaluation suite using NDCG and custom relevance metrics on historical query logs (15K labeled examples)"
    ],

    tools: ["Python", "Jupyter", "SQL", "Figma", "scikit-learn", "Pandas", "A/B testing framework", "User testing tools"],

    outcomes: [
      "+12% improvement in user-perceived answer relevance (measured via post-query survey)",
      "-8% reduction in average time-to-answer (42s to 38.6s)",
      "+15% increase in user confidence scores (5-point Likert scale: 3.2 to 3.7)",
      "23% reduction in query abandonment after initial answer",
      "Clear product roadmap for integrating provenance layers into production"
    ],

    metrics: {
      primary: "User-perceived answer relevance (+12%)",
      secondary: ["Time-to-answer (-8%)", "User confidence (+15%)", "Abandonment rate (-23%)"]
    },

    responsibilities: [
      "Led end-to-end product discovery: user research, problem scoping, and opportunity sizing",
      "Defined success metrics and instrumentation plan for experimentation",
      "Collaborated with engineering on reranking model feasibility and data requirements",
      "Designed and ran A/B experiments, analyzed results, and presented recommendations to stakeholders",
      "Created product roadmap and PRD for production integration"
    ],

    keyLearnings: [
      "Trust is multidimensional: users cared about source quality, recency, and comparative perspectives—not just confidence scores",
      "Small UI changes (e.g., showing \"3 sources agree\") had outsized impact on perceived credibility",
      "Offline metrics (NDCG) correlated weakly with online user satisfaction—required tight feedback loops",
      "Balancing transparency with information overload was the hardest product tradeoff"
    ],

    nextSteps: "If I were to continue this project, I would:\n\n1. **Personalization layer**: Test whether answer presentation should adapt based on user expertise (novice vs. expert)\n2. **Source diversity**: Measure whether showing diverse viewpoints increases trust for controversial topics\n3. **Latency vs. quality tradeoff**: Run experiments to find the optimal answer generation time before users perceive slowness\n4. **Longitudinal trust**: Track whether trust compounds over time for repeat users",

    fullCaseStudy: {
      context: "This project emerged from a broader initiative to build a trustworthy AI-powered search product. Traditional search engines return links; conversational AI returns direct answers. But this introduces a critical product challenge: users must trust a black-box system to give them accurate, unbiased information.\n\nOur hypothesis: by surfacing answer provenance and confidence signals, we could increase user trust and engagement without sacrificing answer quality.",

      deepDive: {
        research: "I conducted 40 user interviews over 3 weeks, split between:\n- 20 \"power users\" (daily searchers, technical backgrounds)\n- 20 \"casual users\" (occasional search, non-technical)\n\nKey findings:\n1. **Provenance matters more than confidence**: Users wanted to see *which* sources were used, not just a % confidence score\n2. **Trust is contextual**: For factual queries (e.g., \"capital of France\"), users trusted direct answers. For subjective/controversial queries, users wanted multiple perspectives\n3. **Speed vs. thoroughness**: Users tolerated 2-3 extra seconds for high-stakes queries (medical, financial) but not for simple lookups\n\nFrom this, I defined 3 design principles:\n- Show sources inline, not buried in a footnote\n- Highlight agreement/disagreement across sources\n- Optimize for scan-ability (users won't read paragraphs)",

        experiments: "**Experiment Design:**\nI designed an A/B test with 3 variants:\n- **Control**: Standard answer with no provenance\n- **Variant A**: Answer + inline source chips (clickable)\n- **Variant B**: Answer + source chips + confidence score\n- **Variant C**: Answer + comparative view (\"3 sources agree, 1 disagrees\")\n\n**Metrics:**\n- Primary: User-perceived relevance (post-query 5-point scale)\n- Secondary: Time-to-answer, click-through to sources, query abandonment\n\n**Sample size:** 2,400 users, stratified by query type (factual, subjective, navigational)\n\n**Results:**\n- Variant C won on all metrics\n- Variant B (with confidence score) performed *worse* than Variant A—users found % scores confusing\n- Variant C's comparative framing (\"3 sources agree\") was the key driver",

        modelWork: "I built a lightweight reranking model to surface high-confidence answers first:\n\n**Approach:**\n- Used historical query logs (15K labeled examples) to train a binary classifier (scikit-learn Gradient Boosting)\n- Features: source authority score, recency, query-answer semantic similarity (sentence-transformers), historical CTR\n- Offline eval: NDCG@5 = 0.78 (vs. baseline 0.71)\n\n**Key insight:** The model helped, but the UI changes (Variant C) drove more impact. This reinforced that *how* you present answers matters as much as *which* answers you surface.",

        prioritization: "**Tradeoffs I navigated:**\n1. **Information density vs. clarity**: Early prototypes showed 5-7 sources per answer. User testing revealed this was overwhelming. I cut it to 3 sources max, with a \"see more\" option.\n\n2. **Latency vs. quality**: Fetching and ranking sources added ~800ms. I ran a latency tolerance experiment and found users tolerated up to 1.5s for complex queries but not simple ones. We implemented dynamic timeouts based on query complexity.\n\n3. **Privacy vs. personalization**: We considered personalizing answers based on user history. Legal/privacy review flagged concerns. I scoped a privacy-preserving approach (on-device signals only) for future exploration.",

        wireframes: "**UI Wireframe (Variant C - Winner):**\n\nQuery: \"Is intermittent fasting effective?\"\n\n**Answer:**\nIntermittent fasting can be effective for weight loss and metabolic health, though results vary by individual.\n\n3 sources agree | 1 source has caveats\n\n[Mayo Clinic] [Harvard Health] [NIH] [More...]\n\n**Key elements:**\n- Answer first (users scan top-to-bottom)\n- Agreement indicator (builds trust)\n- Source chips (clickable, domain-recognizable)\n- \"More\" option (progressive disclosure)",

        prd: "**Product Requirements (Excerpt)**\n\n**Goal:** Increase user trust and answer relevance for conversational search\n\n**Success Metrics:**\n- User-perceived relevance: +10% (5-point scale)\n- Time-to-answer: <40s (from 42s baseline)\n- Query abandonment: <30% (from 34%)\n\n**User Stories:**\n1. As a casual user, I want to see which sources support an answer so I can decide if I trust it\n2. As a power user, I want to see if sources agree/disagree so I can assess answer confidence\n3. As a skeptical user, I want to click through to original sources to verify claims\n\n**Features:**\n- Inline source chips with domain names\n- Agreement/disagreement indicator\n- Clickable sources (open in new tab)\n- \"See more sources\" progressive disclosure\n\n**Non-goals:**\n- Full source metadata (author, publish date) → deferred to v2\n- Personalized source rankings → privacy concerns\n- AI-generated summaries of sources → risk of hallucination\n\n**Engineering Requirements:**\n- Source metadata API (returns domain, title, snippet)\n- Reranking service (Python, sub-500ms p95 latency)\n- Instrumentation: log clicks, dwell time, query abandonment\n\n**Launch Plan:**\n- Week 1-2: Internal dogfooding\n- Week 3-4: Beta with 500 users (10% sample)\n- Week 5+: Gradual rollout (50% → 100%)\n\n**Risks & Mitigations:**\n- **Risk:** Sources may not be available for all queries → **Mitigation:** Fallback to generic confidence score\n- **Risk:** Latency increases → **Mitigation:** Async loading of source chips\n- **Risk:** Users ignore sources → **Mitigation:** Track engagement metrics, iterate on UI",

        stakeholderPresentation: "**Slide Deck (Stakeholder Review)**\n\n**Slide 1: Problem**\n- 58% of users uncertain about answer accuracy\n- 34% abandon queries due to lack of verifiability\n- Opportunity: Increase trust = increase engagement\n\n**Slide 2: Solution**\n- Show source provenance inline\n- Highlight agreement/disagreement across sources\n- Example: \"3 sources agree | 1 disagrees\"\n\n**Slide 3: Experiment Results**\n- Variant C (comparative view) won on all metrics\n- +12% user-perceived relevance\n- -8% time-to-answer\n- +15% user confidence\n\n**Slide 4: Roadmap**\n- Q1: Launch Variant C to 100%\n- Q2: Add source diversity for controversial topics\n- Q3: Explore personalization (privacy-preserving)\n\n**Slide 5: Ask**\n- Approve engineering resources (2 eng, 1 design)\n- Commit to launch timeline (8 weeks)",

        retrospective: "**What Worked:**\n- User research uncovered the real problem (provenance > confidence scores)\n- A/B testing validated hypotheses before full investment\n- Lightweight model approach (scikit-learn) enabled rapid iteration\n\n**What Didn't:**\n- Initial UI prototypes were too complex (5-7 sources) → user testing saved us\n- Confidence scores confused users → learned to avoid \"AI-first\" metrics\n- Should have involved legal/privacy earlier to scope personalization feasibility\n\n**Lessons for Perplexity:**\nPerplexity's citation-first approach is the right foundation. But trust is about *how* you present sources, not just *that* you show them. Small UI changes (e.g., \"3 sources agree\") can have outsized impact. Product intuition + rigorous experimentation is the winning combination."
      }
    }
  },
  {
    id: 2,
    slug: "knowledge-graph-qa-audit",
    title: "Knowledge Graph QA Audit",
    subtitle: "Identifying and fixing answer quality issues at scale",
    role: "Product Analyst",
    timeline: "3 months (2023)",
    category: "Data Quality",
    shortDescription: "Conducted a systematic QA audit of a knowledge graph-powered QA system, identifying error patterns and reducing error rate by 18%.",

    problem: "Our knowledge graph-powered QA system had a 11.2% error rate, but we didn't know *why* answers were failing. Leadership needed a prioritized roadmap to improve quality.",

    approach: [
      "Sampled 500 queries (stratified by query type, traffic volume, and error likelihood)",
      "Manually annotated errors using a 6-category taxonomy (factual, outdated, incomplete, etc.)",
      "Analyzed error patterns by query type, source, and entity type",
      "Prioritized fixes by impact (error frequency) and feasibility (eng effort)",
      "Presented findings + roadmap to leadership"
    ],

    tools: ["SQL", "Python", "Pandas", "Data visualization (Matplotlib)", "Google Sheets (annotation)", "Looker (dashboards)"],

    outcomes: [
      "Identified 3 error types causing 67% of failures (factual errors, outdated data, entity disambiguation)",
      "Prioritized 5 high-impact fixes that could reduce error rate by 18%",
      "Got executive approval for Q1 roadmap (2 eng + 1 data analyst, 3 months)",
      "Established quarterly QA audit cadence"
    ],

    metrics: {
      primary: "Error rate reduction potential (-18%)",
      secondary: ["Error type coverage (67%)", "Annotation agreement (Cohen's kappa = 0.82)"]
    },

    responsibilities: [
      "Designed sampling strategy to ensure representative error coverage",
      "Built error taxonomy and annotation guidelines",
      "Manually annotated 500 queries with error labels",
      "Analyzed patterns using SQL + Pandas",
      "Created executive presentation with recommendations"
    ],

    keyLearnings: [
      "Most errors traced to 3 root causes (Pareto principle applies to QA)",
      "Data freshness was a bigger issue than model quality",
      "Entity disambiguation failures were invisible to users but hurt precision",
      "Engineering buy-in required pairing error analysis with feasibility assessment"
    ],

    nextSteps: "If I were to continue this project, I would:\n\n1. **Automated QA pipeline**: Build a system to flag likely errors before they reach users\n2. **Root cause monitoring**: Track error rates by category over time to catch regressions\n3. **User-reported errors**: Integrate user feedback loop to prioritize real-world issues\n4. **Continuous improvement**: Establish a culture of regular QA audits (quarterly cadence)",

    fullCaseStudy: {
      context: "This project was driven by a critical business need: our QA system had high traffic but inconsistent quality. Users were reporting errors, but we had no systematic way to understand *what* was breaking and *why*. Leadership needed a data-driven roadmap to improve quality without a full system rewrite.",

      deepDive: {
        methodology: "**Sampling Strategy:**\nI used stratified sampling to ensure coverage across:\n- **Query type**: Factual (\"Who is X?\"), comparative (\"X vs Y\"), temporal (\"When did X happen?\")\n- **Traffic volume**: High-traffic (top 20%), mid-traffic (20-80%), long-tail (bottom 20%)\n- **Error likelihood**: Known errors (user-reported), suspected errors (low confidence scores), random sample\n\n**Annotation Process:**\n- Built a 6-category error taxonomy: Factual error, Outdated data, Incomplete answer, Entity disambiguation, Source quality, Other\n- Annotated 500 queries over 3 weeks\n- Calculated inter-annotator agreement (Cohen's kappa = 0.82) to ensure consistency\n\n**Analysis:**\n- Used SQL to join query logs with knowledge graph metadata\n- Aggregated errors by type, source, entity, and query complexity\n- Visualized distributions using Matplotlib and Looker dashboards",

        findings: "**Key Findings:**\n\n1. **Factual errors (28% of failures)**: Caused by outdated knowledge graph data (e.g., \"Who is the CEO of X?\" → stale answer)\n\n2. **Entity disambiguation (24%)**: System confused similar entities (e.g., \"Paris\" → Paris, France vs. Paris Hilton)\n\n3. **Incomplete answers (15%)**: Query required multi-hop reasoning, but system only retrieved single-hop facts\n\n4. **Source quality (12%)**: Low-authority sources introduced misinformation\n\n5. **Outdated data (10%)**: Time-sensitive queries returned stale answers\n\n6. **Other (11%)**: Edge cases, malformed queries, etc.\n\n**Deeper Dive:**\n- 3 source families caused 45% of errors → deprecate or refresh\n- Entity disambiguation failures spiked for celebrity names and geographic entities\n- Temporal queries had 2x higher error rate than factual queries",

        prioritization: "**Fix Prioritization Framework:**\nI scored each fix opportunity by:\n- **Impact**: % of errors it would resolve\n- **Feasibility**: Eng effort (1-5 scale, from data refresh to model retraining)\n- **ROI**: Impact / Feasibility\n\n**Top 5 Fixes (by ROI):**\n1. **Data refresh** (Impact: 28%, Feasibility: 1) → Update stale knowledge graph data\n2. **Entity disambiguation** (Impact: 24%, Feasibility: 3) → Add entity linking step\n3. **Source deprecation** (Impact: 15%, Feasibility: 1) → Blacklist low-quality sources\n4. **Multi-hop reasoning** (Impact: 15%, Feasibility: 4) → Improve retrieval to support multi-hop queries\n5. **Temporal query handling** (Impact: 10%, Feasibility: 2) → Add recency filters for time-sensitive queries\n\n**Total projected impact**: 18% error rate reduction (11.2% → 9.2%)",

        roadmap: "**Q1 Roadmap (3 months):**\n\n**Month 1: Data refresh + source deprecation**\n- Refresh knowledge graph with latest data (2 eng weeks)\n- Deprecate 3 low-quality source families (1 eng week)\n- Expected impact: -10% error rate\n\n**Month 2: Entity disambiguation**\n- Add entity linking step to query pipeline (3 eng weeks)\n- Test on historical queries (1 eng week)\n- Expected impact: -5% error rate\n\n**Month 3: Retrieval tuning**\n- Improve multi-hop retrieval (2 eng weeks)\n- Add recency filters for temporal queries (1 eng week)\n- Monitor and iterate (1 eng week)\n- Expected impact: -3% error rate\n\n**Post-launch:**\n- Establish quarterly QA audit cadence\n- Build automated error detection pipeline",

        stakeholderPresentation: "**Slide Deck (Executive Review)**\n\n**Slide 1: Problem**\n- QA error rate: 11.2% (industry benchmark: ~8%)\n- User complaints increasing\n- Need: Prioritized roadmap to improve quality\n\n**Slide 2: Methodology**\n- Sampled 500 queries (stratified by type, traffic, error likelihood)\n- Annotated errors with 6-category taxonomy\n- Analyzed patterns and prioritized fixes\n\n**Slide 3: Findings**\n- 3 error types cause 67% of failures\n- 3 source families cause 45% of errors → deprecate or refresh\n- Top 3 fix opportunities = 18% error rate reduction\n\n**Slide 4: Roadmap**\n- Q1: Data refresh + entity disambiguation\n- Q2: Retrieval tuning\n- Projected: 11.2% → 9.2% error rate (-18%)\n\n**Slide 5: Ask**\n- Approve Q1 roadmap (2 eng + 1 data analyst for 3 months)\n- Establish quarterly audit cadence",

        retrospective: "**What Worked:**\n- Systematic approach (sampling, annotation, taxonomy) yielded actionable insights\n- Quantified impact (18% reduction) got executive buy-in\n- Cross-functional collaboration (ML, data eng, product) ensured feasible recommendations\n\n**What Didn't:**\n- Annotation took 4 weeks (vs. planned 2 weeks)—underestimated complexity\n- Should have involved engineering earlier to validate fixability scores\n- Initial error taxonomy had 12 categories (too granular)—consolidated to 6\n\n**Lessons for Perplexity:**\nBuilding trustworthy AI requires relentless focus on data quality. Perplexity's citation-first approach is the right foundation, but it must be paired with systematic QA and rapid iteration on data pipelines. This project taught me that product intuition + rigorous analysis is the winning combination."
      }
    }
  }
];

export const apmTakeHomePrompt = {
  title: "APM Take-Home Exercise",
  prompt: "**Scenario:**\nYou're a PM at Perplexity. Usage data shows that 28% of users who start a search session ask a follow-up question, but only 9% ask a *third* question. This suggests users aren't fully utilizing Perplexity's conversational capabilities.\n\nYour task:\n1. Hypothesize why users drop off after the second question\n2. Propose 3 product solutions (with tradeoffs)\n3. Define success metrics and an experiment to test your top solution\n4. Outline a 6-month roadmap if your solution succeeds\n\n**Time limit:** 30 minutes",

  modelAnswer: {
    hypotheses: [
      {
        hypothesis: "Users don't realize Perplexity supports multi-turn conversations",
        evidence: "Anecdotal: user interviews mention \"I thought it was like Google—one query at a time\"",
        testable: "Survey users who drop after Q2: \"Did you know you could ask follow-ups?\""
      },
      {
        hypothesis: "The answer quality degrades after Q2 (context window issues)",
        evidence: "Technical: conversation history grows, retrieval precision may drop",
        testable: "Measure answer accuracy (human eval) for Q1 vs. Q2 vs. Q3"
      },
      {
        hypothesis: "Users get the answer they need by Q2 (not a problem!)",
        evidence: "Behavioral: if users return to Perplexity later, they got value",
        testable: "Measure task completion and return rates"
      }
    ],

    proposedSolutions: [
      {
        solution: "1. Conversational Priming (UI change)",
        description: "After Q1, show suggested follow-up questions (e.g., \"You might also ask: ..., ..., ...\")",
        pros: ["Low eng lift", "Directly addresses discoverability", "Can personalize suggestions"],
        cons: ["Might feel pushy", "Hard to generate good suggestions", "Could add noise if irrelevant"],
        tradeoff: "Engagement vs. intrusiveness"
      },
      {
        solution: "2. Conversation History UI (feature)",
        description: "Add a visible conversation thread in the sidebar, showing Q1 > A1 > Q2 > A2",
        pros: ["Makes conversation persistent/visible", "Encourages multi-turn thinking", "Useful for returning to old threads"],
        cons: ["Higher eng cost (requires state management)", "Takes up screen real estate", "May not address root cause"],
        tradeoff: "Feature richness vs. simplicity"
      },
      {
        solution: "3. Improve Q3 Answer Quality (model improvement)",
        description: "If the issue is quality degradation, fine-tune the model to maintain accuracy with longer context",
        pros: ["Addresses root cause if hypothesis 2 is true", "Improves product quality overall"],
        cons: ["High eng cost (model retraining)", "Uncertain impact (might not be the issue)", "Long timeline (weeks/months)"],
        tradeoff: "Long-term quality vs. short-term velocity"
      }
    ],

    recommendedSolution: {
      choice: "Solution 1: Conversational Priming",
      rationale: "I'd start with Solution 1 because:\n- **Low risk, high learning**: We can test it quickly and learn whether discoverability is the bottleneck\n- **User-centric**: If users *want* to ask more questions but don't know how, this directly helps\n- **Measurable**: Clear success metrics (Q3 ask rate, engagement)\n\nIf Solution 1 succeeds, we can layer in Solution 2 (conversation history) to reinforce the mental model. Solution 3 (model improvement) is a hedge—we should run a parallel quality audit to ensure degradation isn't the issue."
    },

    experiment: {
      hypothesis: "Showing suggested follow-up questions after Q2 will increase Q3 ask rate from 9% to >=12%",
      design: "**A/B Test Design:**\n- **Control**: Current experience (no follow-up suggestions)\n- **Treatment**: After A2 (answer to Q2), show 3 suggested follow-ups\n- **Sample**: 10,000 users (5K treatment, 5K control), stratified by user type (new vs. returning)\n- **Duration**: 2 weeks (enough for statistical power)",
      metrics: {
        primary: "Q3 ask rate (% of Q2 users who ask Q3)",
        secondary: [
          "Avg. questions per session (should increase)",
          "Session duration (proxy for engagement)",
          "User satisfaction (NPS survey post-session)"
        ],
        guardrails: [
          "Q1->Q2 conversion rate (shouldn't drop)",
          "Answer relevance (shouldn't degrade)",
          "Page load time (suggestions must load fast)"
        ]
      },
      successCriteria: "Q3 ask rate >=12% AND no regression on guardrails"
    },

    roadmap: {
      month1: "- Launch A/B test\n- Monitor metrics daily\n- Qualitative feedback (user interviews)",
      month2: "- Analyze results\n- If positive: scale to 50%\n- Start design work on conversation history UI",
      month3: "- Full rollout (100%)\n- Instrument conversation thread analytics\n- Begin conversation history prototype",
      month4: "- Beta test conversation history (1,000 users)\n- Measure impact on retention and multi-turn usage",
      month5: "- Refine conversation history UI based on feedback\n- Prepare for full rollout",
      month6: "- Launch conversation history to 100%\n- Establish baseline for next iteration (e.g., proactive AI suggestions)"
    },

    keyTradeoffs: [
      {
        tradeoff: "Engagement vs. Intrusiveness",
        decision: "Show suggestions only after Q2 (not Q1) to avoid overwhelming new users"
      },
      {
        tradeoff: "Personalization vs. Speed",
        decision: "Use template-based suggestions (fast) before investing in personalized ML model"
      },
      {
        tradeoff: "Feature Richness vs. Simplicity",
        decision: "Start with lightweight priming, add conversation history only if validated"
      }
    ],

    retrospective: "**How I'd refine this if I had more time:**\n- Run a pre-experiment survey to validate hypotheses (which is the real blocker?)\n- Analyze Q2 > Q3 drop-off by query type (factual vs. exploratory) to inform solution design\n- Consider a \"hybrid\" approach: priming for new users, conversation history for power users\n- Set up a longitudinal study: does increasing Q3 usage improve retention over 30 days?"
  }
};