import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const highlights = [
    {
      icon: Target,
      title: "Compétence Technique",
      description: "Formation en IA & Big Data, projets concrets en Machine Learning"
    },
    {
      icon: Award,
      title: "Projets Impactants",
      description: "Solutions IA déployées en production avec ROI mesurable"
    },
    {
      icon: Users,
      title: "Esprit d'Équipe",
      description: "Collaboration avec des équipes pluridisciplinaires et agiles"
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
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6 animate-fade-in">
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              Passionné par l'intelligence artificielle et les données, je transforme des problèmes 
              complexes en solutions innovantes. Avec plus de 5 ans d'expérience en Data Science, 
              j'ai développé une expertise approfondie en Machine Learning, Deep Learning et NLP.
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              Mon approche combine rigueur scientifique et pragmatisme business pour livrer des 
              modèles performants et déployables en production. J'ai eu l'opportunité de travailler 
              sur des projets variés, de la recommandation personnalisée à la vision par ordinateur.
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              Toujours en quête d'apprentissage, je reste à l'affût des dernières innovations 
              technologiques pour apporter une valeur ajoutée constante aux projets sur lesquels 
              je travaille.
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