import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';


interface ThemeToggleProps {
  className?: string;
  position?: 'fixed' | 'absolute' | 'relative';
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  position = 'absolute',
  size = 'md'
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const containerSizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3'
  };

  const positionClasses = {
    fixed: 'fixed top-20 right-6 sm:right-8 z-50',
    absolute: 'absolute top-20 right-6 sm:right-8 z-20',
    relative: 'relative'
  };

  return (
    <div className={`${positionClasses[position]} ${className}`}>
      <div className={`flex items-center gap-2 ${containerSizeClasses[size]} rounded-full backdrop-blur-sm transition-all duration-500 ${
        isDarkMode 
          ? 'bg-zinc-900/50 border border-zinc-700' 
          : 'bg-white/50 border border-gray-300'
      }`}>
        <button
          onClick={toggleTheme}
          className={`${containerSizeClasses[size]} rounded-full transition-all duration-300 ${
            isDarkMode
              ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200 bg-gray-100'
          } ${!isDarkMode ? 'scale-110 shadow-md' : ''}`}
          aria-label="Light mode"
        >
          <Sun className={sizeClasses[size]} />
        </button>
        <button
          onClick={toggleTheme}
          className={`${containerSizeClasses[size]} rounded-full transition-all duration-300 ${
            isDarkMode
              ? 'text-white bg-zinc-800 scale-110 shadow-md'
              : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
          }`}
          aria-label="Dark mode"
        >
          <Moon className={sizeClasses[size]} />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;