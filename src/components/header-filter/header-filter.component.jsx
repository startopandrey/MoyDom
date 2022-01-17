import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import './header-filter.styles.scss';
import FilterRent from './filter-rent/filter-rent.component';
import { blue } from '@mui/material/colors';
import FilterSale from './filter-sale/filter-sale.component';
import FilterBuild from './filter-newbuild/filter-newbuild.component';
const FILTERPROPS = [
  {
    buy: {
      type: ['Все', 'Квартиры', 'Дома', 'Нежилая недвижимость', 'Дачи'],
      price: true,
      region: [
        'Все',
        'Ташкент',
        'Ташкентская область',
        'Самарканд',
        'Бухара',
        'Андижан',
        'Навой',
        'Кашкадарья',
        'Навой',
        'Наманган',
        'Сырдарья',
        'Сурхандарья',
        'Ферган',
        'Хорезм',
        'Навоий',
        'Наманган',
        'Джизак',
      ],
    },
  },
];
const VariantButtonGroup = function () {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: 'black',
    background: 'rgba(255,255,255,0.7)',

    '&:hover': {
      backgroundColor: "#019cde",
      color: 'white',
    },
    '&.button-active': {
      backgroundColor: "#019cde",
      color: 'white',
    },
  }));
  const [active, setActive] = useState('2');

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
          <ColorButton
            onClick={() => setActive('1')}
            className={`filter-button ${active == '1' && 'button-active'}`}
            variant="contained"
          >
            Купить
          </ColorButton>

          <ColorButton
            onClick={() => setActive('2')}
            className={`filter-button ${active == '2' && 'button-active'}`}
          >
            Аренда
          </ColorButton>

          <ColorButton
            onClick={() => setActive('3')}
            className={`filter-button ${active == '3' && 'button-active'}`}
          >
            {console.log(active)}
            Новостройки
          </ColorButton>
        </ButtonGroup>
      </Box>
      <div className="filter-container">
        {active === '1' && (
          <FilterSale key={1}>
            {' '}
          </FilterSale>
          // <FilterRent key={1}> </FilterRent>
        )}
        {active === '2' && <FilterRent key={2}> </FilterRent>}
        {active === '3' && (
          <FilterBuild key={3}>
            {' '}
          </FilterBuild>
          // <FilterRent key={3}> </FilterRent>
        )}
      </div>
    </div>
  );
};

export default VariantButtonGroup;
