"use strict";
/**
 * This file autogenerates routes from the ./markdown folder
 *
 * It does NOT autogenerate the index, so if you add any pages,
 * please make sure you add those pages to `./markdown/index.md`
 *
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownPageRoutes = void 0;
var mb_markdown_vue_1 = __importDefault(require("../components/mb-markdown.vue"));
var files = require.context("./", true, /\.md$/);
var ensureLeadingSlash = function (_string) {
    var string = _string;
    if (string[0] !== "/") {
        string = "/" + string;
    }
    return string;
};
var removeTrailingSlashes = function (string) { return string.replace(/\/+$/, ""); };
var removeLeadingDot = function (string) { return string.replace(/^\./, ""); };
var createPath = function (_root, _filename) {
    // begin root operations
    var root = _root;
    root = ensureLeadingSlash(root);
    root = removeTrailingSlashes(root);
    // Begin filename operations
    var filename = _filename;
    filename = removeLeadingDot(filename);
    // remove trailing .md declarations
    filename = filename.replace(/\.md$/, "");
    // anything named index.md stays as a root route for that folder
    filename = filename.replace(/index$/, "");
    return root + filename;
};
function markdownPageRoutes(root) {
    var routes = files.keys().map(function (filename) { return ({
        path: createPath(root, filename),
        props: {
            markdown: files(filename)
        },
        component: mb_markdown_vue_1.default
    }); });
    console.log(routes);
    return routes;
}
exports.markdownPageRoutes = markdownPageRoutes;
