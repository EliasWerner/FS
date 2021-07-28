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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const React = __importStar(require("react"));
const Nav_1 = __importDefault(require("react-bootstrap/Nav"));
require("./menu.css");
const react_router_dom_1 = require("react-router-dom");
const Menu = () => {
    return (React.createElement(Nav_1.default, { defaultActiveKey: "/home", className: "flex-column", id: "vertical-menu" },
        React.createElement("div", { className: "vert-menu-item" },
            React.createElement(react_router_dom_1.NavLink, { to: "/" }, "\u041C\u0435\u043D\u044E")),
        React.createElement("div", { className: "vert-menu-item" },
            React.createElement(react_router_dom_1.NavLink, { to: "/about-us" }, "\u041E \u043D\u0430\u0441")),
        React.createElement("div", { className: "vert-menu-item" },
            React.createElement(react_router_dom_1.NavLink, { to: "/feedbacks" }, "\u041E\u0442\u0437\u044B\u0432\u044B")),
        React.createElement("div", { className: "vert-menu-item" },
            React.createElement(react_router_dom_1.NavLink, { to: "/delivery" }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"))));
};
exports.Menu = Menu;
