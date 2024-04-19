import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DashboardPage from './components/DashboardPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/dashboard" component={DashboardPage} />
    </Router>
  );
};

export default App;
