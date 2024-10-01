import { render } from 'preact'
// import { App } from './app.tsx'
import './index.css'

import { ThemeProvider } from "next-themes"
import AppRouter from './components/Router.tsx';

render( <ThemeProvider attribute='class'>
  <AppRouter />
</ThemeProvider>, document.getElementById('app')!)