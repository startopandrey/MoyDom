import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import './checkbox.styles.scss'
import { Select } from '@mui/material';
const Checkbox = ({title, items, custom}) =>{
    const [age, setAge] = React.useState('');

    const handleChange = event => {
      setAge(event.target.value);
    };
    return (
      <div>
        <FormControl
          className={`checkbox-filter ${custom && 'checkbox-filter-cutstom'}`}
          fullWidth
        >
          <InputLabel
            className="checkbox-filter-input"
            style={{ color: '#A9A9A9' }}
            placeholder="asffsfsf"
            id="demo-simple-select-helper-label"
          >
            {title}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            {items.map((el, i) => (
              <MenuItem value={i * 10}>{el}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
}
export default Checkbox