import { getManifest, loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IUser } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-weather-wrapper',
  template: '<div #weather></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherWrapperComponent implements OnInit {
  @Input() user!: IUser;
  @ViewChild('weather') weatherEl!: ElementRef;

  async ngOnInit(): Promise<void> {
    const { weather } = getManifest();
    const { latitude, longitude } = this.user.location.coordinates;
    const { mount } = await loadRemoteModule(weather as LoadRemoteModuleOptions);

    mount(this.weatherEl.nativeElement, { latitude, longitude });
  }
}
