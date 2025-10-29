const translations = {
  en: {
    accueil: "Home",
    apropos: "About",
    competences: "Skills",
    projets: "Projects",
    experience: "Experience",
    contact: "Contact",
    dataScientist: "Data Scientist",
    basedInParis: "Based in Paris",
    curriculumVitae: "Curriculum Vitae",
    aboutProjects: "About & Projects",
    missionPart1: 'I believe <span class="font-medium theme-text-primary">data science</span> can drive <span class="font-medium theme-text-primary">innovation and real impact</span>.',
    missionPart2: 'Exploring how <span class="font-medium theme-text-primary">artificial intelligence</span> can unlock new opportunities and solutions,<br />with a focus on creating real-world value.',
    missionPart3: 'I enjoy learning through hands-on research,<br />experiments, and real-world data applications.',
    aboutTitle: "About Me",
    bioPart1: "Passionate about data and AI, I turn complex problems into simple and useful solutions. With over 2 years of experience in Data Science, I’ve built strong skills in Machine Learning, Deep Learning, and NLP.",
    bioPart2: "My approach combines technical precision and business understanding to deliver reliable and production-ready models. I’ve worked on projects from recommendation systems to computer vision pipelines.",
    bioPart3: "I’m always curious and stay up to date with the latest AI tools and technologies to keep improving and bringing value to my work.",
    highlight1Title: "Technical Skills",
    highlight1Desc: "Background in AI & Big Data, hands-on Machine Learning projects",
    highlight2Title: "Impactful Projects",
    highlight2Desc: "AI solutions deployed in production with measurable results",
    highlight3Title: "Team Spirit",
    highlight3Desc: "Collaborating with cross-functional and agile teams",
    skillsTitle: "Technical Skills",
    specializationTitle: "Specializations",
    category1Title: "Languages & Tools",
    category2Title: "Data Engineering",
    category3Title: "Machine Learning",
    category4Title: "Data Visualization",
    specializations: [
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Time Series Forecasting",
      "Recommender Systems",
      "MLOps & Model Deployment",
      "Statistical Modeling",
      "Deep Learning Architectures",
      "A/B Testing & Experimentation"
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "A few projects showcasing my Data Science and AI experience",
    projectButtonCode: "Code",
    projectButtonDemo: "Demo",
    projectCategories: {
      ml: "Machine Learning",
      ts: "Time Series",
      nlp: "Natural Language Processing",
      cv: "Computer Vision"
    },
    projects: [
      {
        title: "E-commerce Recommendation System",
        description: "Built a hybrid recommendation engine using collaborative and content-based filtering. Improved conversion rate by 35% and average basket size by 28%.",
        category: "Machine Learning"
      },
      {
        title: "Sales Forecasting Model",
        description: "Developed a time series model that includes seasonality and external factors. Achieved under 8% MAPE for 30-day forecasts, used for stock optimization.",
        category: "Time Series"
      },
      {
        title: "Customer Sentiment Analysis",
        description: "Created a real-time NLP pipeline for customer feedback. Reached 94% accuracy on multi-class sentiment analysis, with an API and dashboard for insights.",
        category: "Natural Language Processing"
      },
      {
        title: "Visual Anomaly Detection",
        description: "Designed an automated defect detection system for production lines. Reduced false positives by 60%, deployed on edge devices.",
        category: "Computer Vision"
      }
    ],
    experienceTitle: "Experience & Education",
    workExperience: [
      {
        company: "TechCorp Solutions",
        role: "Senior Data Scientist",
        period: "2022 - Present",
        location: "Paris, France",
        description: "Leading the Data Science team and developing AI solutions to improve business operations and decision-making.",
        achievements: [
          "Built a full MLOps pipeline from scratch",
          "Reduced operational costs by 40% through AI automation",
          "Mentored 3 junior data scientists"
        ],
        technologies: ["Python", "PyTorch", "Kubernetes", "MLflow", "AWS"]
      },
      {
        company: "DataFlow Analytics",
        role: "Data Scientist",
        period: "2020 - 2022",
        location: "Lyon, France",
        description: "Developed predictive models for retail and finance clients. Focused on NLP and Computer Vision projects.",
        achievements: [
          "Deployed over 15 ML models in production",
          "Improved client KPIs by 25% on average",
          "Built an internal framework for faster ML development"
        ],
        technologies: ["Python", "TensorFlow", "Docker", "FastAPI", "GCP"]
      },
      {
        company: "StartupAI",
        role: "Junior Data Scientist",
        period: "2019 - 2020",
        location: "Paris, France",
        description: "Worked on personalized recommendation systems in a startup environment. Developed complete AI pipelines from data to deployment.",
        achievements: [
          "Developed the company’s first recommendation engine",
          "Managed full data lifecycle processes",
          "Worked closely with product and engineering teams"
        ],
        technologies: ["Python", "Scikit-learn", "Flask", "PostgreSQL"]
      }
    ],
    education: [
      {
        school: "École Centrale Paris",
        degree: "Master in Data Science & AI",
        period: "2017 - 2019",
        location: "Paris, France",
        description: "Focused on Machine Learning and Deep Learning. Final project on predictive analytics for finance.",
        achievements: [
          "Graduated top of the class (GPA: 18.5/20)",
          "Thesis on adversarial neural networks",
          "6-month research internship at MIT"
        ]
      },
      {
        school: "Pierre and Marie Curie University",
        degree: "Bachelor in Applied Mathematics",
        period: "2014 - 2017",
        location: "Paris, France",
        description: "Strong foundation in statistics, probability, and applied mathematics for engineering.",
        achievements: [
          "Graduated with honors",
          "Specialized in advanced statistics",
          "Received excellence award in numerical analysis"
        ]
      }
    ]
  }
};

export default translations;
