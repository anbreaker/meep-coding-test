import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { MeepPage } from '../components/pages/MeepPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MeepPage} />
        <Route exact path="/404" component={NotFoundPage} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};
