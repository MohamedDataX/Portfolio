import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CosmicBackgroundProps {
  className?: string;
  opacity?: {
    dark: string;
    light: string;
  };
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ 
  className = '', 
  opacity = { dark: 'opacity-100', light: 'opacity-30' }
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`cosmic-background absolute inset-0 ${isDarkMode ? 'dark' : 'light'} ${className}`}>
      {/* Stars/Particles background */}
      <div className={`stars-container transition-opacity duration-1000 ${isDarkMode ? opacity.dark : opacity.light}`}>
        <div className="stars-layer-1"></div>
        <div className="stars-layer-2"></div>
        <div className="stars-layer-3"></div>
        <div className="stars-layer-4"></div>
      </div>
      
      {/* Subtle cosmic nebula */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-10' : 'opacity-5'}`}>
        <div className="cosmic-nebula"></div>
      </div>

      {/* Floating particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-20'}`}>
        <div className="floating-particles"></div>
      </div>
    </div>
  );
};

export default CosmicBackground;