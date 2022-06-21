import React from 'react';
import { Redirect } from 'react-router';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './Signin';
import Signup from './Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfe-1',
});

export default ({ history, standalone }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={Signin}></Route>
            <Route path="/auth/signup" component={Signup}></Route>
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
