const translations = {
  fr: {
    accueil: "Accueil",
    apropos: "À propos",
    competences: "Compétences",
    projets: "Projets",
    experience: "Expérience",
    contact: "Contact",
    dataScientist: "Data Scientist",
    basedInParis: "Basé à Paris",
    curriculumVitae: 'Curriculum vitae',
    aboutProjects: 'À propos & projets',
    missionPart1: 'Je crois que la <span class="font-medium theme-text-primary">data science</span> peut être plus <span class="font-medium theme-text-primary">innovatrice et impactante</span>.',
    missionPart2: 'Explorer le potentiel de <span class="font-medium theme-text-primary">l’intelligence artificielle</span>.<br />Croire qu’elle peut ouvrir de nouvelles opportunités et solutions,<br />avec pour mission d’en révéler tout le potentiel.',
    missionPart3: 'Je cherche à obtenir des insights par la recherche pratique,<br />les expérimentations et les applications réelles.',
    aboutTitle: "À propos de moi",
    bioPart1: "Passionné par l'intelligence artificielle et les données, je transforme des problèmes complexes en solutions innovantes. Avec plus de 2 ans d'expérience en Data Science, j'ai développé une expertise approfondie en Machine Learning, Deep Learning et NLP.",
    bioPart2: "Mon approche combine rigueur scientifique et pragmatisme business pour livrer des modèles performants et déployables en production. J'ai eu l'opportunité de travailler sur des projets variés, de la recommandation personnalisée à la vision par ordinateur.",
    bioPart3: "Toujours en quête d'apprentissage, je reste à l'affût des dernières innovations technologiques pour apporter une valeur ajoutée constante aux projets sur lesquels je travaille.",
    highlight1Title: "Compétence Technique",
    highlight1Desc: "Formation en IA & Big Data, projets concrets en Machine Learning",
    highlight2Title: "Projets Impactants",
    highlight2Desc: "Solutions IA déployées en production avec ROI mesurable",
    highlight3Title: "Esprit d'Équipe",
    highlight3Desc: "Collaboration avec des équipes pluridisciplinaires et agiles",
    skillsTitle: "Compétences Techniques",
    specializationTitle: "Domaines de spécialisation",
    category1Title: "Langages & Outils",
    category2Title: "Data Engineering",
    category3Title: "Machine Learning",
    category4Title: "Data Visualization",
    specializations: [
      "Natural Language Processing (NLP)",
      "Vision par ordinateur",
      "Analyse de séries temporelles",
      "Systèmes de recommandation",
      "MLOps & Déploiement de modèles",
      "Modélisation statistique",
      "Architecture Deep Learning",
      "Tests A/B & Expérimentation"
    ],
    projectsTitle: "Projets Réalisés",
    projectsSubtitle: "Une sélection de projets qui illustrent mon expertise en Data Science et IA",
    projectButtonCode: "Code",
    projectButtonDemo: "Démo",
    projectCategories: {
      ml: "Machine Learning",
      ts: "Séries Temporelles",
      nlp: "Traitement du Langage Naturel",
      cv: "Vision par Ordinateur"
    },
    projects: [
      {
        title: "Système de Recommandation E-commerce",
        description: "Développement d'un moteur de recommandation hybride utilisant du collaborative filtering et du content-based filtering. Amélioration de 35% du taux de conversion et de 28% du panier moyen.",
        category: "Machine Learning"
      },
      {
        title: "Prédiction de Séries Temporelles",
        description: "Modèle de prédiction des ventes avec gestion de la saisonnalité et des événements externes. MAPE < 8% sur les prédictions à 30 jours, déployé en production pour optimiser les stocks.",
        category: "Séries Temporelles"
      },
      {
        title: "Analyseur de Sentiment Client",
        description: "Pipeline NLP pour analyser les avis clients en temps réel. Classification multi-classes avec 94% de précision, intégration API et dashboard de monitoring des tendances sentiment.",
        category: "Traitement du Langage Naturel"
      },
      {
        title: "Détection d'Anomalies Visuelles",
        description: "Système de détection automatique de défauts qualité sur chaîne de production. Réduction de 60% des faux positifs par rapport au système précédent, déployé sur edge computing.",
        category: "Vision par Ordinateur"
      }
    ],
    experienceTitle: "Expérience & Formation",
    workExperience: [
  {
    company: "TechCorp Solutions",
    role: "Senior Data Scientist",
    period: "2022 - Présent",
    location: "Paris, France",
    description: "Lead de l'équipe Data Science (5 personnes). Développement de solutions IA pour l'optimisation des processus métier et l'aide à la décision.",
    achievements: [
      "Mise en place d'une architecture MLOps complète",
      "Réduction de 40% des coûts opérationnels via automation IA",
      "Encadrement et formation de 3 data scientists juniors"
    ],
    technologies: ["Python", "PyTorch", "Kubernetes", "MLflow", "AWS"]
  },
  {
    company: "DataFlow Analytics",
    role: "Data Scientist",
    period: "2020 - 2022",
    location: "Lyon, France",
    description: "Développement de modèles prédictifs pour des clients dans les secteurs retail et finance. Spécialisation en NLP et computer vision.",
    achievements: [
      "Déploiement de 15+ modèles ML en production",
      "Amélioration de 25% des KPIs clients moyens",
      "Création d'un framework interne de développement ML"
    ],
    technologies: ["Python", "TensorFlow", "Docker", "FastAPI", "GCP"]
  },
  {
    company: "StartupAI",
    role: "Junior Data Scientist",
    period: "2019 - 2020",
    location: "Paris, France",
    description: "Premier poste en Data Science dans une startup spécialisée en recommandation personnalisée. Développement de bout en bout des solutions IA.",
    achievements: [
      "Développement du premier moteur de recommandation",
      "Gestion complète du cycle de vie des données",
      "Collaboration directe avec les équipes produit"
    ],
    technologies: ["Python", "Scikit-learn", "Flask", "PostgreSQL"]
  }
],
education: [
  {
    school: "École Centrale Paris",
    degree: "Master en Data Science & IA",
    period: "2017 - 2019",
    location: "Paris, France",
    description: "Spécialisation en Machine Learning et Deep Learning. Projet de fin d'études sur l'analyse prédictive en finance.",
    achievements: [
      "Major de promotion (GPA: 18.5/20)",
      "Thèse sur les réseaux de neurones adversaires",
      "Stage de recherche au MIT (6 mois)"
    ]
  },
  {
    school: "Université Pierre et Marie Curie",
    degree: "Licence en Mathématiques Appliquées",
    period: "2014 - 2017",
    location: "Paris, France",
    description: "Formation solide en statistiques, probabilités et mathématiques pour l'ingénieur.",
    achievements: [
      "Mention Très Bien",
      "Spécialisation en statistiques avancées",
      "Prix d'excellence en analyse numérique"
      ]
     }
    ],

    

   
  },
  en: {
    accueil: "Home",
    apropos: "About",
    competences: "Skills",
    projets: "Projects",
    experience: "Experience",
    contact: "Contact",
    dataScientist: "Data Scientist",
    basedInParis: "Based in Paris",
    curriculumVitae: 'Curriculum vitae',
    aboutProjects: 'About & projects',
    missionPart1: 'I believe <span class="font-medium theme-text-primary">data science</span> can be more <span class="font-medium theme-text-primary">innovative and impactful</span>.',
    missionPart2: 'Exploring the potential of <span class="font-medium theme-text-primary">artificial intelligence</span>.<br />Believing it can unlock new opportunities and solutions,<br />with a mission to reveal its possibilities.',
    missionPart3: 'I pursue insights through hands-on research,<br />experiments, and real-world applications.',
    aboutTitle: "About Me",
    bioPart1: "Passionate about AI and data, I turn complex problems into innovative solutions. With over  years of experience in Data, I've developed deep expertise in Machine Learning, Deep Learning, and NLP.",
    bioPart2: "My approach combines scientific rigor with business pragmatism to deliver performant models ready for production. I’ve worked on a variety of projects, from personalized recommendation systems to computer vision.",
    bioPart3: "Always eager to learn, I stay updated on the latest tech innovations to continuously bring value to the projects I contribute to.",
    highlight1Title: "Technical Skill",
    highlight1Desc: "Training in AI & Big Data, hands-on projects in Machine Learning",
    highlight2Title: "Impactful Projects",
    highlight2Desc: "AI solutions deployed in production with measurable ROI",
    highlight3Title: "Team Spirit",
    highlight3Desc: "Collaboration with cross-functional and agile teams",
    skillsTitle: "Technical Skills",
    specializationTitle: "Specializations",
    category1Title: "Languages & Tools",
    category2Title: "Data Engineering",
    category3Title: "Machine Learning",
    category4Title: "Data Visualization",
    specializations: [
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Time Series Analysis",
      "Recommender Systems",
      "MLOps & Model Deployment",
      "Statistical Modeling",
      "Deep Learning Architecture",
      "A/B Testing & Experimentation"
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "A selection of projects showcasing my expertise in Data Science and AI",
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
        description: "Built a hybrid recommendation engine using collaborative and content-based filtering. Achieved 35% conversion uplift and 28% increase in average cart value.",
        category: "Machine Learning"
      },
      {
        title: "Time Series Forecasting",
        description: "Sales forecasting model accounting for seasonality and external events. Delivered < 8% MAPE over 30-day predictions; deployed to production for inventory optimization.",
        category: "Time Series"
      },
      {
        title: "Customer Sentiment Analyzer",
        description: "Real-time NLP pipeline analyzing customer feedback. Achieved 94% accuracy in multi-class classification, with API integration and sentiment trend dashboard.",
        category: "Natural Language Processing"
      },
      {
        title: "Visual Anomaly Detection",
        description: "Automated quality defect detection for production lines. Reduced false positives by 60% vs prior system, deployed to edge devices.",
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
    description: "Leading the Data Science team (5 people). Developing AI solutions for business process optimization and decision support.",
    achievements: [
      "Implemented a full MLOps architecture",
      "Reduced operational costs by 40% through AI automation",
      "Mentored and trained 3 junior data scientists"
    ],
    technologies: ["Python", "PyTorch", "Kubernetes", "MLflow", "AWS"]
  },
  {
    company: "DataFlow Analytics",
    role: "Data Scientist",
    period: "2020 - 2022",
    location: "Lyon, France",
    description: "Built predictive models for clients in retail and finance. Specialized in NLP and computer vision.",
    achievements: [
      "Deployed 15+ ML models to production",
      "Improved client KPIs by 25% on average",
      "Created an internal ML development framework"
    ],
    technologies: ["Python", "TensorFlow", "Docker", "FastAPI", "GCP"]
  },
  {
    company: "StartupAI",
    role: "Junior Data Scientist",
    period: "2019 - 2020",
    location: "Paris, France",
    description: "First Data Science role at a startup specializing in personalized recommendation. Developed end-to-end AI solutions.",
    achievements: [
      "Developed the first recommendation engine",
      "Managed the entire data lifecycle",
      "Collaborated closely with product teams"
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
    description: "Specialized in Machine Learning and Deep Learning. Final project focused on predictive finance analytics.",
    achievements: [
      "Valedictorian (GPA: 18.5/20)",
      "Thesis on adversarial neural networks",
      "Research internship at MIT (6 months)"
    ]
  },
  {
    school: "Pierre and Marie Curie University",
    degree: "Bachelor in Applied Mathematics",
    period: "2014 - 2017",
    location: "Paris, France",
    description: "Strong background in statistics, probabilities, and applied mathematics for engineering.",
    achievements: [
      "Graduated with honors",
      "Specialized in advanced statistics",
      "Excellence award in numerical analysis"
    ]
  }
],

    
  },
};

export default translations;
