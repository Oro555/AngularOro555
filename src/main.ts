import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { provideRedux } from '@reduxjs/angular-redux';
import { store } from './app/store';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRedux({ store }),
  ],
});
