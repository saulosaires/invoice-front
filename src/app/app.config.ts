import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient} from "@angular/common/http";
import {GoogleLoginProvider, SocialAuthServiceConfig} from "@abacritt/angularx-social-login";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(),provideHttpClient(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(('957001662031-msgo7pbtft5s6a388r9lsumetbu8ct2k.apps.googleusercontent.com'))
          }
        ],
        onError: (err) => {
          console.log(err);
        }
      } as SocialAuthServiceConfig

    }]
};
