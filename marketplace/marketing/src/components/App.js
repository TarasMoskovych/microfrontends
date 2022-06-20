import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfe-3',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
