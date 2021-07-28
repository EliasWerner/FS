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
exports.ShoppingCartList = void 0;
const React = __importStar(require("react"));
require("./shoppingCartList.css");
const shoppingCartListItem_1 = require("./shoppingCartListItem/shoppingCartListItem");
const ShoppingCartList = () => {
    const [items, setItems] = React.useState([]);
    const getTotalPrice = () => {
        let result = 0;
        for (const item of items) {
            result += item.amount * item.furniture.Price;
        }
        return result;
    };
    return (React.createElement("div", null, items.length ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "shopping-cart-list" }, items.map((item) => (React.createElement(shoppingCartListItem_1.ShoppingCartListItem /* listItem={item} */, null)))),
        React.createElement("div", { className: "total-price" },
            React.createElement("h4", null,
                "\u041A \u043E\u043F\u043B\u0430\u0442\u0435: ",
                getTotalPrice(),
                " \u0440\u0443\u0431.")))) : null));
};
exports.ShoppingCartList = ShoppingCartList;
