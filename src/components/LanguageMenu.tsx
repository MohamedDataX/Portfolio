import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languageNames, languages, type Lang } from '@/i18n/ui';
import { useLanguage } from '@/i18n/LanguageContext';

/** Compact globe button + dropdown (desktop nav). */
const LanguageMenu = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={t.a11y.language}
        className="flex h-9 items-center gap-1.5 rounded-full px-2 font-mono text-xs uppercase text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Globe className="h-4 w-4" />
        {lang}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem] outline-none">
        <DropdownMenuRadioGroup value={lang} onValueChange={(v) => setLang(v as Lang)}>
          {languages.map((l) => (
            <DropdownMenuRadioItem key={l} value={l} lang={l} className="text-sm">
              {languageNames[l]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageMenu;
