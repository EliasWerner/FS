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
exports.ShoppingCartIcon = void 0;
const React = __importStar(require("react"));
require("./shoppingCartIcon.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_router_dom_1 = require("react-router-dom");
// export interface IShoppingCartProps {
//   itemsAmount: number;
// }
const ShoppingCartIcon = ( /* props: IShoppingCartProps */) => {
    return (React.createElement(react_router_dom_1.NavLink, { className: "shopping-card-icon", to: "/shopping-cart" },
        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'shopping-cart'] }),
        "\u041A\u043E\u0440\u0437\u0438\u043D\u0430 ",
        React.createElement("span", null,
            "props.itemsAmount ",
            '>',
            " 0 ? props.itemsAmount : null")));
};
exports.ShoppingCartIcon = ShoppingCartIcon;
