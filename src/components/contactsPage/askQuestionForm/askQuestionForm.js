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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskQuestion = void 0;
const React = __importStar(require("react"));
const Modal_1 = __importDefault(require("react-bootstrap/Modal"));
require("./askQuestionForm.css");
const AskQuestion = (props) => {
    const [questionText, setQuestionText] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('+375');
    return (React.createElement(Modal_1.default, Object.assign({}, props, { size: "lg", "aria-labelledby": "contained-modal-title-vcenter", centered: true }),
        React.createElement(Modal_1.default.Header, { closeButton: true },
            React.createElement(Modal_1.default.Title, null, "\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u0440\u043E\u0434\u0430\u0432\u0446\u0443")),
        React.createElement(Modal_1.default.Body, null,
            React.createElement("div", { className: "question" },
                React.createElement("textarea", { name: "text", placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F", cols: 100, rows: 5, value: questionText, onChange: (e) => {
                        setQuestionText(e.target.value);
                    } }),
                React.createElement("div", { className: "email-form" },
                    React.createElement("input", { type: "email", placeholder: "Email", value: email, onChange: (e) => {
                            setEmail(e.target.value);
                        } })),
                React.createElement("div", { className: "phone-form" },
                    React.createElement("input", { type: "tel", value: phone, pattern: "+375[0-9]{2}[0-9]{7}", onChange: (e) => {
                            setPhone(e.target.value);
                        } }),
                    React.createElement("h6", null, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u0435\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0437\u0430\u043B\u0438\u0441\u044C \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435. \u041F\u0440\u0438\u043C\u0435\u0440: +375294911911")),
                React.createElement("button", { className: "send-question-button", onClick: () => props.onHide() }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")))));
};
exports.AskQuestion = AskQuestion;
