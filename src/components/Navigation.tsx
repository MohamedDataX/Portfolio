import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems, profile } from '@/data/portfolio';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      if (!isHome) return;

      const y = window.scrollY + 120;
      let current = 'home';
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= y) current = item.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = id === 'home' ? 0 : el.offsetTop - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // On the home page: smooth-scroll. Elsewhere: route home, then scroll.
  const goToSection = (id: string) => {
    setIsMenuOpen(false);
    if (isHome) {
      scrollToId(id);
    } else {
      navigate('/');
      window.setTimeout(() => scrollToId(id), 80);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          to="/"
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {profile.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className={cn(
                'text-sm transition-colors hover:text-foreground',
                isHome && activeSection === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </button>
          ))}
          <Link
            to="/blog"
            className={cn(
              'text-sm transition-colors hover:text-foreground',
              location.pathname.startsWith('/blog') ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            Blog
          </Link>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="mx-auto max-w-6xl space-y-1 px-6 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={cn(
                  'block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted',
                  isHome && activeSection === item.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                'block w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-muted',
                location.pathname.startsWith('/blog')
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground'
              )}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
