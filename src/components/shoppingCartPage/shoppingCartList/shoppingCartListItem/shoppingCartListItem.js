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
exports.ShoppingCartListItem = void 0;
const React = __importStar(require("react"));
require("./shoppingCartListItem.css");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
// export interface IShoppingCartListItemParams {
//   listItem: IShoppingCartItem;
// }
// export interface IShoppingCartListItemFunc {
//   deleteFromCart: (listItem: IShoppingCartItem) => void;
//   increaseAmount: (listItem: IShoppingCartItem) => void;
//   decreaseAmount: (listItem: IShoppingCartItem) => void;
//   setAmount: (listItem: IShoppingCartItem, newAmount: number) => void;
// }
// export interface IShoppingCartListItemProps
//   extends IShoppingCartListItemFunc,
//     IShoppingCartListItemParams {}
const ShoppingCartListItem = ( /* props: IShoppingCartListItemProps */) => {
    const [listItem, setListItem] = React.useState(null);
    return (React.createElement("div", { className: "shopping-cart-list-item" },
        React.createElement("div", { className: "shopping-cart-list-item-image" },
            React.createElement("img", { src: listItem === null || listItem === void 0 ? void 0 : listItem.furniture.ImageUrl, alt: listItem === null || listItem === void 0 ? void 0 : listItem.furniture.Title })),
        React.createElement("div", { className: "shopping-cart-list-item-title" },
            React.createElement("h4", null, listItem === null || listItem === void 0 ? void 0 : listItem.furniture.Title),
            React.createElement("h5", null, listItem === null || listItem === void 0 ? void 0 :
                listItem.furniture.Price,
                " \u0440\u0443\u0431.")),
        React.createElement("div", { className: "shopping-cart-list-item-amount" },
            React.createElement("button", null, "-"),
            React.createElement("input", { type: "text", value: listItem === null || listItem === void 0 ? void 0 : listItem.amount, onChange: (e) => {
                    if (Number(e.target.value) && Number(e.target.value) > 0) {
                        /* props.setAmount(props.listItem, Number(e.target.value)); */
                    }
                } }),
            React.createElement("button", null, "+")),
        React.createElement("div", { className: "shopping-cart-list-item-delete" },
            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'trash'] }))));
};
exports.ShoppingCartListItem = ShoppingCartListItem;
