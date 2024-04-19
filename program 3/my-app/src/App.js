import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import DashboardPage from './Component/DashboardPage';

// Lazy load the component
const LazyLoadedComponent = lazy(() => import('./components/LazyLoadedComponent'));

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/lazy" render={() => (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponent />
        </Suspense>
      )} />
    </Router>
  );
};

export default App;
