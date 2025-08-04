import { MapPin, Brain } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 overflow-hidden">
      {/* Bulles d'arrière-plan animées */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      {/* Contenu du footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 transform hover:scale-105 transition-all duration-300">
          <p className="flex items-center justify-center space-x-3 text-lg font-medium">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              © {currentYear} Mohamed Ait Sidi Hou
            </span>
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Brain className="h-4 w-4 text-blue-400" />
              <span className="text-slate-200">Data Scientist</span>
            </div>

            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <MapPin className="h-4 w-4 text-red-400" />
              <span className="text-slate-200">Basé à Paris</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 1s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
