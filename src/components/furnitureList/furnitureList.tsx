import * as React from 'react';
import './furnitureList.css';
import { IFurnitureType } from '../../models/IFurnitureType';
import { IFurniture } from '../../models/IFurniture';
import { FurnitureListItem } from './furnitureListItem/furnitureListItem';

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

export const FurnitureList = (/* props: IFurnitureListProps */) => {
  const [parentTypeId, setParentTypeId] = React.useState<number | null>(null);
  const [furnitureParentType, setFurnitureParentType] = React.useState<IFurnitureType | null>(null);
  const [furnitureSubtypes, setFurnitureSubtypes] = React.useState<IFurnitureType[]>([]);
  const [furniture, setFurniture] = React.useState<IFurniture[]>([]);

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

  return (
    <div className="furniture">
      {furnitureParentType ? (
        <h3>{furnitureParentType.Title}</h3>
      ) : null}
      <div className="furniture-list">
        {furniture.length
          ? furniture.map((f) => (
              <FurnitureListItem furniture={f} key={f.Id} />
            ))
          : null}
      </div>
    </div>
  );
};
