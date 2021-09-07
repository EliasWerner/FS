import * as React from 'react';
import './horizontalMenu.css';
import { NavLink } from 'react-router-dom';

export const HorizontalMenu = () => {
  return (
    <div className="horizontal-menu">
      <NavLink to="/about-us">Товары и услуги</NavLink>
      <NavLink to="/about-us">Спальня</NavLink>
      <NavLink to="/about-us">Детская</NavLink>
      <NavLink to="/about-us">Гостиная</NavLink>
      <NavLink to="/about-us">Кухня</NavLink>
      <NavLink to="/about-us">Ванная</NavLink>
    </div>
  );
};
