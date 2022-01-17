import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './post-warning.styles.scss';
const PostWarning = ({ icon, text }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="post-warning">
      <div className="post-warning-left">
        <img src={icon} alt="" />
        {text}
      </div>
      <div className="post-warning-right">
        <div
          onClick={() => setActive(1)}
          className={`post-warning-right-icon ${active === 1 && 'active'}`}
        >
          <CheckIcon className="icon icon-left"></CheckIcon>
        </div>
        <div
          onClick={() => setActive(2)}
          className={`post-warning-right-icon ${active === 2 && 'active-right'}`}
        >
          <ClearIcon className="icon icon-right"></ClearIcon>
        </div>
      </div>
    </div>
  );
};
export default PostWarning;
