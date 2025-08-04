import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, BarChart3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '@/lib/i18n';
import CosmicBackground from '@/components/theme/CosmicBackground';

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const skillCategories = [
    {
      icon: Code,
      title: t.category1Title,
      color: "bg-blue-500/10 text-blue-600",
      skills: ["Python", "SQL", "R", "Java", "Git", "Docker", "AWS", "GCP"]
    },
    {
      icon: Database,
      title: t.category2Title,
      color: "bg-green-500/10 text-green-600",
      skills: ["Pandas", "NumPy", "PySpark", "Airflow", "Kafka", "MongoDB", "PostgreSQL", "Elasticsearch"]
    },
    {
      icon: Brain,
      title: t.category3Title,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Keras", "XGBoost", "LightGBM", "MLflow", "Kubeflow"]
    },
    {
      icon: BarChart3,
      title: t.category4Title,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Tableau", "Power BI", "D3.js", "Grafana"]
    }
  ];

  return (
    <section id="competences" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
    }`}>
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-mono font-light tracking-wider leading-relaxed">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl mb-4 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            {t.skillsTitle}
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
                  <h3 className={`theme-transition ${
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
          <h3 className={`text-2xl text-center mb-8 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            {t.specializationTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.specializations.map((spec, index) => (
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
