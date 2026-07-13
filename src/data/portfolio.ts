/**
 * Single source of truth for all portfolio content.
 * Edit here — every section reads from this file.
 */
import {
  Code2,
  Database,
  Brain,
  BarChart3,
  Cloud,
  GitBranch,
  type LucideIcon,
} from 'lucide-react';
import { asset } from '@/lib/asset';

export const profile = {
  name: 'Mohamed Ait Sidi Hou',
  roles: ['Data Scientist', 'Data Engineer'],
  location: 'Paris, France',
  tagline:
    'I turn raw data into production-grade AI systems — from modelling to deployment, with measurable business impact.',
  intro: [
    'Data Scientist & Data Engineer focused on unlocking the value of data through hands-on machine learning and robust data pipelines.',
    'After a data-development internship and a first role as a Data Consultant, I joined Groupe La Poste on a two-year apprenticeship as a Data Scientist, alongside my Master’s in AI & Big Data.',
    'I combine strong technical skills with a functional, product-minded approach — turning data into actionable, high-value solutions while staying current with the latest advances in the field.',
  ],
  cvUrl: asset('cv.pdf'), // TODO: drop your CV PDF in /public as cv.pdf
  email: 'aitsidihoum@gmail.com',
};

export const socials = {
  email: 'aitsidihoum@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mohamed-ash/',
  github: 'https://github.com/MohamedDataX',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

export interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Languages & Tools',
    skills: ['Python', 'SQL', 'R', 'Java', 'Git', 'Docker'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    skills: ['PySpark', 'Pandas', 'Airflow', 'SSIS', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: Brain,
    title: 'Machine Learning & AI',
    skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Hugging Face', 'XGBoost'],
  },
  {
    icon: BarChart3,
    title: 'Visualization',
    skills: ['Power BI', 'Tableau', 'Plotly', 'Streamlit', 'Matplotlib'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Platforms',
    skills: ['Azure', 'GCP', 'Microsoft Fabric', 'Dataiku DSS'],
  },
  {
    icon: GitBranch,
    title: 'MLOps',
    skills: ['MLflow', 'CI/CD (CML)', 'Docker', 'Model Deployment'],
  },
];

export const specializations = [
  'Natural Language Processing',
  'Time Series Forecasting',
  'Recommender Systems',
  'Computer Vision',
  'Statistical Modeling',
  'ETL / ELT',
  'MLOps & Deployment',
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

// Projects derived from real work. Replace githubUrl/demoUrl with live links.
export const projects: Project[] = [
  {
    title: 'NLP Text Classification Engine',
    category: 'Natural Language Processing',
    description:
      'Modern transformer-based pipeline for automatic classification of operational text at scale, built within a data/AI hub.',
    highlights: [
      'Cut operational processing time by ~85% through AI automation',
      'Fine-tuned Hugging Face transformers with CI/CD (CML) integration',
    ],
    technologies: ['Python', 'Hugging Face', 'NLP', 'CML', 'Dataiku DSS'],
    githubUrl: socials.github,
  },
  {
    title: 'Internal Recommendation System',
    category: 'Machine Learning',
    description:
      'The company’s first internal recommendation engine, covering the full data lifecycle from ingestion to serving.',
    highlights: [
      'Designed and shipped the first production recommender',
      'End-to-end pipeline: ingestion, feature engineering, serving',
    ],
    technologies: ['Python', 'Scikit-learn', 'SSIS', 'SQL', 'Azure'],
    githubUrl: socials.github,
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
    period: 'Sep 2025 — Present',
    location: 'Paris, France',
    description: 'Building advanced AI solutions within the Data/AI hub.',
    achievements: [
      'Deployed a modern NLP model for text classification',
      'Reduced operational time by ~85% through AI automation',
    ],
    technologies: ['Python', 'Hugging Face', 'NLP', 'CML', 'Dataiku DSS'],
    logo: asset('laposte.png'),
    website: 'https://www.lapostegroupe.com/',
  },
  {
    company: 'Actinvision',
    role: 'Data Consultant',
    period: 'Sep 2024 — Sep 2025',
    location: 'Strasbourg, France',
    description: 'Data consulting for clients across a range of industries.',
    achievements: [
      'Deployed 15+ ML models to production',
      'Optimized ETL/ELT pipelines by up to 40%',
      'SQL query tuning, indexing and performance work',
    ],
    technologies: ['Fabric', 'PySpark', 'SSIS', 'Power BI', 'Azure', 'SQL'],
    logo: asset('Actinvision.png'),
    website: 'https://www.actinvision.com',
  },
  {
    company: 'Azura Group',
    role: 'Data Developer',
    period: 'Jun 2024 — Sep 2024',
    location: 'Perpignan, France',
    description: 'Full-stack data development within the group’s data team.',
    achievements: [
      'Built the first internal recommendation engine',
      'Managed the full data lifecycle',
      'Worked in Agile with PMO & Scrum Masters',
    ],
    technologies: ['SSIS', 'SSMS', 'Azure', 'SQL'],
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
    degree: 'Master — AI & Big Data',
    period: '2025 — 2027',
    location: 'Paris, France',
    description: 'Deep learning, advanced ML and distributed systems.',
    achievements: ['With honours', 'Thesis on financial prediction'],
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'ESGI',
    degree: 'Bachelor — AI & Big Data',
    period: '2024 — 2025',
    location: 'Paris, France',
    description: 'Statistics, data engineering and applied AI.',
    achievements: ['With honours', 'Top of class in Mathematics'],
    logo: asset('logoESGI.png'),
    website: 'https://www.esgi.fr',
  },
  {
    school: 'Université de Montpellier',
    degree: 'BSc — Mathematics & Computer Science',
    period: '2021 — 2023',
    location: 'Montpellier, France',
    description: 'Applied mathematics, programming and statistics.',
    achievements: ['Advanced statistics', 'Python & C programming'],
    logo: asset('umlogoo.png'),
    website: 'https://sciences.edu.umontpellier.fr/',
  },
];
