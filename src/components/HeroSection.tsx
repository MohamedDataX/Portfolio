import { Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import translations from "@/lib/i18n"; 

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToAbout = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className={`min-h-screen relative overflow-hidden font-mono theme-transition pt-16 ${
      isDarkMode 
        ? 'theme-bg-dark' 
        : 'theme-bg-light'
    }`}>
      
      <CosmicBackground />

      
     

      {/* Main content container */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left column - Main content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Header section */}
              <div className="space-y-6">
                {/* Photo de profil */}
                <div className={`w-20 h-20 rounded-full theme-transition opacity-80 hover:opacity-100 border ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-zinc-700 to-zinc-900 border-zinc-600' 
                    : 'bg-gradient-to-br from-gray-300 to-gray-500 border-gray-400'
                }`}></div>
                
                {/* Nom et titre */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl font-light leading-tight theme-text-primary">
                    Mohamed Ait Sidi Hou
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-light theme-text-secondary">
                    Data Scientist
                  </h2>
                  <p className="text-sm font-light tracking-wider theme-text-muted">
                    Based in Paris, France.
                  </p>
                </div>
              </div>

              {/* Mission statement */}
              <div className="max-w-2xl">
                <div className="text-base sm:text-lg leading-relaxed font-light space-y-4 theme-text-secondary">
                  <p>
                    I believe <span className="font-medium theme-text-primary">data science</span><br />
                    can be more <span className="font-medium theme-text-primary">innovative and impactful</span>.
                  </p>
                  
                  <p>
                    Exploring the potential of <span className="font-medium theme-text-primary">artificial intelligence</span>.<br />
                    Believing it can unlock new opportunities and solutions,<br />
                    with a mission to reveal its possibilities.
                  </p>
                  
                  <p>
                    I pursue insights through hands-on research,<br />
                    experiments, and real-world applications.
                  </p>
                </div>
              </div>

              {/* Navigation actions */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <button className={`group flex items-center font-light tracking-wide theme-transition ${
                    isDarkMode 
                      ? 'text-zinc-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    <Download className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>Curriculum vitae</span>
                  </button>
                  
                  <button 
                    onClick={scrollToAbout}
                    className={`group flex items-center font-light tracking-wide theme-transition ${
                      isDarkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 theme-transition ${
                      isDarkMode 
                        ? 'bg-zinc-400 group-hover:bg-white' 
                        : 'bg-gray-600 group-hover:bg-gray-900'
                    }`}></div>
                    <span>About & projects</span>
                  </button>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`group flex items-center font-light tracking-wide theme-transition ${
                      isDarkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 theme-transition ${
                      isDarkMode 
                        ? 'bg-zinc-400 group-hover:bg-white' 
                        : 'bg-gray-600 group-hover:bg-gray-900'
                    }`}></div>
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right column - Metadata */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[400px]">
              {/* Bottom info */}
              <div className="text-right space-y-2 mt-auto">
                <p className="text-sm font-light theme-text-secondary">
                  Data Scientist
                </p>
                <p className="text-xs font-light theme-text-muted">
                  Paris, France <br />
                  @2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 sm:left-8 z-10">
          <button 
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            title="Scroll to About section"
            className={`group theme-transition ${
              isDarkMode 
                ? 'text-zinc-600 hover:text-zinc-400' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;