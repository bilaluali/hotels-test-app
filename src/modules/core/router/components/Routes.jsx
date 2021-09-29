import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = ({ location, routes }) => (
  <React.Suspense fallback={<div>Hello World!</div>}>
    <Switch location={location}>
      {routes.map(
        route => (
          <Route key={route.path} {...route} exact/>
        ),
      )}
      <Route component={null} />
    </Switch>
  </React.Suspense>
);

export default Routes;
