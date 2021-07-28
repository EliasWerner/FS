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
exports.Contacts = void 0;
const React = __importStar(require("react"));
require("./contacts.css");
const Contacts = () => {
    return (React.createElement("div", { className: "contacts" },
        React.createElement("h4", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F")),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E")),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
            React.createElement("div", null),
            React.createElement("span", null)),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "\u0421\u0430\u0439\u0442"),
            React.createElement("a", { href: "/" })),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "Email"),
            React.createElement("a", { href: "/" })),
        React.createElement("div", { className: "item" },
            React.createElement("h6", null, "\u0410\u0434\u0440\u0435\u0441"))));
};
exports.Contacts = Contacts;
