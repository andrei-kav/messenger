import {ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {KeycloakService} from './utils/keycloak/keycloak.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(() => {
      const initF: () => Promise<void> = ((key: KeycloakService) => {
        return (): Promise<void> => key.init();
      })(inject(KeycloakService));
      return initF();
    })
  ]
};
