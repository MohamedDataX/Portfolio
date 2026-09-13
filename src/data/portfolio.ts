/**
 * Single source of truth for all portfolio content.
 * Translatable fields are `Localized` ({ en, fr }); names, tech and URLs stay plain.
 */
import { asset } from '@/lib/asset';
import type { Localized } from '@/i18n/ui';

export const profile = {
  name: 'Mohamed Ait Sidi Hou',
  roles: {
    en: ['Data & AI Engineer'],
    fr: ['Ingénieur Data & IA'],
  },
  heroTitle: {
    en: 'Data & AI Engineer',
    fr: 'Ingénieur Data & IA',
  },
  location: 'Paris, France',
  tagline: {
    en: 'I build data pipelines and production-ready AI systems.',
    fr: 'Je construis des pipelines de données et des systèmes d’IA qui tournent en production.',
  },
  intro: {
    en: [
      'Data & AI Engineer based in Paris, focused on building data pipelines, machine learning systems and AI applications that run in production.',
      'Outside of work: aerospace, sports, music, gaming, and travel.',
    ],
    fr: [
      'Ingénieur Data & IA basé à Paris. Je travaille sur des pipelines de données, des modèles de machine learning et des applications d’IA utilisées en production.',
      'En dehors du travail : aérospatial, sport, musique, jeux vidéo et voyages.',
    ],
  },
  cvUrl: asset('cv.pdf'), // CV pdf
  email: 'aitsidihoumohamed@protonmail.com',
};

export const socials = {
  email: 'aitsidihoumohamed@protonmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-ash/',
  github: 'https://github.com/MohamedDataX',
};

export const WEB3FORMS_KEY: string = import.meta.env.VITE_WEB3FORMS_KEY ?? '';

/** Section ids, in page order. Labels live in `src/i18n/ui.ts`. */
export const navItems = ['home', 'about', 'projects', 'experience', 'contact'] as const;

export interface SkillCategory {
  title: Localized;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Data Engineering', fr: 'Data Engineering' },
    skills: ['Apache Spark', 'PySpark', 'Databricks', 'Airflow', 'dbt', 'SSIS'],
  },
  {
    title: { en: 'Machine Learning & AI', fr: 'Machine Learning & IA' },
    skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face', 'XGBoost'],
  },
  {
    title: { en: 'MLOps', fr: 'MLOps' },
    skills: ['MLflow', 'Docker', 'Git', 'CI/CD', 'Model Deployment'],
  },
  {
    title: { en: 'Cloud & Platforms', fr: 'Cloud & Plateformes' },
    skills: ['Microsoft Azure', 'AWS', 'Microsoft Fabric', 'Dataiku'],
  },
  {
    title: { en: 'Visualization', fr: 'Visualisation' },
    skills: ['Power BI', 'Tableau', 'Streamlit'],
  },
  {
    title: { en: 'Languages & Tools', fr: 'Langages & Outils' },
    skills: ['Python', 'SQL', 'Gitlab', 'Bash'],
  },
];

