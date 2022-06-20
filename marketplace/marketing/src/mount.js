import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './components/App';

export const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPath }) {
      const { pathname } = history.location;

      if (pathname !== nextPath) {
        history.push(nextPath);
      }
    }
  };
};
