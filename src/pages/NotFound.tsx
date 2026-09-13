import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {t.notFound.text}
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
        >
          {t.notFound.back}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
