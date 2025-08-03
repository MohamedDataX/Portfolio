import { Download, ArrowDown, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const HeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section id="accueil" className={`min-h-screen relative overflow-hidden font-mono transition-all duration-1000 pt-16 ${
      isDarkMode 
        ? 'bg-black text-white' 
        : 'bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900'
    }`}>
      {/* Stars/Particles background */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-30'}`}>
        <div className={`stars-layer-1 ${isDarkMode ? '' : 'invert'}`}></div>
        <div className={`stars-layer-2 ${isDarkMode ? '' : 'invert'}`}></div>
        <div className={`stars-layer-3 ${isDarkMode ? '' : 'invert'}`}></div>
        <div className={`stars-layer-4 ${isDarkMode ? '' : 'invert'}`}></div>
      </div>
      
      {/* Subtle cosmic nebula */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}>
        <div className="cosmic-nebula"></div>
      </div>

      {/* Floating particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-20'}`}>
        <div className={`floating-particles ${isDarkMode ? '' : 'invert'}`}></div>
      </div>

      {/* Theme toggle buttons */}
      <div className="absolute top-20 right-6 sm:right-8 z-20">
        <div className={`flex items-center gap-2 p-2 rounded-full backdrop-blur-sm transition-all duration-500 ${
          isDarkMode 
            ? 'bg-zinc-900/50 border border-zinc-700' 
            : 'bg-white/50 border border-gray-300'
        }`}>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200 bg-gray-100'
            } ${!isDarkMode ? 'scale-110 shadow-md' : ''}`}
            aria-label="Light mode"
          >
            <Sun className="w-4 h-4" />
          </button>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'text-white bg-zinc-800 scale-110 shadow-md'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Dark mode"
          >
            <Moon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left column - Main content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Header section */}
              <div className="space-y-6">
                {/* Photo de profil */}
                <div className={`w-20 h-20 rounded-full transition-all duration-500 opacity-80 hover:opacity-100 border ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-zinc-700 to-zinc-900 border-zinc-600' 
                    : 'bg-gradient-to-br from-gray-300 to-gray-500 border-gray-400'
                }`}></div>
                
                {/* Nom et titre */}
                <div className="space-y-2">
                  <h1 className={`text-3xl sm:text-4xl font-light leading-tight transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Mohamed Ait Sidi Hou
                  </h1>
                  <h2 className={`text-xl sm:text-2xl font-light transition-colors duration-500 ${
                    isDarkMode ? 'text-zinc-300' : 'text-gray-700'
                  }`}>
                    Data Scientist
                  </h2>
                  <p className={`text-sm font-light tracking-wider transition-colors duration-500 ${
                    isDarkMode ? 'text-zinc-400' : 'text-gray-600'
                  }`}>
                    Based in Paris, France.
                  </p>
                </div>
              </div>

              {/* Mission statement */}
              <div className="max-w-2xl">
                <div className={`text-base sm:text-lg leading-relaxed font-light space-y-4 transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-300' : 'text-gray-700'
                }`}>
                  <p>
                    I believe <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>data science</span><br />
                    can be more <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>innovative and impactful</span>.
                  </p>
                  
                  <p>
                    Exploring the potential of <span className={`font-medium transition-colors duration-500 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>artificial intelligence</span>.<br />
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
                  <button className={`group flex items-center font-light tracking-wide transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-zinc-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    <Download className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span>Curriculum vitae</span>
                  </button>
                  
                  <button 
                    onClick={scrollToAbout}
                    className={`group flex items-center font-light tracking-wide transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-zinc-400 group-hover:bg-white' 
                        : 'bg-gray-600 group-hover:bg-gray-900'
                    }`}></div>
                    <span>About & projects</span>
                  </button>
                  
                  <button 
                    onClick={scrollToContact}
                    className={`group flex items-center font-light tracking-wide transition-colors duration-300 ${
                      isDarkMode 
                        ? 'text-zinc-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 transition-colors duration-300 ${
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
                <p className={`text-sm font-light transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-500' : 'text-gray-600'
                }`}>
                  Data Scientist
                </p>
                <p className={`text-xs font-light transition-colors duration-500 ${
                  isDarkMode ? 'text-zinc-600' : 'text-gray-500'
                }`}>
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
            className={`group transition-all duration-300 ${
              isDarkMode 
                ? 'text-zinc-600 hover:text-zinc-400' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;600&display=swap');
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Stars layers for depth */
        .stars-layer-1 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 20px 30px, #ffffff, transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 130px 80px, #ffffff, transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(255,255,255,0.9), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          animation: starsMove1 10s linear infinite;
        }

        .stars-layer-2 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 10px 20px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 60px 60px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 100px 10px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 150px 50px, rgba(255,255,255,0.2), transparent);
          background-repeat: repeat;
          background-size: 220px 120px;
          animation: starsMove2 40s linear infinite;
        }

        .stars-layer-3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(0.5px 0.5px at 25px 45px, rgba(255,255,255,0.2), transparent),
            radial-gradient(0.5px 0.5px at 75px 25px, rgba(255,255,255,0.3), transparent),
            radial-gradient(0.5px 0.5px at 125px 65px, rgba(255,255,255,0.1), transparent);
          background-repeat: repeat;
          background-size: 180px 90px;
          animation: starsMove3 60s linear infinite;
        }

        .stars-layer-4 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1px 1px at 30px 30px, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 60px 100px, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 120px 50px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 170px 90px, rgba(255,255,255,0.5), transparent);
          background-repeat: repeat;
          background-size: 150px 100px;
          animation: starsMove4 20s linear infinite;
        }

        @keyframes starsMove1 {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(10px); }
          50% { transform: translateY(-60px) translateX(-5px); }
          75% { transform: translateY(-90px) translateX(8px); }
          100% { transform: translateY(-100px) translateX(0); }
        }

        @keyframes starsMove2 {
          0% { transform: translateY(0) translateX(0); }
          30% { transform: translateY(-40px) translateX(-8px); }
          60% { transform: translateY(-80px) translateX(12px); }
          100% { transform: translateY(-120px) translateX(0); }
        }

        @keyframes starsMove3 {
          0% { transform: translateY(0) translateX(0); }
          20% { transform: translateY(-20px) translateX(6px); }
          40% { transform: translateY(-40px) translateX(-4px); }
          80% { transform: translateY(-70px) translateX(10px); }
          100% { transform: translateY(-90px) translateX(0); }
        }

        @keyframes starsMove4 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-80px) translateX(20px); }
          100% { transform: translateY(-150px) translateX(-10px); }
        }

        /* Subtle cosmic nebula */
        .cosmic-nebula {
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at 20% 30%, 
            rgba(147, 51, 234, 0.1) 0%, 
            transparent 50%),
            radial-gradient(ellipse at 80% 70%, 
            rgba(59, 130, 246, 0.08) 0%, 
            transparent 50%),
            radial-gradient(ellipse at 60% 20%, 
            rgba(139, 92, 246, 0.05) 0%, 
            transparent 50%);
          animation: nebulaFloat 30s ease-in-out infinite;
        }

        @keyframes nebulaFloat {
          0%, 100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 0.1; 
          }
          50% { 
            transform: scale(1.1) rotate(1deg); 
            opacity: 0.15; 
          }
        }

        /* Floating particles */
        .floating-particles {
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0px, transparent 1px),
            radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08) 0px, transparent 1px),
            radial-gradient(circle at 90% 10%, rgba(255,255,255,0.03) 0px, transparent 1px),
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0px, transparent 1px);
          background-size: 300px 300px, 400px 400px, 350px 350px, 450px 450px, 320px 320px;
          animation: particlesFloat 60s linear infinite;
        }

        @keyframes particlesFloat {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-3px); }
          75% { transform: translateY(-15px) translateX(2px); }
          100% { transform: translateY(0) translateX(0); }
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 2px;
        }

        ::-webkit-scrollbar-track {
          background: var(--scrollbar-track);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--scrollbar-thumb);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: var(--scrollbar-thumb-hover);
        }

        /* CSS Variables for theme colors */
        :root {
          --scrollbar-track: #000000;
          --scrollbar-thumb: #27272a;
          --scrollbar-thumb-hover: #3f3f46;
        }

        .light-theme {
          --scrollbar-track: #f9fafb;
          --scrollbar-thumb: #d1d5db;
          --scrollbar-thumb-hover: #9ca3af;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100vh;
            min-height: 100dvh;
          }
          
          /* Mobile navigation spacing */
          section {
            padding-top: 4rem !important;
          }
          
          .min-h-\[calc\(100vh-4rem\)\] {
            min-height: calc(100vh - 4rem) !important;
            min-height: calc(100dvh - 4rem) !important;
          }
          
          /* Theme buttons positioning for mobile */
          .absolute.top-20 {
            top: 4.5rem !important;
          }
        }

        /* Tablet and desktop navigation spacing */
        @media (min-width: 641px) {
          section {
            padding-top: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;