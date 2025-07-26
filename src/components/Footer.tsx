import { Heart, MapPin, Sparkles, Code, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 overflow-hidden">
      {/* Effet de fond animé */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grille de points décorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section principale avec animation */}
          <div className="mb-6 transform hover:scale-105 transition-all duration-300">
            <p className="flex items-center justify-center space-x-3 text-lg font-medium">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                © {currentYear} Mohamed Ait Sidi Hou
              </span>
              <span className="text-slate-400 animate-pulse">•</span>
              <span className="flex items-center space-x-2 group">
                <span className="text-slate-200">Fait avec</span>
                <Heart className="h-5 w-5 text-red-400 fill-current animate-pulse group-hover:scale-125 transition-transform duration-300" />
                <span className="text-slate-200">et beaucoup de</span>
                <Sparkles className="h-4 w-4 text-yellow-400 animate-spin-slow" />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  données
                </span>
              </span>
            </p>
          </div>

          {/* Section spécialités avec icônes */}
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Brain className="h-4 w-4 text-blue-400" />
                <span className="text-slate-200">Data Scientist</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Code className="h-4 w-4 text-green-400" />
                <span className="text-slate-200">Spécialisé en IA</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-slate-200">Basé à Paris</span>
              </div>
            </div>
          </div>

          {/* Message inspirant */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-xs text-slate-400 italic max-w-md mx-auto leading-relaxed">
              "Transformer les données en insights, les insights en solutions, 
              et les solutions en impact réel sur le monde."
            </p>
          </div>

          {/* Ligne de séparation animée */}
          <div className="mt-6 flex justify-center">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;