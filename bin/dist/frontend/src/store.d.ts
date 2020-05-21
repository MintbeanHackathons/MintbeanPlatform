import { AuthService } from "./services/authService";
export declare type MbUser = {
    firstName: string;
    lastName: string;
};
export declare type MbState = {
    user?: MbUser;
    frontendVersion: string;
    backendVersion: string;
    loginUrl?: string;
    logoutUrl?: string;
    registerUrl?: string;
};
export declare const createStore: (authService: AuthService) => import("vuex").Store<MbState>;
