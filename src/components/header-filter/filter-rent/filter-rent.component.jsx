import React, { useState } from 'react';
import './filter-rent.styles.scss';
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
const FilterRent = ({ key, title, region = true, name, rooms, typehouse }) => {
  const [current, setCurrent] = useState(0);
  const [room, setRoom] = useState(false);
  const [typeHouse, setTypeHouse] = useState(false);
  const [typeApartment, setTypeApartment] = useState(false);
  const [square, setSquare] = useState(false);
  const [location, setLocation] = useState(false);
  const BasicSelect = function BasicSelect({
    name,
    caterories = ['Все', 'Квартиры', 'Дома', 'Нежилая недвижимость', 'Дачи'],
    title = 'Тип недвижимости',
  }) {
    console.log(current);
    const handleChange = event => {
      setCurrent(event.target.value);
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
              value={current}
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
  };
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
        <div className="filter-sale-item">{<BasicSelect></BasicSelect>}</div>

        {current == 10 ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              categories={['1', '2', '3', '4+']}
              name="Количество"
              title="Комнаты"
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
        {current == 10 || current == 20 || current == 40 ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              categories={['Месячно', 'Посуточно', 'Все']}
              name="Все"
              title="Приод сдачи"
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
        {current == 20 ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              categories={['Любой', 'Готовый', 'Без ремонта', 'Не достроенный']}
              name="Любой"
              title="Вид дома"
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
        {current == 30 ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              categories={[
                'Офис',
                'Торг. помещение',
                'Под склад',
                'Производств. пом.',
                'Готовый бизнес',
                'Земельный участок',
                'Другое',
                'Любое помещение',
              ]}
              name="Офис"
              title="Вид помещения"
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
        {current == 20 || current == 30 ? (
          <div className="filter-sale-item">
            <FilterPrice title="Площадь"></FilterPrice>
          </div>
        ) : (
          ''
        )}
        <div className="filter-sale-item">
          <FilterPrice title="Цена"></FilterPrice>
        </div>

        <div className="filter-sale-item">
          <MultipleSelect
            title="Регион"
            name="Ташкент"
            caterories={[
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
            ]}
          ></MultipleSelect>
        </div>
      </div>
      <Button className="filter-search" variant="contained">
        Поиск
      </Button>
    </div>
  );
};
export default FilterRent;
