import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'pages';
import { PagesLoader } from 'components';

const MainNavigator = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<PagesLoader />}>
        <Route path="/" exact render={(props) => <Home {...props} />} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);
export default MainNavigator;
