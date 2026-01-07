import {HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {KeycloakService} from '../keycloak/keycloak.service';
import {inject} from '@angular/core';

export const keycloakHttpInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const keycloakService: KeycloakService = inject(KeycloakService);
  const token: string | undefined = keycloakService.keycloak.token;
  if (token) {
    const authReq: HttpRequest<unknown> = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
    return next(authReq);
  }
  return next(req);
};
