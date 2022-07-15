import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

declare const MFE_SERVICE_URL: string;

export class WeatherService {
  getWeather(geolocation: IGeolocation): Observable<IWeather> {
    return fromFetch(`${MFE_SERVICE_URL}/api/weather`, {
      selector: response => response.json(),
      method: 'post',
      body: JSON.stringify(geolocation),
      headers: {
        'content-type': 'application/json',
      },
    });
  }
}

export interface IWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IGeolocation {
  latitude: number;
  longitude: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
