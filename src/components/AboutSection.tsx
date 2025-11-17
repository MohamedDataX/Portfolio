import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const highlights = [
    {
      icon: Target,
      title: "Technical Skills",
      description: "Background in AI & Big Data, hands-on ML projects"
    },
    {
      icon: Award,
      title: "Impactful Projects",
      description: "AI / Data solutions deployed in Prod with measurable results"
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Collaborating with cross-functional and agile teams"
    }
  ];

  return (
    <section id="about" className={`py-20 relative overflow-hidden theme-transition ${
      isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
    }`}>
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-mono font-light tracking-wider leading-relaxed">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl mb-4 theme-transition ${
            isDarkMode ? 'theme-text-primary' : 'text-foreground'
          }`}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6 animate-fade-in">
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              𝘗𝘢𝘴𝘴𝘪𝘰𝘯𝘢𝘵𝘦 𝘢𝘣𝘰𝘶𝘵 𝘶𝘯𝘭𝘰𝘤𝘬𝘪𝘯𝘨 𝘵𝘩𝘦 𝘷𝘢𝘭𝘶𝘦 𝘰𝘧 𝘥𝘢𝘵𝘢, 𝘐 𝘩𝘢𝘷𝘦 𝘣𝘦𝘦𝘯 𝘣𝘶𝘪𝘭𝘥𝘪𝘯𝘨 𝘮𝘺 𝘤𝘢𝘳𝘦𝘦𝘳 𝘢𝘳𝘰𝘶𝘯𝘥 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘤𝘰𝘮𝘣𝘪𝘯𝘪𝘯𝘨 𝘵𝘦𝘤𝘩𝘯𝘪𝘤𝘢𝘭 𝘦𝘹𝘱𝘦𝘳𝘵𝘪𝘴𝘦 𝘢𝘯𝘥 𝘢𝘥𝘷𝘢𝘯𝘤𝘦𝘥 𝘢𝘯𝘢𝘭𝘺𝘴𝘪𝘴
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              𝘈𝘧𝘵𝘦𝘳 𝘢 𝘋𝘢𝘵𝘢 𝘋𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘪𝘯𝘵𝘦𝘳𝘯𝘴𝘩𝘪𝘱 𝘢𝘯𝘥 𝘮𝘺 𝘧𝘪𝘳𝘴𝘵 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘢𝘴 𝘢 𝘋𝘢𝘵𝘢 𝘊𝘰𝘯𝘴𝘶𝘭𝘵𝘢𝘯𝘵, 𝘐 𝘫𝘰𝘪𝘯𝘦𝘥 𝙂𝙧𝙤𝙪𝙥𝙚 𝙇𝙖 𝙋𝙤𝙨𝙩𝙚 𝘰𝘯 𝘢 𝘵𝘸𝘰-𝘺𝘦𝘢𝘳 𝘢𝘱𝘱𝘳𝘦𝘯𝘵𝘪𝘤𝘦𝘴𝘩𝘪𝘱 𝘢𝘴 𝘢 𝘿𝙖𝙩𝙖 𝙎𝙘𝙞𝙚𝙣𝙩𝙞𝙨𝙩, 𝘤𝘰𝘯𝘵𝘳𝘪𝘣𝘶𝘵𝘪𝘯𝘨 𝘵𝘰 𝘱𝘳𝘰𝘫𝘦𝘤𝘵𝘴 𝘢𝘴 𝘱𝘢𝘳𝘵 𝘰𝘧 𝘮𝘺 𝘔𝘢𝘴𝘵𝘦𝘳’𝘴 𝘪𝘯 𝘈𝘐 & 𝘉𝘪𝘨 𝘋𝘢𝘵𝘢
            </p>
            <p className={`text-lg theme-transition ${
              isDarkMode ? 'theme-text-secondary' : 'text-muted-foreground'
            }`}>
              𝘔𝘺 𝘱𝘳𝘰𝘧𝘪𝘭𝘦 𝘤𝘰𝘮𝘣𝘪𝘯𝘦𝘴 𝘴𝘵𝘳𝘰𝘯𝘨 𝘵𝘦𝘤𝘩𝘯𝘪𝘤𝘢𝘭 𝘴𝘬𝘪𝘭𝘭𝘴 𝘸𝘪𝘵𝘩 𝘢 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘢𝘭 𝘶𝘯𝘥𝘦𝘳𝘴𝘵𝘢𝘯𝘥𝘪𝘯𝘨, 𝘦𝘯𝘢𝘣𝘭𝘪𝘯𝘨 𝘮𝘦 𝘵𝘰 𝘵𝘶𝘳𝘯 𝘥𝘢𝘵𝘢 𝘪𝘯𝘵𝘰 𝘢𝘤𝘵𝘪𝘰𝘯𝘢𝘣𝘭𝘦, 𝘩𝘪𝘨𝘩-𝘷𝘢𝘭𝘶𝘦 𝘴𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘴, 𝘸𝘩𝘪𝘭𝘦 𝘴𝘵𝘢𝘺𝘪𝘯𝘨 𝘤𝘶𝘳𝘪𝘰𝘶𝘴 𝘢𝘯𝘥 𝘶𝘱 𝘵𝘰 𝘥𝘢𝘵𝘦 𝘸𝘪𝘵𝘩 𝘵𝘩𝘦 𝘭𝘢𝘵𝘦𝘴𝘵 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘪𝘰𝘯𝘴 𝘪𝘯 𝘵𝘩𝘦 𝘧𝘪𝘦𝘭𝘥
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
