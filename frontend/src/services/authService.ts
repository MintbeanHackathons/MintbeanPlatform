import Keycloak, { KeycloakInstance, KeycloakConfig } from "keycloak-js";

export class AuthService {
  keycloak: KeycloakInstance;

  constructor() {
    const config: KeycloakConfig = {
      clientId: "mintbean",
      realm: "Mintbean",
      url: "http://auth.localhost:3000/auth/"
    }

    this.keycloak = Keycloak(config);

    // this.keycloak = new Keycloak({
    //   "realm": "Mintbean",
    //   // "auth-server-url": "http://auth.localhost:3000/auth/",
    //   // "ssl-required": "none",
    //   // "resource": "mintbean",
    //   // "public-client": true,
    //   // "confidential-port": 0,
    //   clientId: 'mintbean'
    // });
  }

  checkAuth(): Promise<boolean> {
    return this.keycloak.init({
      // check the SSO silently via an iframe.
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    });
  }

  getToken() {
    return this.keycloak.token;
  }

  getSubject() {
    return this.keycloak.subject;
  }

  getUser() {
    return this.keycloak.loadUserProfile();
  }
}