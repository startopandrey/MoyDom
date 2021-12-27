import React from 'react';
import './filter-sale.styles.scss';
import Button from '@mui/material/Button';
import MultipleSelect from '../filter-select/filter-select.component';
const FilterSale = () => {
  return (
    
    <div className="filter-sale">
      <div className="filter-sale-select">
        <div className="filter-sale-item">
          <MultipleSelect
            name="Тип"
            title="Тип недвижимости"
            caterories={[
              'Все',
              'Квартиры',
              'Дома',
              'Нежилая недвижимость',
              'Дачи',
            ]}
          ></MultipleSelect>
        </div>
        <div className="filter-sale-item">
          <MultipleSelect
            name="Тип"
            title="Цена"
            caterories={[
              'Все',
              'Квартиры',
              'Дома',
              'Нежилая недвижимость',
              'Дачи',
            ]}
          ></MultipleSelect>
        </div>
        <div className="filter-sale-item">
          <MultipleSelect
            name="Тип"
            title="Регион"
            caterories={[
              'Все',
              'Квартиры',
              'Дома',
              'Нежилая недвижимость',
              'Дачи',
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
export default FilterSale;
