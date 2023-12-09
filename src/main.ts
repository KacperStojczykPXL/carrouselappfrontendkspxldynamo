import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { datadogRum } from '@datadog/browser-rum';

const envi = process.env.ENVI || 'dev'; 
const appID = process.env.APP_ID || 'appid';
const client = process.env.CLIENT || 'client';

datadogRum.init({
    applicationId: appID,
    clientToken: client,
    site: 'us5.datadoghq.com',
    service: 'frontend',
    env: envi,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
