export const resumeData = {
  personalInfo: {
    name: "Hannah Xiao",
    title: "APM Candidate",
    location: "Seattle, WA",
    relocating: "Willing to relocate to San Francisco",
    email: "hannah.xiao@email.com",
    linkedin: "linkedin.com/in/hannahxiao",
    github: "github.com/hannahxiao",
  },

  education: {
    degree: "Bachelor of Arts in Economics",
    school: "University of Washington",
    year: "2025",
    gpa: "3.85",
    relevantCourses: [
      "Data Analysis & Statistics",
      "Econometrics",
      "Behavioral Economics",
      "Machine Learning Fundamentals",
    ],
  },

  experience: [
    {
      title: "Project Manager",
      organization: "University Research Lab",
      location: "Seattle, WA",
      duration: "2023 - 2025",
      highlights: [
        "Led market research initiatives for 3 faculty-partner projects, conducting 50+ stakeholder interviews",
        "Created insights decks and recommendations that informed product roadmap decisions for university-industry partnerships",
        "Managed cross-functional team of 4 researchers, coordinating timelines and deliverables",
        "Designed and executed user surveys (n=200+) to validate product hypotheses",
      ],
    },
    {
      title: "Data Analyst Intern",
      organization: "TechStart Consulting",
      location: "Seattle, WA",
      duration: "Summer 2024",
      highlights: [
        "Performed operational analyses using SQL and Python to identify efficiency opportunities for 2 clients",
        "Built interactive dashboards in Tableau to track key product metrics (engagement, retention, conversion)",
        "Supported product recommendations by analyzing user behavior data and A/B test results",
        "Delivered final presentation to client executives, resulting in adoption of 3 out of 4 recommendations",
      ],
    },
    {
      title: "Case Interview Coach",
      organization: "Consulting Club, UW",
      location: "Seattle, WA",
      duration: "2024",
      highlights: [
        "Coached 15 students on product sense and market sizing case interviews",
        "Developed structured frameworks for product prioritization and go-to-market strategy",
        "Led mock interview sessions and provided actionable feedback",
      ],
    },
  ],

  skills: {
    technical: [
      "SQL (PostgreSQL, MySQL)",
      "Python (pandas, NumPy, scikit-learn, Matplotlib)",
      "Excel & Google Sheets (pivot tables, VLOOKUP, macros)",
      "Tableau (dashboard design, data visualization)",
      "Figma (wireframing, prototyping)",
      "Git & GitHub (version control basics)",
      "Basic ML/AI (supervised learning, model evaluation, NDCG, A/B testing)",
    ],
    product: [
      "Product roadmapping and prioritization",
      "User research (interviews, surveys, usability testing)",
      "A/B testing and experimentation",
      "Metrics definition (KPIs, success metrics, guardrails)",
      "PRD writing and documentation",
      "Stakeholder management",
    ],
    analytical: [
      "Data analysis and statistical inference",
      "Cohort analysis and funnel optimization",
      "Market sizing and opportunity assessment",
      "Root cause analysis",
    ],
  },

  projects: [
    {
      name: "ConversAI: Conversational Search Prototype",
      description:
        "Led product discovery and prototyping for an AI search interface, improving answer relevance by 12%",
      technologies: ["Python", "SQL", "Figma", "A/B testing"],
    },
    {
      name: "SignalRank: Personalized Result Re-ranking",
      description:
        "Designed personalization layer that increased CTR by 9% while maintaining answer accuracy",
      technologies: ["Python", "SQL", "Tableau", "ML metrics"],
    },
    {
      name: "KG-Check: Knowledge Graph QA Quality Audit",
      description:
        "Conducted systematic audit of 2,000 answers, reducing projected error rate by 18%",
      technologies: ["Python", "SQL", "Data analysis"],
    },
  ],

  activities: [
    "Product Management Club, UW (Member, 2023-2025)",
    "Consulting Club, UW (Case Coach, 2024)",
    "Women in Tech, UW (Volunteer, 2023-2024)",
  ],

  awards: [
    "Dean's List (2023, 2024)",
    "University Research Grant Recipient (2024)",
  ],
};
