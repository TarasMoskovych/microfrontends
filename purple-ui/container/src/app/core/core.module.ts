import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'AUTH_CALLBACK',
      useClass: UserService,
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
})
export class CoreModule {
}
