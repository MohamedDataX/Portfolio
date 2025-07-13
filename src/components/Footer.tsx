import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-sm">
            <span>© {currentYear} Alexandre Dupont</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Fait avec</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>et beaucoup de données</span>
            </span>
          </p>
          <p className="text-xs text-background/70 mt-2">
            Data Scientist • Spécialisé en IA • Basé à Paris
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;