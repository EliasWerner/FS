import * as React from 'react';
import './shoppingCartList.css';
import { IShoppingCartItem } from '../../../models/IShoppingCartItem';
import { ShoppingCartListItem } from './shoppingCartListItem/shoppingCartListItem';

export interface IShoppingCartListProps {
  items: IShoppingCartItem[];
}

export const ShoppingCartList = (props: IShoppingCartListProps) => {
  const getTotalPrice = () => {
    let result: number = 0;

    for (const item of props.items) {
      result += item.amount * item.furniture.Price;
    }

    return result;
  };
  return (
    <div>
      {props.items.length ? (
        <>
          <div className="shopping-cart-list">
            {props.items.map((item) => (
              <ShoppingCartListItem listItem={item} decreaseAmount={(i) => console.log(i)} deleteFromCart={(i) => console.log(i)} increaseAmount={(i) => console.log(i)} setAmount={(i) => console.log(i)} />
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
