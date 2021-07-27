"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
function App() {
    const [count, setCount] = react_1.default.useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decerement = () => {
        setCount(count - 1);
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("p", null, count),
        react_1.default.createElement("button", { onClick: increment }, "+"),
        react_1.default.createElement("button", { onClick: decerement }, "-")));
}
exports.default = App;
