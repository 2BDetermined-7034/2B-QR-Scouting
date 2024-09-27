import { render } from 'preact';
import { ThemeProvider } from 'next-themes';
import AppRouter from './components/Router';
import './index.css';

render(
  <ThemeProvider attribute='class'>
    <AppRouter />
  </ThemeProvider>,
  document.getElementById('app')!
);