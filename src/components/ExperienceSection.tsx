import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building, GraduationCap } from 'lucide-react';
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
}

interface Education {
  type: 'education';
  school: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

type ExperienceItem = WorkExperience | Education;

const ExperienceSection = () => {
  const { isDarkMode } = useTheme();

  const experiences: WorkExperience[] = [
    {
      type: 'work',
      company: "La Poste Groupe",
      role: "DATA Scientist",
      period: "Sep 2025 - Présent",
      location: "Paris, France",
      description: "Sous Agile, developement de slution IA avancé au sein de la DSI pole DATA/ IA.",
      achievements: [
        "Mise en place d'un modele NLP moderne pour un probleme de classification textuelle",
        "Réduction de 85% de temps pour les taches opérationneles via automation IA"
        
      ],
      technologies: ["Python", "Hugging Face", "NLP", "CML", "DSS"]
    },
    {
      type: 'work',
      company: "Actinvision",
      role: "DATA Consultant",
      period: "Sep 2024 - Sep 2025",
      location: "Strasbourg, France",
      description: "Travail avec plusieur client de different domaine,",
      achievements: [
        "Déploiement de 15+ modèles ML en production",
        "Optimisation de pipelines ETL/ELT pour des gains de performance jusqu'à 40%",
        "Optimisation des requêtes SQL, développement de procédures stockées et indexation des tables et gestion des clusters pour maximiser les performances des bases de données"
      ],
      technologies: ["Microsoft Fabric", "PySpark", "SSIS", "SSMS", "Power BI", "Tableau", "Azure", "SQL", "T-SQL"]
    },
    {
      type: 'work',
      company: "Azura Groupe",
      role: "DATA Developer",
      period: "Jun 2024 - Sep 2024",
      location: "Perpignan, France",
      description: "Premier poste autour de la  Data dans un grand groupe au sein de la seule équipe DATA. Développement de bout en bout des solutions DATA.",
      achievements: [
        "Développement du premier moteur de recommandation",
        "Gestion complète du cycle de vie des données",
        "Collaboration avec les PMO & Scrum Masters pour assurer la livraison des projets en mode Agile."
      ],
      technologies: ["SSIS", "SSMS", "Azure", "SQL"]
    }
  ];





  /* Education */

  const education: Education[] = [
    {
      type: 'education',
      school: "École Centrale Paris",
      degree: "Master Intelligence Artificielle et Big Data",
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
      type: 'education',
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
  ];

  // Trie toutes les expériences et formations par année de fin décroissante
  const allItems: ExperienceItem[] = [...experiences, ...education].sort((a, b) => {
    const getYear = (period: string) =>
      parseInt(period.split(' - ')[1] === 'Présent' ? '2024' : period.split(' - ')[1]);

    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section
      id="experience"
      className={`py-20 relative overflow-hidden theme-transition ${
        isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
      }`}
    >
        <CosmicBackground/>
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Titre de la section */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition ${
              isDarkMode ? 'theme-text-primary' : 'text-foreground'
            }`}
          >
            Expérience & Formation
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-0.5 theme-transition ${
              isDarkMode ? 'bg-zinc-700' : 'bg-border'
            }`}
          ></div>

          <div className="space-y-8">
            {allItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Point de la timeline */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.type === 'work' ? 'bg-primary border-primary' : 'bg-accent border-accent-foreground'
                    }`}
                  ></div>
                </div>

                {/* Carte de contenu pour chaque expérience ou formation */}
                <Card
                  className={`flex-1 hover:shadow-card-hover transition-all duration-300 theme-transition ${
                    isDarkMode ? 'bg-zinc-900/60 border-zinc-700 backdrop-blur-sm' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-lg ${
                            item.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent text-accent-foreground'
                          }`}
                        >
                          {item.type === 'work' ? <Building size={20} /> : <GraduationCap size={20} />}
                        </div>
                        <div>
                          <h3
                            className={`text-xl font-semibold theme-transition ${
                              isDarkMode ? 'theme-text-primary' : 'text-foreground'
                            }`}
                          >
                            {item.type === 'work' ? item.role : item.degree}
                          </h3>
                          <p className="text-primary font-medium">
                            {item.type === 'work' ? item.company : item.school}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex items-center space-x-4 text-sm mb-4 theme-transition ${
                        isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p
                      className={`mb-4 leading-relaxed theme-transition ${
                        isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <h4
                        className={`font-medium mb-2 theme-transition ${
                          isDarkMode ? 'theme-text-primary' : 'text-foreground'
                        }`}
                      >
                        {item.type === 'work' ? 'Réalisations clés :' : 'Distinctions :'}
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className={`text-sm flex items-start theme-transition ${
                              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                            }`}
                          >
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.type === 'work' && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="theme-transition">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
