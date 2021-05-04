import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { SearchResultsPage } from '../pages/Search';
import { DetailsPage } from '../pages/Details';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/searchResults/:search" component={SearchResultsPage} />
    <Route path="/details/:book" component={DetailsPage} />
  </Switch>
);