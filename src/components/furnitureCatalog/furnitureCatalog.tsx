import * as React from 'react';
import {FurnitureTypesList} from './furnitureTypesList/furnitureTypesList';
import './furnitureCatalog.css';

export const FurnitureCatalog = () => {
  return (
    <div className="furniture-types">
      <h3>Товары и услуги</h3>
      <FurnitureTypesList furnitureTypes={[]} getFurnitureTypes={() => {}} />
    </div>
  );
};
