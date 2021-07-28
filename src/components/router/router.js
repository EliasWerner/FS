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
exports.AppRouter = void 0;
const React = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const main_1 = require("../mainPage/main");
const aboutUs_1 = require("../aboutUsPage/aboutUs");
const contacts_1 = require("../contactsPage/contacts");
const feedbacks_1 = require("../feedbacksPage/feedbacks");
const deliveryInfo_1 = require("../deliveryInfoPage/deliveryInfo");
const pageNotFound_1 = require("../pageNotFound/pageNotFound");
const shoppingCart_1 = require("../shoppingCartPage/shoppingCart");
const furnitureCatalog_1 = require("../furnitureCatalog/furnitureCatalog");
const furnitureList_1 = require("../furnitureList/furnitureList");
const furniture_1 = require("../furniture/furniture");
const AppRouter = () => {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: main_1.Main }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/about-us", component: aboutUs_1.AboutUs }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/contacts", component: contacts_1.Contacts }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/feedbacks", component: feedbacks_1.Feedbacks }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/delivery", component: deliveryInfo_1.DeliveryInfo }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/shopping-cart", component: shoppingCart_1.ShoppingCart }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog", component: furnitureCatalog_1.FurnitureCatalog }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/detskaya-podrostkovaya-mebel", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={791655} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/mebel-dlya-gostinoj", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={8416189} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/mebel-dlya-spalni", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={8416188} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/shkafy-vitriny-stellazhi", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={8416196} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/kuhni", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={791663} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/kuhonnye-ugolki-stoly", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={1684489} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/stoly-pismennyekompyuternye-zhurnalnye", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={791702} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/komody-tumby", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={1684030} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/myagkaya-mebel", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={6692497} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/catalog/dop-pozitsii", render: () => React.createElement(furnitureList_1.FurnitureList /* parentTypeId={8416195} */, null) }),
        React.createElement(react_router_dom_1.Route, { exact: true, path: "/:furnitureId", component: furniture_1.Furniture }),
        React.createElement(react_router_dom_1.Route, { component: pageNotFound_1.PageNotFound })));
};
exports.AppRouter = AppRouter;