export interface Project {
  title: Localized;
  category: Localized;
  description: Localized;
  highlights: Localized<string[]>;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: {
      en: 'SparkGuardian: AI PySpark Linter & Optimizer',
      fr: 'SparkGuardian : linter et optimiseur PySpark basé sur l’IA',
    },
    category: { en: 'Data Engineering & GenAI', fr: 'Data Engineering & GenAI' },
    description: {
      en: 'AI-powered PySpark linter and optimizer that detects performance anti-patterns, estimates cloud costs and suggests automated fixes',
      fr: 'Linter et optimiseur PySpark qui repère les anti-patterns de performance, estime les coûts cloud et propose des corrections automatiques.',
    },
    highlights: {
      en: [
        'Detects performance bottlenecks and estimates monthly cloud savings',
        'Uses a local LLM to suggest code fixes without sending data externally',
        'Runs in CI/CD to catch costly anti-patterns before Prod',
      ],
      fr: [
        'Détecte les goulots d’étranglement et estime les économies cloud par mois',
        'Utilise un LLM local pour proposer des corrections, sans envoyer de données à l’extérieur',
        'Tourne en CI/CD pour bloquer les anti-patterns coûteux avant la prod',
      ],
    },
    technologies: ['PySpark', 'Python', 'LLMs', 'AST Analysis', 'CI/CD', 'RAG', 'GenAI'],
    githubUrl: 'https://github.com/MohamedDataX/sparkguardian',
  },
  {
    title: {
      en: 'Real-Time License Plate Detection with Spark Structured Streaming',
      fr: 'Détection de plaques d’immatriculation en temps réel avec Spark Structured Streaming',
    },
    category: { en: 'Data Engineering & AI', fr: 'Data Engineering & IA' },
    description: {
      en: 'Real-time computer vision pipeline built with Apache Spark Structured Streaming, processing license-plate images through distributed streaming inference, OCR, and analytics.',
      fr: 'Pipeline de vision par ordinateur en temps réel sur Apache Spark Structured Streaming. Les images de plaques passent par une inférence distribuée, de l’OCR puis de l’analyse.',
    },
    highlights: {
      en: [
        'Built a production-style Spark Structured Streaming pipeline with micro-batch processing, checkpointing, and fault-tolerant data ingestion',
        'Integrated YOLOv8n + ONNX Runtime for real-time plate detection and Tesseract OCR directly into the Spark streaming pipeline',
        'Streams, processes, and persists detection results as partitioned Parquet data, with a live Streamlit monitoring dashboard',
      ],
      fr: [
        'Pipeline Spark Structured Streaming pensé comme en production : micro-batchs, checkpointing et ingestion tolérante aux pannes',
        'YOLOv8n + ONNX Runtime pour détecter les plaques en temps réel, et Tesseract OCR intégré directement dans le pipeline Spark',
        'Résultats stockés en Parquet partitionné, avec un dashboard Streamlit pour suivre le flux en direct',
      ],
    },
    technologies: ['Apache Spark', 'Structured Streaming', 'Scala', 'Python', 'YOLOv8', 'ONNX', 'Tesseract OCR', 'Parquet'],
    githubUrl: 'https://github.com/LisaMoula/plate-detection-structured-streaming',
  },
  {
    title: {
      en: 'ML Models in Production (Consulting)',
      fr: 'Modèles de ML en production (conseil)',
    },
    category: { en: 'MLOps', fr: 'MLOps' },
    description: {
      en: 'Deployed and maintained a portfolio of machine-learning models for clients across multiple sectors.',
      fr: 'Déploiement et maintenance de modèles de machine learning pour des clients de plusieurs secteurs.',
    },
    highlights: {
      en: [
        '15+ ML models deployed to production',
        'Optimized ETL/ELT pipelines by up to 40%',
      ],
      fr: [
        'Plus de 15 modèles de ML mis en production',
        'Pipelines ETL/ELT optimisés, jusqu’à 40 % plus rapides',
      ],
    },
    technologies: ['PySpark', 'Microsoft Fabric', 'Power BI', 'Azure', 'SQL'],
    githubUrl: socials.github,
  },
  {
    title: {
      en: 'Sales Forecasting & Optimization',
      fr: 'Prévision et optimisation des ventes',
    },
    category: { en: 'Time Series', fr: 'Séries temporelles' },
    description: {
      en: 'Time-series forecasting incorporating seasonality and external drivers, used to optimize stock and planning.',
      fr: 'Prévisions de ventes qui tiennent compte de la saisonnalité et de facteurs externes, utilisées pour mieux gérer les stocks et la planification.',
    },
    highlights: {
      en: [
        'Seasonality-aware forecasting for planning decisions',
        'Feature pipeline for external regressors',
      ],
      fr: [
        'Prévisions saisonnières pour aider aux décisions de planification',
        'Pipeline de features pour les variables externes',
      ],
    },
    technologies: ['Python', 'Prophet', 'Pandas', 'Streamlit'],
    githubUrl: socials.github,
  },
];

export interface Experience {
  company: string;
  role: Localized;
  period: Localized;
  location: string;
  description: Localized;
  achievements: Localized<string[]>;
  technologies: string[];
  logo: string;
  website: string;
}

