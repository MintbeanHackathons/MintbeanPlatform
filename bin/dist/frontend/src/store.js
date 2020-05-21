"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
var vuex_1 = __importDefault(require("vuex"));
var versionService_1 = require("./services/versionService");
var state = {
    user: undefined,
    frontendVersion: "Loading",
    backendVersion: "Loading",
    loginUrl: undefined,
    logoutUrl: undefined,
    registerUrl: undefined
};
var mutations = {
    setProperty: function (state, arr) {
        console.log("Trying to set properties", arr);
        var key = arr[0];
        /* eslint-disable @typescript-eslint/no-explicit-any */
        var value = arr[1];
        /* eslint-enable  @typescript-eslint/no-explicit-any */
        state[key] = value;
    }
};
var createActions = function (authService) { return ({
    checkAuth: function (_a) {
        var commit = _a.commit;
        return __awaiter(this, void 0, void 0, function () {
            var isAuthenticated, user, e_1, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, authService.checkAuth()];
                    case 1:
                        isAuthenticated = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        console.error("Failed to initialize Auth Service", e_1);
                        return [3 /*break*/, 3];
                    case 3:
                        if (!isAuthenticated) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, authService.getUser()];
                    case 5:
                        user = _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _b.sent();
                        console.error("Auth passed, but failed to fetch user data.", e_2);
                        return [3 /*break*/, 7];
                    case 7:
                        if (user) {
                            commit("setProperty", ["user", user]);
                        }
                        else {
                            commit("setProperty", ["user", undefined]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    setVersions: function (_a) {
        var commit = _a.commit;
        return __awaiter(this, void 0, void 0, function () {
            var versionService;
            return __generator(this, function (_b) {
                versionService = new versionService_1.VersionService();
                versionService
                    .frontendVersion()
                    .then(function (version) { return commit("setProperty", ["frontendVersion", version]); })
                    .catch(function (err) {
                    console.error("Failed to set frontendVersion", err);
                    commit("setProperty", ["frontendVersion", "Unknown"]);
                });
                versionService
                    .backendVersion()
                    .then(function (version) { return commit("setProperty", ["backendVersion", version]); })
                    .catch(function (err) {
                    console.error("Failed to set backendVersion", err);
                    commit("setProperty", ["backendVersion", "Unknown"]);
                });
                return [2 /*return*/];
            });
        });
    }
}); };
exports.createStore = function (authService) {
    return new vuex_1.default.Store({
        state: state,
        mutations: mutations,
        actions: createActions(authService)
    });
};
