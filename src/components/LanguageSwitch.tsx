import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { languages } from '@/i18n/ui';
import { useLanguage } from '@/i18n/LanguageContext';

const LanguageSwitch = ({ className }: { className?: string }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.a11y.language}
      className={cn('flex items-center font-mono text-xs', className)}
    >
      {languages.map((l, i) => (
        <Fragment key={l}>
          {i > 0 && <span className="px-1.5 text-border">/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            lang={l}
            className={cn(
              'uppercase transition-colors hover:text-foreground',
              lang === l ? 'text-foreground' : 'text-muted-foreground'
            )}
          >
            {l}
          </button>
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitch;
