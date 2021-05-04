import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SearchResultsPage } from '../pages/Search';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/searchResults/:search" component={SearchResultsPage} />
  </Switch>
);