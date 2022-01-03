import './filter-checkbox.styles.scss';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export default function MultipleSelectCheckmarks({ categories, title }) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div className="filter-checkbox-container">
      <h3 className="filter-sale-title">{title}</h3>
      <FormControl className="filter-form" sx={{ width: '100%' }}>
        <InputLabel
          className="demo-simple-select-text"
          id="demo-multiple-checkbox-label"
        ></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          className="demo-simple-select-label demo-simple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {categories.map(name => (
            <MenuItem
              className="demo-simple-select-item"
              key={name}
              value={name}
            >
             
                <Checkbox
                  size="small"
                  className="demo-simple-select-checkbox"
                  checked={personName.indexOf(name) > -1}
                />
                <ListItemText
                  className="demo-simple-select-text"
                  primary={name}
                />
            
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
