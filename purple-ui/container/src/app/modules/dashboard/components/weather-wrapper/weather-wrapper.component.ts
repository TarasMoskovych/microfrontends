import { getManifest, loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-weather-wrapper',
  template: '<div #weather class="weather"></div>',
  styles: [`
    .weather ::ng-deep svg {
      @media screen and (max-width: 768px) {
        max-height: 500px;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWrapperComponent implements OnInit {
  @Input() user!: IUser;
  @ViewChild('weather') weatherEl!: ElementRef;

  get coords(): Promise<{ latitude: number, longitude: number }> {
    const { latitude, longitude } = this.user.location.coordinates;

    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }: GeolocationPosition) => resolve({ latitude: coords.latitude, longitude: coords.longitude }),
        () => {
          console.warn('Using user geolocation');
          resolve({ latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude) });
        },
      );
    });
  }

  async ngOnInit(): Promise<void> {
    const { weather } = getManifest();
    const { mount } = await loadRemoteModule(weather as LoadRemoteModuleOptions);
    const { latitude, longitude } = await this.coords;

    mount(this.weatherEl.nativeElement, { latitude, longitude });
  }
}
