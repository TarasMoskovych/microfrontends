import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic - App Module
// bootstrapApplication - standalone component
bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
