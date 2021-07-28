"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const header_1 = require("./components/shared/header/header");
const footer_1 = require("./components/shared/footer/footer");
const horizontalMenu_1 = require("./components/shared/horizontalMenu/horizontalMenu");
const verticalMenu_1 = require("./components/shared/verticalMenu/verticalMenu");
const router_1 = require("./components/router/router");
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.fas, free_regular_svg_icons_1.far);
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(header_1.Header, null),
        react_1.default.createElement("div", { className: "content" },
            react_1.default.createElement(horizontalMenu_1.HorizontalMenu, null),
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "column" },
                    react_1.default.createElement(verticalMenu_1.VerticalMenu, null)),
                react_1.default.createElement("div", { className: "column" },
                    react_1.default.createElement(router_1.AppRouter, null)))),
        react_1.default.createElement(footer_1.Footer, null)));
}
exports.default = App;