export const experiences: Experience[] = [
  {
    company: 'La Poste Groupe',
    role: { en: 'Data Scientist', fr: 'Data Scientist' },
    period: { en: 'Sep 2025 · Present', fr: 'Sept. 2025 · Aujourd’hui' },
    location: 'Paris, France',
    description: {
      en: 'Building data and AI solutions across La Poste and its subsidiaries',
      fr: 'Solutions data et IA pour La Poste et ses filiales',
    },
    achievements: {
      en: [
        'Engineered an open-set NLP classification model achieving 95% accuracy, with automated CI/CD retraining and a Streamlit app',
        'Optimized Databricks Spark pipelines processing 14B+ rows, cutting runtime by 57% and FinOps costs by 44%',
        'Built GeoBricks, a full-stack spatial dataviz web app (FastAPI, Kepler.gl, Azure Web App) integrated with Databricks Unity Catalog via M2M auth and Python SDK',
        'Contributed feature engineering and experimentation to a large-scale ML regression project',
      ],
      fr: [
        'Modèle NLP de classification open-set à 95 % d’accuracy, avec réentraînement automatique en CI/CD et une app Streamlit',
        'Optimisation de pipelines Spark sur Databricks traitant plus de 14 milliards de lignes : temps d’exécution réduit de 57 % et coûts FinOps de 44 %',
        'Création de GeoBricks, une app web full-stack de dataviz géospatiale (FastAPI, Kepler.gl, Azure Web App) connectée à Databricks Unity Catalog via une authentification M2M et le SDK Python',
        'Feature engineering et expérimentations sur un projet de régression ML à grande échelle',
      ],
    },
    technologies: ['Azure - Databricks', 'PySpark', 'Spark', 'Python', 'Scikit-learn', 'NLP', 'FastAPI', 'Streamlit', 'GitLab CI/CD'],
    logo: asset('laposte.png'),
    website: 'https://www.lapostegroupe.com/',
  },
  {
    company: 'Actinvision',
    role: { en: 'Data Consultant', fr: 'Consultant Data' },
    period: { en: 'Sep 2024 · May 2025', fr: 'Sept. 2024 · Mai 2025' },
    location: 'Strasbourg, France',
    description: {
      en: 'Delivered data engineering and BI solutions for clients across the Microsoft ecosystem',
      fr: 'Projets de data engineering et de BI pour des clients sur l’écosystème Microsoft',
    },
    achievements: {
      en: [
        'Reduced data warehouse loading time by 40% by redesigning incremental SSIS/SQL Server pipelines',
        'Supported a SQL Server data warehouse migration by adapting SSIS packages, optimizing critical tables, and validating data integrity',
        'Monitored and administered a Microsoft Fabric platform, including pipelines, jobs, access and capacity usage',
      ],
      fr: [
        'Temps de chargement du data warehouse réduit de 40 % en repensant les pipelines incrémentaux SSIS/SQL Server',
        'Migration d’un data warehouse SQL Server : adaptation des packages SSIS, optimisation des tables critiques et contrôle de l’intégrité des données',
        'Suivi et administration d’une plateforme Microsoft Fabric : pipelines, jobs, accès et consommation de capacité',
      ],
    },
    technologies: ['Microsoft Fabric', 'Power BI', 'SSIS', 'SQL Server', 'SSMS', 'Azure DevOps', 'Azure', 'ETL', 'Data Warehouse'],
    logo: asset('Actinvision.png'),
    website: 'https://www.actinvision.com/',
  },
  {
    company: 'Azura Group',
    role: { en: 'Data Developer', fr: 'Développeur Data' },
    period: { en: 'Jun 2024 · Sep 2024', fr: 'Juin 2024 · Sept. 2024' },
    location: 'Perpignan, France',
    description: {
      en: 'Developed and maintained data solutions focused on ingestion, transformation, and database management.',
      fr: 'Développement et maintenance de solutions data : ingestion, transformation et gestion de bases de données.',
    },
    achievements: {
      en: [
        'Developed an SSIS data pipeline to automate business processes and consolidate data from multiple flat files',
        'Administered and maintained SQL Server databases using SSMS, ensuring data availability and reliability',
        'Collaborated in an Agile environment with Data Engineers, PMO, and Scrum Masters to deliver data solutions',
      ],
      fr: [
        'Pipeline SSIS pour automatiser des processus métier et regrouper les données de plusieurs fichiers plats',
        'Administration et maintenance de bases SQL Server avec SSMS, pour des données disponibles et fiables',
        'Travail en équipe Agile avec des Data Engineers, le PMO et des Scrum Masters',
      ],
    },
    technologies: ['SSIS', 'SSMS', 'Azure', 'SQL', 'SQL Server'],
    logo: asset('AzuraLogo.png'),
    website: 'https://azura-group.com',
  },
];

export interface Education {
  school: string;
  degree: Localized;
  period: string;
  location: string;
  description: Localized;
  achievements: Localized<string[]>;
  logo: string;
  website: string;
}

export const education: Education[] = [
  {
    school: 'ESGI',
    degree: { en: 'Master · AI & Big Data', fr: 'Master · IA & Big Data' },
    period: '2025 · 2027',
    location: 'Paris, France',
    description: {
      en: 'Deep learning, advanced ML and distributed systems.',
      fr: 'Deep learning, ML avancé et systèmes distribués.',
    },
    achievements: { en: ['In progress'], fr: ['En cours'] },
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'ESGI',
    degree: { en: 'Bachelor · AI & Big Data', fr: 'Bachelor · IA & Big Data' },
    period: '2024 · 2025',
    location: 'Paris, France',
    description: {
      en: 'Statistics, data engineering and applied AI.',
      fr: 'Statistiques, data engineering et IA appliquée.',
    },
    achievements: {
      en: ['With honours', 'Top of class in Mathematics'],
      fr: ['Diplômé avec mention', 'Major de promo en mathématiques'],
    },
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'Université de Montpellier',
    degree: {
      en: 'BSc · Mathematics & Computer Science',
      fr: 'Licence · Mathématiques & Informatique',
    },
    period: '2021 · 2023',
    location: 'Montpellier, France',
    description: {
      en: 'Applied mathematics, programming and statistics.',
      fr: 'Mathématiques appliquées, programmation et statistiques.',
    },
    achievements: {
      en: ['Advanced Statistics', 'Python, C & Java Programming'],
      fr: ['Statistiques avancées', 'Programmation Python, C et Java'],
    },
    logo: asset('umlogoo.png'),
    website: 'https://sciences.edu.umontpellier.fr/',
  },
];
