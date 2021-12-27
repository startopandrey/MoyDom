import React from 'react';
import './home-categories-card.styles.scss';
export default ({ img, text }) => (
  <div className="home-categories-card">
    <div
      className="home-categories-card-img"
      style={{ background: `url('${img}') no-repeat ` }}
    ></div>
    <h2 className="home-categories-card-text">{text}</h2>
  </div>
);
