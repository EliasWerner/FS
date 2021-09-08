import * as React from "react";
import "./horizontalMenu.css";
import { NavLink } from "react-router-dom";

export const HorizontalMenu = () => {
  return (
    <ul className="horizontal-menu">
      <li>
        <NavLink className="hov" to="/about-us">
          Товары и услуги
        </NavLink>
        <ul className="hide">
          <li>
            <NavLink to="/about-us">Мебель для гостиной</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Мебель для спальни</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Мебель для прихожей</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Десткая и подростковая мебель</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Кабинеты</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              Шкафы, витрины, стеллажи, библиотеки
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              Кухонные уголки ,столы, тубуреты и стулья
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              Мебель для ванной, туалета. Сантехника
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              Столы компьютерный, письменные, журнальные
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Комоды и тумбы</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Мягкая мебель, подвесные кресла</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Полки</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Зеркала настенные</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">Кухни</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/about-us">Спальня</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">Детская</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">Гостиная</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">Кухня</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">Ванная</NavLink>
      </li>
    </ul>
  );
};
