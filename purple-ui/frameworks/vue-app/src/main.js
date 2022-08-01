import { createApp } from 'vue'
import App from './App.vue'

class VueElement extends HTMLElement {
  connectedCallback() {
    createApp(App).mount(this);
  }
}

customElements.define('vue-element', VueElement);
