import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './header-filter.styles.scss';

import { blue } from '@mui/material/colors';
import FilterSale from './filter-sale/filter-sale.component';

export default function VariantButtonGroup() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    background: 'rgba(255,255,255,0.7)',

    '&:hover': {
      backgroundColor: blue[700],
      color: 'white',
    },
    '&.button-active': {
      backgroundColor: blue[700],
      color: 'white',
    },
  }));

  return (
    <div className="header-filter">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          className="filter-buttons"
          variant="outlined"
          aria-label="outlined button group"
        >
          <ColorButton className="filter-button" variant="contained">
            Купить
          </ColorButton>
          <ColorButton className="filter-button" className="button-active">
            Продать
          </ColorButton>
          <ColorButton className="filter-button">Новостройки</ColorButton>
        </ButtonGroup>
      </Box>
      <div className='filter-container'>
        <FilterSale></FilterSale>
      </div>
    </div>
  );
}
