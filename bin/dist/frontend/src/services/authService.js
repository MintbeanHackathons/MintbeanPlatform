"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var keycloak_js_1 = __importDefault(require("keycloak-js"));
var AuthService = /** @class */ (function () {
    function AuthService() {
        console.log("Process.env is", process.env);
        var config = {
            clientId: "mintbean",
            realm: "Mintbean",
            url: process.env.VUE_APP_KEYCLOAK_URL || "http://auth.localhost:3000/auth/"
        };
        this.keycloak = keycloak_js_1.default(config);
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
    AuthService.prototype.checkAuth = function () {
        return this.keycloak.init({
            // check the SSO silently via an iframe.
            onLoad: "check-sso",
            silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html"
        });
    };
    AuthService.prototype.getToken = function () {
        return this.keycloak.token;
    };
    AuthService.prototype.getSubject = function () {
        return this.keycloak.subject;
    };
    AuthService.prototype.getUser = function () {
        return this.keycloak.loadUserProfile();
    };
    AuthService.prototype.getLoginUrl = function () {
        return this.keycloak.createLoginUrl();
    };
    AuthService.prototype.getLogoutUrl = function () {
        return this.keycloak.createLogoutUrl();
    };
    AuthService.prototype.getRegisterUrl = function () {
        return this.keycloak.createRegisterUrl();
    };
    AuthService.prototype.onReady = function (callback) {
        this.keycloak.onReady = callback;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
