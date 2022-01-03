import React from 'react';

import './newbuilds-description.styles.scss';
export const NewbuildDesription = ({ title, text }) => (
  <div>
    <h3 className="newbuild-feature-title">{title}</h3>
    <ul className="newbuild-feature-right-list">
      {text.map(text => (
        <li className="newbuild-feature-right-item">{text}</li>
      ))}
    </ul>
  </div>
);
