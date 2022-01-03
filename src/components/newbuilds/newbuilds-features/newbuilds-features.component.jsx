import React from 'react';

import './newbuilds-features.styles.scss';
const NewbuildsFeatures = ({ icon, title, text, info = false }) => (
  <div className="newbuild-features">
    <img src={icon} alt="" />
    <div className="newbuild-features-data">
      <span className={`${info && 'newbuild-features-infrastructure'}`}>{title}</span>
      <h4>{text}</h4>
    </div>
  </div>
);
export default NewbuildsFeatures;
