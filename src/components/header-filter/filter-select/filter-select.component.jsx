import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';
import Select from '@mui/material/Select';
import './filter-select.styles.scss';

export default function BasicSelect({ name, caterories, title }) {
  const [age, setAge] = React.useState('');
  console.log(age);
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className="filter-sale-container">
      <h3 className="filter-sale-title">{title}</h3>
      <Box sx={{ minWidth: 120 }}>
        <FormControl className="filter-form">
          <InputLabel
            id="demo-simple-select-helper-label"
            className="demo-simple-select-helper-label"
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
              <MenuItem className="demo-simple-select-options" value={i * 10}>
                <CheckIcon className="demo-simple-select-icon"></CheckIcon>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
