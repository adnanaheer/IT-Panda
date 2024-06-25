// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';
// import { importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//   bootstrapApplication(AppComponent, {
//     providers: [
//       importProvidersFrom(BrowserAnimationsModule),
//       provideRouter(routes)
//     ]
//   }).catch(err => console.error(err));


  import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    ...appConfig.providers
  ]
}).catch(err => console.error(err));

