import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';

const AboutSection = () => {
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
    <section id="apropos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par l'intelligence artificielle et les données, je transforme des problèmes 
              complexes en solutions innovantes. Avec plus de 5 ans d'expérience en Data Science, 
              j'ai développé une expertise approfondie en Machine Learning, Deep Learning et NLP.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon approche combine rigueur scientifique et pragmatisme business pour livrer des 
              modèles performants et déployables en production. J'ai eu l'opportunité de travailler 
              sur des projets variés, de la recommandation personnalisée à la vision par ordinateur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
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
                className="p-6 border-border hover:shadow-card-hover transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
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