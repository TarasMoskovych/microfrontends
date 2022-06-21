import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './Signin';
import Signup from './Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfe-1',
});

export default ({ history, standalone, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            {standalone &&
              <Route exact path="*">
                <Redirect to="/auth/signin" />
              </Route>
            }
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
