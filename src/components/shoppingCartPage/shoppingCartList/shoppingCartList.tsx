import * as React from 'react';
import './shoppingCartList.css';
import { IShoppingCartItem } from '../../../models/IShoppingCartItem';
import {ShoppingCartListItem} from './shoppingCartListItem/shoppingCartListItem';


export const ShoppingCartList = () => {
  const [items, setItems] = React.useState<IShoppingCartItem[]>([]);

  const getTotalPrice = () => {
    let result: number = 0;

    for (const item of items) {
      result += item.amount * item.furniture.Price;
    }

    return result;
  };
  return (
    <div>
      {items.length ? (
        <>
          <div className="shopping-cart-list">
            {items.map((item) => (
              <ShoppingCartListItem /* listItem={item} */ />
            ))}
          </div>
          <div className="total-price">
            <h4>К оплате: {getTotalPrice()} руб.</h4>
          </div>
        </>
      ) : null}
    </div>
  );
};
