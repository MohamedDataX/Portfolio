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
      type: 'work',
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
      type: 'work',
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
  ];

  const education: Education[] = [
    {
      type: 'education',
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
        isDarkMode ? 'theme-bg-dark' : 'bg-muted/30'
      }`}
    >
      {/* Background cosmique visible uniquement en mode sombre */}
      {isDarkMode && (
        <CosmicBackground className="opacity-10" opacity={{ dark: 'opacity-15', light: 'opacity-8' }} />
      )}

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
