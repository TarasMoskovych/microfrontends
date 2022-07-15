import { mount } from './mount';
import { IGeolocation } from './services/weather.service';

const bootstrap = (geolocation: IGeolocation = { latitude: 49.7981235, longitude: 23.155698 }) => {
  mount(document.querySelector('#app-weather') as HTMLElement, geolocation);
};

navigator.geolocation.getCurrentPosition(
  ({ coords }: GeolocationPosition) => bootstrap({ latitude: coords.latitude, longitude: coords.longitude }),
  (e) => {
    console.warn('Using default geolocation', e);
    bootstrap();
  },
);
