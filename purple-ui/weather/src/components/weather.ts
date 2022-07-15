import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { weatherLayout } from '../layouts/weather.layout';
import { WeatherService, IWeather, IGeolocation } from '../services/weather.service';

export class Weather {
  private readonly weatherService = new WeatherService();
  private readonly weather$ = new BehaviorSubject<IWeather | null>(null);

  constructor(private container: HTMLElement, private geolocation: IGeolocation) {
    this.init();
  }

  private init(): void {
    this.weather$
      .pipe(take(2))
      .subscribe((weather: IWeather | null) => this.render(weather as IWeather));

    this.weatherService.getWeather(this.geolocation)
      .pipe(take(1))
      .subscribe((weather: IWeather) => this.weather$.next(weather));
  }

  private render(weather: IWeather): void {
    this.container.innerHTML = weatherLayout(weather);
  }
}
