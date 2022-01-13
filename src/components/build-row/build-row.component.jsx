import React from 'react';
import './build-row.styles.scss';
const BuildRow = ({ icon, title, text }) => (
  <div className="build-row">
    <img className="build-row-icon" src={icon} alt="" />
    <div className="build-row-data">
      <h3>{title}</h3>
      <div className="build-row-dotted"></div>
      <h3 className="build-row-type">{text}</h3>
    </div>
  </div>
);
export default BuildRow;
