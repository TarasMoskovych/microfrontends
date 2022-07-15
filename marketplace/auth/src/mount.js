import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './components/App';

export const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath, standalone = false }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath],
  });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} standalone={standalone} />, el);

  return {
    onParentNavigate({ pathname: nextPath }) {
      const { pathname } = history.location;

      if (pathname !== nextPath) {
        history.push(nextPath);
      }
    },
  };
};
