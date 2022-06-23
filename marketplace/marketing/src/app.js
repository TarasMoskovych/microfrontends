import { createBrowserHistory } from 'history';
import { mount } from './mount';

mount(document.querySelector('#app-marketing'), {
  defaultHistory: createBrowserHistory(),
  isSignedIn: true,
});
