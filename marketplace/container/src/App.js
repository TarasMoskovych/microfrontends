import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';
import { AuthService } from './services/auth.service';

const AuthApp = lazy(() => import('./components/AuthApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'root',
});

export default () => {
  const authService = new AuthService();
  const [isSignedIn, setSignedIn] = useState(() => authService.isAuthenticated());

  const onSignIn = (data, { onDone }, redirect) => {
    authService.authenticate({ email: data.email }, () => {
      onDone();
      setSignedIn(true);
      redirect();
    });
  };

  const onSignOut = () => {
    authService.logout();
    setSignedIn(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={isSignedIn} onSignOut={onSignOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={onSignIn}/>
              </Route>
              <Route path="/" component={MarketingApp}></Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
