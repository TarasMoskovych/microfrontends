import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IUser } from './auth/services/auth.service';

const authCallback = {
  onLoggedIn: (user: IUser) => {
    console.log('submit loggin form', user);
  },
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'AUTH_CALLBACK',
      useValue: authCallback,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
