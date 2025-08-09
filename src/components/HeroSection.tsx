import { Download, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import CosmicBackground from '@/components/theme/CosmicBackground';
import { useLanguage } from '../context/LanguageContext';
import translations from "@/lib/i18n";
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScrollIndicator(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className={`min-h-screen relative overflow-hidden font-mono theme-transition pt-16 ${
        isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
      }`}
    >
      <CosmicBackground />

      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                {/* Profil avec ombre et effet glow */}
                <div
                  className={`w-24 h-24 rounded-full border-2 shadow-lg theme-transition transition-transform duration-500 hover:scale-105 ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-zinc-700 to-zinc-900 border-zinc-500 shadow-zinc-800'
                      : 'bg-gradient-to-br from-gray-200 to-gray-400 border-gray-300 shadow-gray-400'
                  }`}
                />

                {/* Nom & titre */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl font-light leading-tight theme-text-primary">
                    Mohamed Ait Sidi Hou
                  </h1>
                  <h2 className="text-2xl sm:text-3xl font-light theme-text-secondary">
                    {t.dataScientist}
                  </h2>
                  <p className="text-sm font-light tracking-widest theme-text-muted">
                    {t.basedInParis}
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="max-w-2xl">
                <div className="text-lg sm:text-xl leading-relaxed font-light space-y-4 theme-text-secondary">
                  <p dangerouslySetInnerHTML={{ __html: t.missionPart1 }} />
                  <p dangerouslySetInnerHTML={{ __html: t.missionPart2 }} />
                  <p dangerouslySetInnerHTML={{ __html: t.missionPart3 }} />
                </div>
              </div>

              {/* Boutons */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <button
                    className={`group flex items-center font-light tracking-wide px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Download className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>{t.curriculumVitae}</span>
                  </button>

                  <button
                    onClick={scrollToAbout}
                    className={`group flex items-center font-light tracking-wide px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 theme-transition ${
                        isDarkMode
                          ? 'bg-zinc-400 group-hover:bg-white'
                          : 'bg-gray-600 group-hover:bg-gray-900'
                      }`}
                    />
                    <span>{t.aboutProjects}</span>
                  </button>

                  <button
                    onClick={scrollToContact}
                    className={`group flex items-center font-light tracking-wide px-4 py-2 rounded-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 theme-transition ${
                        isDarkMode
                          ? 'bg-zinc-400 group-hover:bg-white'
                          : 'bg-gray-600 group-hover:bg-gray-900'
                      }`}
                    />
                    <span>{t.contact}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[400px]">
              <div className="text-right space-y-2 mt-auto">
                <p className="text-sm font-light theme-text-secondary">
                  {t.dataScientist}
                </p>
                <p className="text-xs font-light theme-text-muted">
                  Paris, France <br />
                  © 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator amélioré */}
        {showScrollIndicator && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={scrollToAbout}
              aria-label={t.apropos}
              title={t.apropos}
              className={`group p-4 rounded-full shadow-lg border transition-all duration-500 animate-bounce ${
                isDarkMode
                  ? 'bg-gradient-to-br from-zinc-700 to-zinc-900 text-zinc-300 hover:from-zinc-600 hover:to-zinc-800 border-zinc-600'
                  : 'bg-gradient-to-br from-white to-gray-200 text-gray-600 hover:from-gray-100 hover:to-gray-300 border-gray-300'
              }`}
            >
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
