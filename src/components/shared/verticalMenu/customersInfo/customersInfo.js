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
exports.CustomersInfo = void 0;
const React = __importStar(require("react"));
require("./customersInfo.css");
const CustomersInfo = () => {
    return (React.createElement("div", { className: "customers-info" },
        React.createElement("h4", null, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u0435\u0439"),
        React.createElement("div", { className: "work-time" },
            React.createElement("h5", null, "\u0420\u0435\u0436\u0438\u043C \u0440\u0430\u0431\u043E\u0442\u044B"),
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u0414\u0435\u043D\u044C"),
                        React.createElement("th", null, "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u041F\u043D-\u041F\u0442"),
                        React.createElement("td", null, "09:00 \u2014 20:00")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u0421\u0431"),
                        React.createElement("td", null, "11:00 \u2014 18:00")),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u0412\u0441"),
                        React.createElement("td", null, "\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439")))))));
};
exports.CustomersInfo = CustomersInfo;
