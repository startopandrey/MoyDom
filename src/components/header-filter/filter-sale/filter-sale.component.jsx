import React from 'react';
import './filter-sale.styles.scss';
import Button from '@mui/material/Button';
import MultipleSelect from '../filter-select/filter-select.component';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.copmonent';
import FilterPrice from '../filter-price/filter-price.component';
const FilterSale = ({ key, title, region = true, name, rooms, typehouse }) => {
  return (
    <div key={key} className="filter-sale">
      <div className="filter-sale-select">
        <div className="filter-sale-item">
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
        </div>

        {typehouse ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              title="Вид дома"
              categories={[
                'Любой',
                'Готовый',
                'Дома',
                'Без ремонта',
                'Не достроенный',
              ]}
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
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
            title="Дата сдачи проекта"
          ></FilterCheckbox>
        </div>
        <div className="filter-sale-item">
          <FilterPrice></FilterPrice>
        </div>
        {region ? (
          <div className="filter-sale-item">
            <MultipleSelect
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
        ) : (
          ''
        )}
        {rooms ? (
          <div className="filter-sale-item">
            <FilterCheckbox
              categories={['1', '2', '3', '4+']}
              title="Комнаты"
            ></FilterCheckbox>
          </div>
        ) : (
          ''
        )}
      </div>
      <Button className="filter-search" variant="contained">
        Поиск
      </Button>
    </div>
  );
};
export default FilterSale;
