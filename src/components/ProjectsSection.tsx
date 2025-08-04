import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Brain, TrendingUp, MessageSquare, Eye } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';
import translations from '@/lib/i18n';

const iconMap = [Brain, TrendingUp, MessageSquare, Eye];

const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const projects = t.projects.map((proj, index) => ({
    ...proj,
    icon: iconMap[index],
    technologies: [
      ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Docker"],
      ["Python", "Prophet", "LSTM", "Streamlit", "MLflow", "AWS"],
      ["Python", "Transformers", "spaCy", "Flask", "Elasticsearch", "Kibana"],
      ["Python", "OpenCV", "YOLOv8", "TensorRT", "NVIDIA Jetson", "FastAPI"]
    ][index],
    githubUrl: [
      "https://github.com/username/recommendation-system",
      "https://github.com/username/time-series-forecasting",
      "https://github.com/username/sentiment-analyzer",
      "https://github.com/username/anomaly-detection"
    ][index],
    demoUrl: [
      "https://demo-recommendation.com",
      "https://forecasting-demo.streamlit.app",
      null,
      "https://anomaly-demo.com"
    ][index]
  }));

  return (
    <section id="projets" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
    }`}>
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition font-japanese tracking-wide ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            {t.projectsTitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className={`text-lg mt-6 max-w-2xl mx-auto theme-transition font-japanese leading-relaxed tracking-wider ${
            isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
          }`}>
            {t.projectsSubtitle}
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
                      <CardTitle className={`text-xl group-hover:text-primary transition-colors theme-transition font-japanese tracking-wide ${
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
                <p className={`mb-4 leading-relaxed theme-transition font-japanese text-[15px] tracking-wider ${
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
                      {t.projectButtonCode}
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
                        {t.projectButtonDemo}
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
