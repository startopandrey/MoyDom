import React from 'react';
import HeaderBg from '../../assets/home-bg.png';
import VariantButtonGroup from '../header-filter/header-filter.component';
import './header.styles.scss';
const Header = () => (
  <div>
    <div className="header">
      {' '}
      <div
        className="header-img"
        style={{ backgroundImage: `url('${HeaderBg}')` }}
      ></div>
      {/* <img  src={HeaderBg} alt="" /> */}
      <div className="container header-container">
        <h1 className="header-title">Поиск недвижимости</h1>
        <VariantButtonGroup></VariantButtonGroup>
      </div>
    </div>
  </div>
);
export default Header;
