import * as React from 'react';
import './header.css';
// import Logo from '../../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Search } from './search/search';
import { ShoppingCartIcon } from './shoppingCartIcon/shoppingCartIcon';

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="logo" to="/">
        Logo
        {
          // <img src={Logo} alt="Mebel-online" />
        }
      </NavLink>
      <div className="search">
        <Search />
      </div>
      <ShoppingCartIcon itemsAmount={0} />
    </div>
  );
};
