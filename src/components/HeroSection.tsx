import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('apropos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen bg-black text-white relative overflow-hidden font-mono">
      {/* Stars background */}
      <div className="absolute inset-0">
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="stars-layer-3"></div>
        <div className="stars-layer-4"></div> {/* New fast layer */}
      </div>
      
      {/* Subtle cosmic nebula */}
      <div className="absolute inset-0 opacity-10">
        <div className="cosmic-nebula"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="floating-particles"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 pt-32">
        {/* Photo de profil minimaliste */}
        <div className="mb-16">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 opacity-80 hover:opacity-100 transition-opacity duration-500 border border-zinc-600"></div>
        </div>

        {/* Texte principal - style p5aholic */}
        <div className="space-y-8 max-w-2xl">
          <div className="text-sm text-zinc-400 font-light tracking-wider">
            Born in 1995<br />
            in Paris, France.
          </div>
          
          <div className="text-base leading-relaxed text-zinc-300 font-light">
            I believe<br />
            <span className="text-white">data science</span><br />
            can be more<br />
            <span className="text-white">innovative and impactful</span>.<br />
            <br />
            With a mission<br />
            to present<br />
            the possibilities<br />
            of <span className="text-white">artificial intelligence</span>,<br />
            I am pursuing<br />
            new insights<br />
            through experiments<br />
            and research.
          </div>

          {/* Nom */}
          <div className="text-2xl font-light text-white mt-16 mb-8">
            Mohamed Ait Sidi Hou
          </div>

          {/* Navigation/Actions minimalistes */}
          <div className="space-y-4 text-sm">
            <button 
              className="block text-zinc-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              <Download className="inline w-3 h-3 mr-2" />
              curriculum vitae
            </button>
            <button 
              onClick={scrollToAbout}
              className="block text-zinc-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              about & projects
            </button>
            <a 
              href="mailto:contact@mohamedaitsidihou.com"
              className="block text-zinc-400 hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              contact
            </a>
          </div>
        </div>

        {/* Scroll indicator discret */}
        <div className="absolute bottom-8 left-8">
          <button 
            onClick={scrollToAbout}
            className="text-zinc-600 hover:text-zinc-400 transition-colors duration-300"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright/Info en bas à droite */}
        <div className="absolute bottom-8 right-8 text-xs text-zinc-600 font-light">
          Data Scientist<br />
          Paris, 2025
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500&display=swap');
        
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
          background: #000000;
        }

        ::-webkit-scrollbar-thumb {
          background: #27272a;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;