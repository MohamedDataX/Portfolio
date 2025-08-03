import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';

const SkillsSection = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      icon: Code,
      title: "Langages & Outils",
      color: "bg-blue-500/10 text-blue-600",
      skills: ["Python", "SQL", "R", "Java", "Git", "Docker", "AWS", "GCP"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      color: "bg-green-500/10 text-green-600",
      skills: ["Pandas", "NumPy", "PySpark", "Airflow", "Kafka", "MongoDB", "PostgreSQL", "Elasticsearch"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost", "LightGBM", "MLflow", "Kubeflow"]
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Tableau", "Power BI", "D3.js", "Grafana"]
    }
  ];

  const specializations = [
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Time Series Analysis",
    "Recommender Systems",
    "MLOps & Model Deployment",
    "Statistical Modeling",
    "Deep Learning Architecture",
    "A/B Testing & Experimentation"
  ];

  return (
    <section id="competences" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'bg-muted/30'
    }`}>
      {/* Background cosmique pour le mode sombre */}
      {isDarkMode && (
        <CosmicBackground 
          className="opacity-15" 
          opacity={{ dark: 'opacity-20', light: 'opacity-10' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            Compétences Techniques
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in theme-transition ${
                isDarkMode 
                  ? 'bg-zinc-900/60 border-zinc-700 backdrop-blur-sm' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-lg ${category.color} mb-3`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className={`font-semibold theme-transition ${
                    isDarkMode ? 'theme-text-primary' : 'text-foreground'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`text-xs theme-transition ${
                        isDarkMode 
                          ? 'bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700' 
                          : ''
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="animate-slide-in-right">
          <h3 className={`text-2xl font-semibold text-center mb-8 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            Domaines de spécialisation
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <Badge 
                key={index}
                variant="outline"
                className={`px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default theme-transition ${
                  isDarkMode 
                    ? 'border-zinc-600 text-zinc-300 hover:border-primary' 
                    : ''
                }`}
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;