import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Progress from './components/Progress';
import { AuthPayload, AuthService } from './services/auth.service';

const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const ProductManagementApp = lazy(() => import('./components/ProductManagementApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'root',
});

export default () => {
  const authService = new AuthService();
  const [isSignedIn, setSignedIn] = useState(() => authService.isAuthenticated());

  const onSignIn = (data: AuthPayload, onDone: () => void, redirect: () => void) => {
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
        <Header signedIn={isSignedIn} onSignOut={onSignOut} />
        <div style={{ marginTop: 66 }}>
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={onSignIn} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardApp />
              </Route>
              <Route path="/product-management">
                {!isSignedIn && <Redirect to="/" />}
                <ProductManagementApp />
              </Route>
              <Route path="/">
                <MarketingApp isSignedIn={isSignedIn} />
              </Route>
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </StylesProvider>
    </BrowserRouter>
  );
};
