import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './post-select.styles.scss';
const PostSelect = ({ title, items }) => {
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="post-select">
      <h3 className="post-select-title">{title}</h3>
      <FormControl className="post-select-form" sx={{ minWidth: 90 }}>
        <Select
          className="post-select-select"
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">0</MenuItem>
          {items.map((el, i) => (
            <MenuItem value={i * 10}>{el}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default PostSelect;
