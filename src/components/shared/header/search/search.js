"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const React = __importStar(require("react"));
require("./search.css");
const Search = () => {
    return (React.createElement("div", { className: "search-form" },
        React.createElement("input", { type: "text", placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443 \u0442\u043E\u0432\u0430\u0440\u043E\u0432..." }),
        React.createElement("button", { className: "search-button" }, "\u041F\u043E\u0438\u0441\u043A")));
};
exports.Search = Search;
