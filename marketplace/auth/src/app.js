import { createBrowserHistory } from 'history';
import { mount } from './mount';

mount(document.querySelector('#app-auth'), { defaultHistory: createBrowserHistory() });
