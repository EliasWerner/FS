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
exports.Furniture = void 0;
const React = __importStar(require("react"));
require("./furniture.css");
const imagesGallery_1 = require("./imagesGallery/imagesGallery");
const pricePanel_1 = require("./pricePanel/pricePanel");
const generalInfoPanel_1 = require("./generallnfoPanel/generalInfoPanel");
const characteristics_1 = require("./characteristics/characteristics");
const Furniture = (props) => {
    React.useEffect(() => {
        var _a, _b;
        if ((_b = (_a = props.match) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.furnitureId) {
            props.getFurnitureById(Number(props.match.params.furnitureId));
        }
    }, []);
    if (!props.furniture) {
        return null;
    }
    const addToShoppingCart = () => {
        props.addToShoppingCart(props.furniture);
    };
    return (React.createElement("div", { className: "furniture" },
        React.createElement("div", { className: "furniture-row" },
            React.createElement("div", { className: "furniture-col" },
                React.createElement(imagesGallery_1.ImagesGallery, { images: [props.furniture.ImageUrl], title: props.furniture.Title })),
            React.createElement("div", { className: "furniture-col" },
                React.createElement("h3", null, props.furniture.Title),
                React.createElement(pricePanel_1.PricePanel, { price: props.furniture.Price, addToCard: addToShoppingCart }),
                React.createElement(generalInfoPanel_1.GeneralInfoPanel, null))),
        React.createElement("div", { className: "furniture-description", dangerouslySetInnerHTML: { __html: props.furniture.Description } }),
        React.createElement(characteristics_1.Characteristics, { furniture: props.furniture })));
};
exports.Furniture = Furniture;
