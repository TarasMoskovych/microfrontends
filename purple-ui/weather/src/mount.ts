import { Weather } from './components/weather';
import { IGeolocation } from './services/weather.service';

export const mount = (el: HTMLElement, geolocation: IGeolocation) => {
  new Weather(el, geolocation);
};
