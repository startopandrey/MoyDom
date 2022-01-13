import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import './filter-price.styles.scss';
const ariaLabel = { 'aria-label': 'description' };
const FilterPrice = ({ title }) => (
  <div className="filter-price">
    <h3 className="filter-price-title">{title}</h3>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      className="filter-price-container"
      autoComplete="off"
    >
      <Input
        className="filter-price-input"
        style={{ border: 'none' }}
        placeholder="От    __"
        inputProps={ariaLabel}
      />

      <Input
        className="filter-price-input"
        placeholder="До    __"
        inputProps={ariaLabel}
      />
      {title != 'Цена' ? <span className='subtitle'>м2/соток</span> : ''}
    </Box>
  </div>
);
export default FilterPrice;
