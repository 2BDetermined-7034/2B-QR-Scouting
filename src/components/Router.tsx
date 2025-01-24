import { Router, Route } from 'preact-router';
// import ConfigPage from './ConfigPage';
// import HomePage from './HomePage';
import { App } from '../app.tsx';

const AppRouter = () => {
  return (
    <Router>
      <Route path="/2025" component={App} />
      {/*<Route path="" component={App} />*/}
    </Router>
  );
};

export default AppRouter;
