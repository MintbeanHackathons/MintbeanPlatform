import Keycloak, { KeycloakInstance } from "keycloak-js";
export declare class AuthService {
    keycloak: KeycloakInstance;
    constructor();
    checkAuth(): Promise<boolean>;
    getToken(): string | undefined;
    getSubject(): string | undefined;
    getUser(): Keycloak.KeycloakPromise<Keycloak.KeycloakProfile, void>;
    getLoginUrl(): string;
    getLogoutUrl(): string;
    getRegisterUrl(): string;
    onReady(callback: (loggedIn: boolean) => void): void;
}
