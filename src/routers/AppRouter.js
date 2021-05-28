import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { App } from '../components/App';
import { NotFoundPage } from '../components/pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/404" component={NotFoundPage} />

        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};
