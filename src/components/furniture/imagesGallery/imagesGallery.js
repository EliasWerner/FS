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
exports.ImagesGallery = void 0;
const React = __importStar(require("react"));
require("./imagesGallery.css");
const ImagesGallery = (props) => {
    const [selectedImage, setSelectedImage] = React.useState('');
    React.useEffect(() => {
        setSelectedImage(props.images.length ? props.images[0] : '');
    }, []);
    React.useEffect(() => {
        setSelectedImage(props.images.length ? props.images[0] : '');
    }, [props.images]);
    return (React.createElement("div", { className: "images-gallery" },
        React.createElement("div", { className: "main-image" },
            React.createElement("img", { src: selectedImage, alt: props.title })),
        React.createElement("div", { className: "small-images" }, props.images.map((image) => (React.createElement("img", { src: image, alt: props.title, onClick: () => setSelectedImage(image) }))))));
};
exports.ImagesGallery = ImagesGallery;
