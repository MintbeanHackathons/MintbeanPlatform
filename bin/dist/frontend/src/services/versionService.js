"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionService = void 0;
var apiService_1 = require("./apiService");
var package_json_1 = __importDefault(require("../../package.json"));
var VersionService = /** @class */ (function () {
    function VersionService() {
    }
    VersionService.prototype.frontendVersion = function () {
        return Promise.resolve(package_json_1.default.version);
    };
    VersionService.prototype.backendVersion = function () {
        return new apiService_1.ApiService().get("/api/v1/version").then(function (res) { return res.data; });
    };
    return VersionService;
}());
exports.VersionService = VersionService;
