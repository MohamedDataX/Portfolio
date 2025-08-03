import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, TrendingUp, MessageSquare, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      icon: Brain,
      title: "Système de Recommandation E-commerce",
      description: "Développement d'un moteur de recommandation hybride utilisant du collaborative filtering et du content-based filtering. Amélioration de 35% du taux de conversion et de 28% du panier moyen.",
      technologies: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/username/recommendation-system",
      demoUrl: "https://demo-recommendation.com",
      category: "Machine Learning"
    },
    {
      icon: TrendingUp,
      title: "Prédiction de Séries Temporelles",
      description: "Modèle de prédiction des ventes avec gestion de la saisonnalité et des événements externes. MAPE < 8% sur les prédictions à 30 jours, déployé en production pour optimiser les stocks.",
      technologies: ["Python", "Prophet", "LSTM", "Streamlit", "MLflow", "AWS"],
      githubUrl: "https://github.com/username/time-series-forecasting",
      demoUrl: "https://forecasting-demo.streamlit.app",
      category: "Time Series"
    },
    {
      icon: MessageSquare,
      title: "Analyseur de Sentiment Client",
      description: "Pipeline NLP pour analyser les avis clients en temps réel. Classification multi-classes avec 94% de précision, intégration API et dashboard de monitoring des tendances sentiment.",
      technologies: ["Python", "Transformers", "spaCy", "Flask", "Elasticsearch", "Kibana"],
      githubUrl: "https://github.com/username/sentiment-analyzer",
      demoUrl: null,
      category: "NLP"
    },
    {
      icon: Eye,
      title: "Détection d'Anomalies Visuelles",
      description: "Système de détection automatique de défauts qualité sur chaîne de production. Réduction de 60% des faux positifs par rapport au système précédent, déployé sur edge computing.",
      technologies: ["Python", "OpenCV", "YOLOv8", "TensorRT", "NVIDIA Jetson", "FastAPI"],
      githubUrl: "https://github.com/username/anomaly-detection",
      demoUrl: "https://anomaly-demo.com",
      category: "Computer Vision"
    }
  ];

  return (
    <section id="projets" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'bg-background'
    }`}>
      {/* Background cosmique pour le mode sombre */}
      {isDarkMode && (
        <CosmicBackground 
          className="opacity-15" 
          opacity={{ dark: 'opacity-15', light: 'opacity-8' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            Projets Réalisés
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto theme-transition ${
            isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
          }`}>
            Une sélection de projets qui illustrent mon expertise en Data Science et IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in theme-transition ${
                isDarkMode 
                  ? 'bg-zinc-900/60 border-zinc-700 backdrop-blur-sm' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className={`text-xl group-hover:text-primary transition-colors theme-transition ${
                        isDarkMode ? 'theme-text-primary' : ''
                      }`}>
                        {project.title}
                      </CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`mt-1 theme-transition ${
                          isDarkMode 
                            ? 'border-zinc-600 text-zinc-300' 
                            : ''
                        }`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className={`mb-4 leading-relaxed theme-transition ${
                  isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className={`text-xs theme-transition ${
                        isDarkMode 
                          ? 'bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700' 
                          : ''
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`flex-1 theme-transition ${
                      isDarkMode 
                        ? 'border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white' 
                        : ''
                    }`}
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demoUrl && (
                    <Button 
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Démo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;