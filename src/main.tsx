import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';

// Pre-renders `routes` to static HTML at build; hydrates the same tree on the client.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
