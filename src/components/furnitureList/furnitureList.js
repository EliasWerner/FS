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
exports.FurnitureList = void 0;
const React = __importStar(require("react"));
require("./furnitureList.css");
const furnitureListItem_1 = require("./furnitureListItem/furnitureListItem");
// export interface IFurnitureListParams {
//   parentTypeId: number;
//   furnitureParentType: IFurnitureType | null;
//   furnitureSubtypes: IFurnitureType[];
//   furniture: IFurniture[];
// }
// export interface IFurnitureListFuncs {
//   getFurnitureType: (typeId: number) => void;
//   getFurnitureSubtypes: (type: IFurnitureType) => void;
//   getFurnitureForTypes: (types: IFurnitureType[]) => void;
// }
// export interface IFurnitureListProps
//   extends IFurnitureListFuncs,
//     IFurnitureListParams {}
const FurnitureList = ( /* props: IFurnitureListProps */) => {
    const [parentTypeId, setParentTypeId] = React.useState(null);
    const [furnitureParentType, setFurnitureParentType] = React.useState(null);
    const [furnitureSubtypes, setFurnitureSubtypes] = React.useState([]);
    const [furniture, setFurniture] = React.useState([]);
    // React.useEffect(() => {
    //   props.getFurnitureType(props.parentTypeId);
    // }, []);
    // React.useEffect(() => {
    //   if (props.furnitureParentType) {
    //     props.getFurnitureSubtypes(props.furnitureParentType);
    //   }
    // }, [props.furnitureParentType && props.furnitureParentType?.Id]);
    // React.useEffect(() => {
    //   props.getFurnitureForTypes([
    //     ...props.furnitureSubtypes,
    //     props.furnitureParentType as IFurnitureType,
    //   ]);
    // }, [props.furnitureSubtypes]);
    return (React.createElement("div", { className: "furniture" },
        furnitureParentType ? (React.createElement("h3", null, furnitureParentType.Title)) : null,
        React.createElement("div", { className: "furniture-list" }, furniture.length
            ? furniture.map((f) => (React.createElement(furnitureListItem_1.FurnitureListItem, { furniture: f, key: f.Id })))
            : null)));
};
exports.FurnitureList = FurnitureList;
