"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var axios_1 = __importDefault(require("axios"));
var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.prototype.get = function (url) {
        return axios_1.default.get(url);
    };
    return ApiService;
}());
exports.ApiService = ApiService;
