import { Router, Route } from 'preact-router';
import HomePage from './HomePage';
import ConfigPage from './ConfigPage';
// import { App } from '../app.tsx';

const AppRouter = () => {
  return (
    <Router>
      {/*<Route path="/" component={App} />*/}
      <Route path="/" component={HomePage} />
      <Route path="/:year" component={ConfigPage} />
    </Router>
  );
};

export default AppRouter;