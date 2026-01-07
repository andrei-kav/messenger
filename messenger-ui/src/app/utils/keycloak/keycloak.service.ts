import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;

  constructor() {
  }

  get keycloak(): Keycloak {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9090',
        realm: 'whatsapp-clone',
        clientId: 'messenger-app'
      })
    }
    return this._keycloak;
  }

  get userId(): string {
    return this.keycloak.tokenParsed?.sub as string;
  }

  get isTokenValid(): boolean {
    return this.keycloak.isTokenExpired();
  }

  get fullName(): string {
    return this.keycloak.tokenParsed?.['name'] as string;
  }

  async init(): Promise<void> {
    await this.keycloak.init({
      onLoad: 'login-required'
    });
  }

  async login(): Promise<void> {
    await this.keycloak.login();
  }

  logout(): Promise<void> {
    return this.keycloak.login({redirectUri: 'http://localhost:4200'})
  }

  accountManagement(): Promise<void> {
    return this.keycloak.accountManagement();
  }

}
