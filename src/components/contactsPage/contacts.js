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
exports.Contacts = void 0;
const React = __importStar(require("react"));
require("./contacts.css");
const askQuestionForm_1 = require("./askQuestionForm/askQuestionForm");
const Contacts = () => {
    const [showQuestionForm, setShowQuestionForm] = React.useState(false);
    return (React.createElement("div", { className: "contact-info" },
        React.createElement("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Mebel-online"),
        React.createElement("table", { className: "" },
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E"),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null, "\u0410\u0434\u0440\u0435\u0441"),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null, "Email"),
                    React.createElement("td", null)),
                React.createElement("tr", null,
                    React.createElement("td", null, "\u0413\u043E\u0434 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F"),
                    React.createElement("td", null)))),
        React.createElement("div", { className: "contacts-buttons" },
            React.createElement("button", { onClick: () => setShowQuestionForm(true) }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C")),
        React.createElement(askQuestionForm_1.AskQuestion, { show: showQuestionForm, onHide: () => setShowQuestionForm(false) })));
};
exports.Contacts = Contacts;
