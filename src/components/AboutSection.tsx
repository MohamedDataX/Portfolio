import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLanguage } from '../context/LanguageContext';
import translations from '@/lib/i18n';
import CosmicBackground from '@/components/theme/CosmicBackground';

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const highlights = [
    {
      icon: Target,
      title: t.highlight1Title,
      description: t.highlight1Desc
    },
    {
      icon: Award,
      title: t.highlight2Title,
      description: t.highlight2Desc
    },
    {
      icon: Users,
      title: t.highlight3Title,
      description: t.highlight3Desc
    }
  ];

  return (
    <section id="apropos" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
    }`}>
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-mono font-light tracking-wider leading-relaxed">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl mb-4 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            {t.aboutTitle}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6 animate-fade-in">
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              {t.bioPart1}
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              {t.bioPart2}
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              {t.bioPart3}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className={`p-6 hover:shadow-card-hover transition-all duration-300 hover:scale-105 theme-transition ${
                  isDarkMode 
                    ? 'bg-zinc-900/50 border-zinc-700 backdrop-blur-sm' 
                    : 'border-border'
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className={`mb-2 theme-transition ${
                        isDarkMode ? 'theme-text-primary' : 'text-foreground'
                      }`}>
                        {highlight.title}
                      </h3>
                      <p className={`theme-transition ${
                        isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
                      }`}>
                        {highlight.description}
                      </p>
                    </div>
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

export default AboutSection;
