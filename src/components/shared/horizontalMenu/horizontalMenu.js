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
exports.HorizontalMenu = void 0;
const React = __importStar(require("react"));
require("./horizontalMenu.css");
const react_router_dom_1 = require("react-router-dom");
const HorizontalMenu = () => {
    return (React.createElement("div", { className: "horizontal-menu" },
        React.createElement(react_router_dom_1.NavLink, { to: "/" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
        React.createElement("div", { className: "menu-dropdown" },
            React.createElement(react_router_dom_1.NavLink, { className: "menu-dropdown-button", to: '/catalog' },
                "\u0422\u043E\u0432\u0430\u0440\u044B \u0438 \u0443\u0441\u043B\u0443\u0433\u0438 ",
                React.createElement("span", null, "\u25BC")),
            React.createElement("div", { className: "menu-dropdown-links" },
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/mebel-dlya-spalni" }, "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0441\u043F\u0430\u043B\u044C\u043D\u0438"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/mebel-dlya-gostinoj" }, "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/detskaya-podrostkovaya-mebel" }, "\u0414\u0435\u0442\u0441\u043A\u0430\u044F \u0438 \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u043E\u0432\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/shkafy-vitriny-stellazhi" }, "\u0428\u043A\u0430\u0444\u044B, \u0432\u0438\u0442\u0440\u0438\u043D\u044B, \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/kuhni" }, "\u041A\u0443\u0445\u043D\u0438"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/kuhonnye-ugolki-stoly" }, "\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u0443\u0433\u043E\u043B\u043A\u0438, \u0441\u0442\u043E\u043B\u044B, \u0442\u0443\u0431\u0443\u0440\u0435\u0442\u044B \u0438 \u0441\u0442\u0443\u043B\u044C\u044F"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/stoly-pismennyekompyuternye-zhurnalnye" }, "\u0421\u0442\u043E\u043B\u044B \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435, \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u044B\u0435, \u0436\u0443\u0440\u043D\u0430\u043B\u044C\u043D\u044B\u0435"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/komody-tumby" }, "\u041A\u043E\u043C\u043E\u0434\u044B \u0438 \u0442\u0443\u043C\u0431\u044B"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/myagkaya-mebel" }, "\u041C\u044F\u0433\u043A\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C"),
                React.createElement(react_router_dom_1.NavLink, { to: "/catalog/dop-pozitsii" }, "\u0414\u043E\u043F \u043F\u043E\u0437\u0438\u0446\u0438\u0438"))),
        React.createElement(react_router_dom_1.NavLink, { to: "/about-us" }, "\u041E \u043D\u0430\u0441"),
        React.createElement(react_router_dom_1.NavLink, { to: "/contacts" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
        React.createElement(react_router_dom_1.NavLink, { to: "/delivery" }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430")));
};
exports.HorizontalMenu = HorizontalMenu;
