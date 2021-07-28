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
exports.DeliveryInfo = void 0;
const React = __importStar(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
require("./deliveryInfo.css");
const DeliveryInfo = () => {
    return (React.createElement("div", { className: "delivery-info" },
        React.createElement("h3", null, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
        React.createElement("div", { className: "delivery-info-item" },
            React.createElement("h5", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'truck'] }),
                React.createElement("span", null, "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")),
            React.createElement("ul", null,
                React.createElement("li", null, "\u041F\u043B\u0430\u0442\u043D\u043E \u043F\u043E \u041C\u0438\u043D\u0441\u043A\u0443 \u0434\u043E \u043F\u043E\u0434\u044A\u0435\u0437\u0434\u0430 - 7 \u0440\u0443\u0431"),
                React.createElement("li", null, "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"),
                React.createElement("li", null, "\u041F\u043B\u0430\u0442\u043D\u043E \u043F\u043E \u0420\u0411 \u0438\u0441\u0445\u043E\u0434\u044F \u0438\u0437 \u0432\u0435\u0441\u0430 \u0438 \u043E\u0431\u044A\u0435\u043C\u0430 \u0442\u043E\u0432\u0430\u0440\u0430"))),
        React.createElement("div", { className: "delivery-info-item" },
            React.createElement("h5", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'credit-card'] }),
                React.createElement("span", null, "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B")),
            React.createElement("ul", null,
                React.createElement("li", null, "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438"),
                React.createElement("li", null, "\u041D\u0430\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0442\u0435\u0436"))),
        React.createElement("div", { className: "delivery-info-item" },
            React.createElement("h5", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'certificate'] }),
                React.createElement("span", null, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F")),
            React.createElement("ul", null,
                React.createElement("li", null, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432"))),
        React.createElement("div", { className: "delivery-info-item" },
            React.createElement("h5", null,
                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: ['fas', 'map-marker-alt'] }),
                React.createElement("span", null, "\u0420\u0435\u0433\u0438\u043E\u043D\u044B \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438")),
            React.createElement("ul", null,
                React.createElement("li", null, "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C, \u0432\u0441\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u044B")))));
};
exports.DeliveryInfo = DeliveryInfo;
