/**
 * Single source of truth for all portfolio content
 */
import { asset } from '@/lib/asset';

export const profile = {
  name: 'Mohamed Ait Sidi Hou',
  roles: ['Data & AI Engineer'],
  heroTitle: 'Data & AI Engineer',
  location: 'Paris, France',
  tagline: 'I build data pipelines and production-ready AI systems.',
  intro: [
    'Data & AI Engineer based in Paris, focused on building data pipelines, machine learning systems and AI applications that run in production.',
    'Outside of work: aerospace, sports, music, gaming, and travel.',
  ],
  cvUrl: asset('cv.pdf'), // CV pdf
  email: 'aitsidihoumohamed@protonmail.com',
};

export const socials = {
  email: 'aitsidihoumohamed@protonmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-ash/',
  github: 'https://github.com/MohamedDataX',
};

export const WEB3FORMS_KEY: string = import.meta.env.VITE_WEB3FORMS_KEY ?? '';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Engineering',
    skills: ['Apache Spark', 'PySpark', 'Databricks', 'Airflow', 'dbt', 'SSIS'],
  },
  {
    title: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face', 'XGBoost'],
  },
  {
    title: 'MLOps',
    skills: ['MLflow', 'Docker', 'Git', 'CI/CD', 'Model Deployment'],
  },
  {
    title: 'Cloud & Platforms',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Microsoft Fabric',
      'Dataiku',
    ],
  },
  {
    title: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Streamlit'],
  },
  {
    title: 'Languages & Tools',
    skills: ['Python', 'SQL', 'Gitlab', 'Bash'],
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}


