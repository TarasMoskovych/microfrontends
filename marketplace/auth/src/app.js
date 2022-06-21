import { createBrowserHistory } from 'history';
import { mount } from './mount';

mount(document.querySelector('#app-auth'), {
  defaultHistory: createBrowserHistory(),
  standalone: true,
  onSignIn: (data, { onDone }) => {
    setTimeout(() => {
      console.log('auth form submitted with: ', data);
      onDone();
    }, 2000);
  },
});
