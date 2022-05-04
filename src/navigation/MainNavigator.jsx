import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'pages';

const MainNavigator = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<p>loading...</p>}>
        <Route path="/" exact render={(props) => <Home {...props} />} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);
export default MainNavigator;
