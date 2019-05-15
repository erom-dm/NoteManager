import React from 'react';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__display-modes" />
    <div className="header__title">Note Manager</div>
    <div className="header__btn-container">
      <button className="header__add-new-btn" type="button">Add New</button>
    </div>
  </div>
);

export default Header;
