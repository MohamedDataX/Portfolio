import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';

interface WorkExperience {
  type: 'work';
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

interface Education {
  type: 'education';
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  logo: string;
  website: string;  
}

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  const experiences: WorkExperience[] = [
    {
      type: 'work',
      company: "La Poste Groupe",
      role: "DATA Scientist",
      period: "Sep 2025 - Présent",
      location: "Paris, France",
      description: "Développement de solutions IA avancées au sein du pôle DATA/IA.",
      achievements: [
        "Mise en place d'un modèle NLP moderne pour la classification textuelle",
        "Réduction de 85% du temps opérationnel grâce à l'automatisation IA"
      ],
      technologies: ["Python", "Hugging Face", "NLP", "CML", "DSS"],
      logo: "/laposte.png",
      website: "https://www.lapostegroupe.com/"
    },
    {
      type: 'work',
      company: "Actinvision",
      role: "DATA Consultant",
      period: "Sep 2024 - Sep 2025",
      location: "Strasbourg, France",
      description: "Consulting Data auprès de clients variés dans plusieurs secteurs.",
      achievements: [
        "Déploiement de 15+ modèles ML en production",
        "Optimisation des pipelines ETL/ELT jusqu'à +40%",
        "Optimisation des requêtes SQL, indexation et tuning performance"
      ],
      technologies: ["Fabric", "PySpark", "SSIS", "SSMS", "Power BI", "Tableau", "Azure", "SQL"],
      logo: "public/actinvision Logo.png",
      website: "https://www.actinvision.com"
    },
    {
      type: 'work',
      company: "Azura Groupe",
      role: "DATA Developer",
      period: "Jun 2024 - Sep 2024",
      location: "Perpignan, France",
      description: "Développement complet des solutions DATA au sein de l'équipe Data du groupe.",
      achievements: [
        "Développement du premier moteur de recommandation interne",
        "Gestion complète du cycle de vie des données",
        "Travail en Agile avec PMO & Scrum Masters"
      ],
      technologies: ["SSIS", "SSMS", "Azure", "SQL"],
      logo: "public/azuraLogo.png",
      website: "https://azura-group.com"
    }
  ];

  const education: Education[] = [
    {
      type: 'education',
      school: "ESGI",
      degree: "Master IA & Big Data",
      period: "2025 - 2027",
      location: "Paris, France",
      description: "Spécialisation en Deep Learning, ML avancé et systèmes distribués.",
      achievements: [
        "Mention Très Bien",
        "Projet de fin d'étude en prédiction financière"
      ],
      logo: "public/logoESGI.png",
      website: "https://www.esgi.fr"
    },
    {
      type: 'education',
      school: "ESGI",
      degree: "Bachelor IA & Big Data",
      period: "2024 - 2025",
      location: "Paris, France",
      description: "Formation spécialisée en statistiques, Data Engineering et IA.",
      achievements: [
        "Mention Très Bien",
        "Major en Mathématiques"
      ],
      logo: "/logoESGI.png",
      website: "https://www.esgi.fr"
    },
    {
      type: 'education',
      school: "Université Montpellier",
      degree: "Licence Mathématiques & Informatique",
      period: "2021 - 2023",
      location: "Montpellier, France",
      description: "Mathématiques appliquées, programmation, statistiques.",
      achievements: [
        "Statistiques avancées",
        "Programmation Python et C",
        "Logique mathématique"
      ],
      logo: "/umlogoo.png",
      website: "https://sciences.edu.umontpellier.fr/"
    }
  ];

  return (
    <section
      id="experience"
      className={`py-24 relative overflow-hidden theme-transition ${
        isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
      }`}
    >
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION: EXPÉRIENCES PROFESSIONNELLES */}
        <div className="mb-24">
          <div className="mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-3 theme-transition ${
                isDarkMode ? 'theme-text-primary' : 'text-foreground'
              }`}
            >
              Expériences professionnelles
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 theme-transition ${
                  isDarkMode 
                    ? 'bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  
                  {/* HEADER WITH LOGO */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className={`w-16 h-16 object-contain rounded-lg ${
                          isDarkMode ? 'bg-zinc-800/50' : 'bg-gray-50'
                        } p-2`}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl font-semibold mb-1 theme-transition ${
                          isDarkMode ? 'theme-text-primary' : 'text-foreground'
                        }`}
                      >
                        {exp.role}
                      </h3>
                      
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-1 transition-all"
                      >
                        {exp.company}
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* META INFO */}
                  <div
                    className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-5 theme-transition ${
                      isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className={`mb-5 leading-relaxed theme-transition ${
                      isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                    }`}
                  >
                    {exp.description}
                  </p>

                  {/* ACHIEVEMENTS */}
                  <div className="mb-5">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm flex items-start gap-2 theme-transition ${
                            isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                          }`}
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className={`text-xs font-medium theme-transition ${
                          isDarkMode 
                            ? 'bg-zinc-800 text-zinc-300 border-zinc-700' 
                            : 'bg-gray-100 text-gray-700 border-gray-200'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* SECTION: FORMATION */}
        <div>
          <div className="mb-12">
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-3 theme-transition ${
                isDarkMode ? 'theme-text-primary' : 'text-foreground'
              }`}
            >
              Formation
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 theme-transition ${
                  isDarkMode 
                    ? 'bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  
                  {/* HEADER WITH LOGO */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className={`w-16 h-16 object-contain rounded-lg ${
                          isDarkMode ? 'bg-zinc-800/50' : 'bg-gray-50'
                        } p-2`}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-xl font-semibold mb-1 theme-transition ${
                          isDarkMode ? 'theme-text-primary' : 'text-foreground'
                        }`}
                      >
                        {edu.degree}
                      </h3>
                      
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline inline-flex items-center gap-1 transition-all"
                      >
                        {edu.school}
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                  </div>

                  {/* META INFO */}
                  <div
                    className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-sm mb-5 theme-transition ${
                      isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="flex-shrink-0" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className={`mb-5 leading-relaxed theme-transition ${
                      isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                    }`}
                  >
                    {edu.description}
                  </p>

                  {/* ACHIEVEMENTS */}
                  <div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm flex items-start gap-2 theme-transition ${
                            isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                          }`}
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;