export const projects: Project[] = [
  {
    title: 'SparkGuardian: AI PySpark Linter & Optimizer',
    category: 'Data Engineering & GenAI',
    description:
      'AI-powered PySpark linter and optimizer that detects performance anti-patterns, estimates cloud costs and suggests automated fixes',
    highlights: [
      'Detects performance bottlenecks and estimates monthly cloud savings',
      'Uses a local LLM to suggest code fixes without sending data externally',
      'Runs in CI/CD to catch costly anti-patterns before Prod',
    ],
    technologies: ['PySpark', 'Python', 'LLMs', 'AST Analysis', 'CI/CD', 'RAG', 'GenAI'],
    githubUrl: 'https://github.com/MohamedDataX/sparkguardian',
  },
  {
    title: 'Real-Time License Plate Detection with Spark Structured Streaming',
    category: 'Data Engineering & AI',
    description:
      'Real-time computer vision pipeline built with Apache Spark Structured Streaming, processing license-plate images through distributed streaming inference, OCR, and analytics.',
    highlights: [
      'Built a production-style Spark Structured Streaming pipeline with micro-batch processing, checkpointing, and fault-tolerant data ingestion',
      'Integrated YOLOv8n + ONNX Runtime for real-time plate detection and Tesseract OCR directly into the Spark streaming pipeline',
      'Streams, processes, and persists detection results as partitioned Parquet data, with a live Streamlit monitoring dashboard',
    ],
    technologies: ['Apache Spark', 'Structured Streaming', 'Scala', 'Python', 'YOLOv8', 'ONNX', 'Tesseract OCR', 'Parquet'],
    githubUrl: 'https://github.com/LisaMoula/plate-detection-structured-streaming',
  },
  {
    title: 'ML Models in Production (Consulting)',
    category: 'MLOps',
    description:
      'Deployed and maintained a portfolio of machine-learning models for clients across multiple sectors.',
    highlights: [
      '15+ ML models deployed to production',
      'Optimized ETL/ELT pipelines by up to 40%',
    ],
    technologies: ['PySpark', 'Microsoft Fabric', 'Power BI', 'Azure', 'SQL'],
    githubUrl: socials.github,
  },
  {
    title: 'Sales Forecasting & Optimization',
    category: 'Time Series',
    description:
      'Time-series forecasting incorporating seasonality and external drivers, used to optimize stock and planning.',
    highlights: [
      'Seasonality-aware forecasting for planning decisions',
      'Feature pipeline for external regressors',
    ],
    technologies: ['Python', 'Prophet', 'Pandas', 'Streamlit'],
    githubUrl: socials.github,
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  website: string;
}

export const experiences: Experience[] = [
  {
    company: 'La Poste Groupe',
    role: 'Data Scientist',
    period: 'Sep 2025 · Present',
    location: 'Paris, France',
    description: 'Building data and AI solutions across La Poste and its subsidiaries',
    achievements: [
      'Engineered an open-set NLP classification model achieving 95% accuracy, with automated CI/CD retraining and a Streamlit app',
      'Optimized Databricks Spark pipelines processing 14B+ rows, cutting runtime by 57% and FinOps costs by 44%',
      'Built GeoBricks, a full-stack spatial dataviz web app (FastAPI, Kepler.gl, Azure Web App) integrated with Databricks Unity Catalog via M2M auth and Python SDK',
      'Contributed feature engineering and experimentation to a large-scale ML regression project',
    ],
    technologies: ['Azure - Databricks', 'PySpark', 'Spark', 'Python', 'Scikit-learn', 'NLP', 'FastAPI', 'Streamlit', 'GitLab CI/CD'],
    logo: asset('laposte.png'),
    website: 'https://www.lapostegroupe.com/',
  },
  {
    company: 'Actinvision',
    role: 'Data Consultant',
    period: 'Sep 2024 · May 2025',
    location: 'Strasbourg, France',
    description: 'Delivered data engineering and BI solutions for clients across the Microsoft ecosystem',
    achievements: [
      'Reduced data warehouse loading time by 40% by redesigning incremental SSIS/SQL Server pipelines',
      'Supported a SQL Server data warehouse migration by adapting SSIS packages, optimizing critical tables, and validating data integrity',
      'Monitored and administered a Microsoft Fabric platform, including pipelines, jobs, access and capacity usage',
    ],
    technologies: ['Microsoft Fabric', 'Power BI', 'SSIS', 'SQL Server', 'SSMS', 'Azure DevOps', 'Azure', 'ETL', 'Data Warehouse'],
    logo: asset('Actinvision.png'),
    website: 'https://www.actinvision.com/',
  },
  {
    company: 'Azura Group',
    role: 'Data Developer',
    period: 'Jun 2024 · Sep 2024',
    location: 'Perpignan, France',
    description: 'Developed and maintained data solutions focused on ingestion, transformation, and database management.',
    achievements: [
      'Developed an SSIS data pipeline to automate business processes and consolidate data from multiple flat files',
      'Administered and maintained SQL Server databases using SSMS, ensuring data availability and reliability',
      'Collaborated in an Agile environment with Data Engineers, PMO, and Scrum Masters to deliver data solutions',
    ],
    technologies: ['SSIS', 'SSMS', 'Azure', 'SQL', 'SQL Server'],
    logo: asset('AzuraLogo.png'),
    website: 'https://azura-group.com',
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  logo: string;
  website: string;
}

export const education: Education[] = [
  {
    school: 'ESGI',
    degree: 'Master · AI & Big Data',
    period: '2025 · 2027',
    location: 'Paris, France',
    description: 'Deep learning, advanced ML and distributed systems.',
    achievements: ['In progress'],
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'ESGI',
    degree: 'Bachelor · AI & Big Data',
    period: '2024 · 2025',
    location: 'Paris, France',
    description: 'Statistics, data engineering and applied AI.',
    achievements: ['With honours', 'Top of class in Mathematics'],
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'Université de Montpellier',
    degree: 'BSc · Mathematics & Computer Science',
    period: '2021 · 2023',
    location: 'Montpellier, France',
    description: 'Applied mathematics, programming and statistics.',
    achievements: ['Advanced Statistics', 'Python, C & Java Programming'],
    logo: asset('umlogoo.png'),
    website: 'https://sciences.edu.umontpellier.fr/',
  },
];
