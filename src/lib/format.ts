import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

/** ISO date -> "12 mars 2026" (French). */
export function formatDate(iso: string): string {
  return format(parseISO(iso), 'd MMMM yyyy', { locale: fr });
}
