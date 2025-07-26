import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 animate-scale-in">
            <img
              src={profilePhoto}
              alt="Photo de profil"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-card-hover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Name & Title */}
          <div className="mb-8 animate-slide-in-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Mohamed Ait Sidi Hou
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light mb-2">
              Data Scientist
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Transforming data into actionable insights through Machine Learning and Deep Learning
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-card-hover transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger mon CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={scrollToAbout}
            >
              En savoir plus
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;