import { Router, Route } from 'preact-router';
import ConfigPage from './ConfigPage';
import HomePage from './HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/:year" component={ConfigPage} />
    </Router>
  );
};

export default AppRouter;