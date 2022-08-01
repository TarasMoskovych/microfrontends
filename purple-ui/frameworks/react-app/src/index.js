import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

class ReactElement extends HTMLElement {
  connectedCallback() {
    ReactDOM
      .createRoot(this)
      .render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

customElements.define('react-element', ReactElement);
