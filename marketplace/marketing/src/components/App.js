import React, { useEffect, useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './Landing';
import Pricing from './Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'mfe-3',
});

const getProducts = () => {
  return fetch(`${PRODUCT_SERVICE_URL}/api/products`).then(res => res.json());
};

export default ({ history, isSignedIn }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts()
      .then(
        (result) => setProducts(result),
        () => setProducts([]));
  }, [])

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/">
              <Landing isSignedIn={isSignedIn} products={products} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
