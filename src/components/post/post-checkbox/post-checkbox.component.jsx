import React, { useState } from 'react';
import './post-checkbox.styles.scss';
const PostCheckBox = ({ title, elements, custom, icons = false }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="post-checkbox">
      <h4 className="post-checkbox-title">{title}</h4>
      <ul className="post-checkbox-items">
        {elements.map((el, i) => (
          <li
            className={`post-checkbox-item ${active === i + 1 && 'active'} ${
              custom && 'active-address'
            }`}
            onClick={() => setActive(i + 1)}
          >
            {icons && <img src={icons[i]} alt="" />}
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostCheckBox;
