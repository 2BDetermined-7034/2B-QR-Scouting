import { Router, Route } from 'preact-router';
// import ConfigPage from './ConfigPage';
import HomePage from './HomePage';
import { App } from '../app.tsx';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/2024" component={App} />
    </Router>
  );
};

export default AppRouter;