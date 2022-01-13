import React, { useState } from 'react';
import './filter-newbuild.styles.scss';
import Button from '@mui/material/Button';
import MultipleSelect from '../filter-select/filter-select.component';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.copmonent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';
import Select from '@mui/material/Select';
import '../filter-select/filter-select.styles.scss';

import FilterPrice from '../filter-price/filter-price.component';
const FilterBuild = ({
  key,
  title,
  name,
  rooms,
  typehouse,
}) => {
  const [current, setCurrent] = useState(0);
  const [room, setRoom] = useState(false);
  const [typeHouse, setTypeHouse] = useState(false);
  const [typeApartment, setTypeApartment] = useState(false);
  const [square, setSquare] = useState(false);
  const [location, setLocation] = useState(false);
  
  return (
    <div key={key} className="filter-sale">
      <div className="filter-sale-select">
        {/* <div className="filter-sale-item">
          <MultipleSelect
            title="Тип недвижимости"
            caterories={[
              'Все',
              'Квартиры',
              'Дома',
              'Нежилая недвижимость',
              'Дачи',
            ]}
          ></MultipleSelect>
        </div> */}

        <div className="filter-sale-item">
          <FilterCheckbox
            categories={[
              '1 квартал 2022',
              '2 квартал 2022',
              '3 квартал 2022',
              '4 квартал 2022',
              '2023 год и позже',
              'Сдан',
              'Весь период',
            ]}
            name="Весь период"
            title="Дата сдачи проекта"
          ></FilterCheckbox>
        </div>
        <div className="filter-sale-item">
          <FilterCheckbox
            categories={['1', '2', '3', '4+']}
            name="Количество"
            title="Комнаты"
          ></FilterCheckbox>
        </div>

        <div className="filter-sale-item">
          <FilterPrice title="Цена"></FilterPrice>
        </div>
      </div>
      <Button className="filter-search" variant="contained">
        Поиск
      </Button>
    </div>
  );
};
export default FilterBuild;
