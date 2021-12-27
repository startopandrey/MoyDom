import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './filter-select.styles.scss';
export default function BasicSelect({ name, caterories, title }) {
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className="filter-sale-container">
      <h3 className="filter-sale-title">{title}</h3>
      <Box sx={{ minWidth: 120 }}>
        <FormControl className="filter-form">
          <InputLabel
            // style={{
            //   position: 'absolute',
            //   top: '-0.3rem',
            //   color: 'wheat',
            // }}
            className="demo-simple-select-text"
            id="demo-simple-select-label"
          >
            {name}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            className="demo-simple-select-label"
            label="Age"
            onChange={handleChange}
          >
            {caterories.map((text, i) => (
              <MenuItem value={i * 10}>{text}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
