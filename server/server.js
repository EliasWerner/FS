"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const app_1 = __importDefault(require("../src/app"));
const server = express_1.default();
server.set('view engine', 'ejs');
server.set('views', path_1.default.join(__dirname, 'views'));
server.use('/', express_1.default.static(path_1.default.join(__dirname, 'static')));
const manifest = fs_1.default.readFileSync(path_1.default.join(__dirname, 'static/manifest.json'), 'utf-8');
const assets = JSON.parse(manifest);
server.get('/', (req, res) => {
    const component = server_1.default.renderToString(react_1.default.createElement(app_1.default));
    res.render('client', { assets, component });
});
server.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});
