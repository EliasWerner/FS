import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './search.css';

export const Search = () => {
  return (
    <div className="search-form">
      <input type="text" placeholder="Поиск..."></input>
      <button className="search-button"><FontAwesomeIcon icon={['fas', 'search']} /></button>
    </div>
  );
};
