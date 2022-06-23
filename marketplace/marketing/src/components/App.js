import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfe-3',
});

export default ({ history, isSignedIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/">
              <Landing isSignedIn={isSignedIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
