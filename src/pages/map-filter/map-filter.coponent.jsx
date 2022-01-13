import { Box, Button, ButtonGroup, Input } from '@mui/material';
import React, { useState } from 'react';
import HomeNewImg from '../../assets/newbuildings.png';
import MapFilterCard from '../../components/map-filter/map-filter-card/map-filter-card.component';
import Flat from '../../assets/map-filter/flat.svg';
import House from '../../assets/map-filter/house.svg';
import Buildings from '../../assets/map-filter/buildings.svg';
import Dach from '../../assets/map-filter/dach.svg';
import Office from '../../assets/map-filter/office-building.svg';
import './map-filter.styles.scss';
const MapFilter = () => {
  const [activeFilter, setActiveFilter] = useState(true);
  const [activeFilterProps, setActiveFilterProps] = useState(true);
  const [activeCards, setActiveCards] = useState(false);
  const [activeButtonFilter, setActiveButtonFilter] = useState(true);
  const [activeButtonCurr, setActiveButtonCurr] = useState(true);
  const ariaLabel = { 'aria-label': 'description' };
  return (
    <div className="map-filter">
      <div className="map-filter-header">
        <Button
          onClick={() => {
            setActiveFilter(!activeFilter);
            setActiveFilterProps(true);
            setActiveCards(false);
          }}
          variant="contained"
          className="map-filter-header-button"
        >
          Фильтры
        </Button>
      </div>

      <div className="iframe-map">
        <div className="overlay">
          <div className="filter">
            {activeFilterProps && (
              <div>
                {' '}
                <div className="map-filter-buttons-catagories">
                  <div className="map-filter-button active">
                    <img src={Flat} alt="" />
                    Все обьявления
                  </div>
                  <div className="map-filter-button">
                    <img src={Flat} alt="" />
                    Квартиры
                  </div>
                  <div className="map-filter-button">
                    <img src={House} alt="" />
                    Дома
                  </div>
                  <div className="map-filter-button">
                    <img src={Office} alt="" />
                    Нежилая недвижимость
                  </div>
                  <div className="map-filter-button">
                    <img src={Dach} alt="" />
                    Дачи
                  </div>
                  <div className="map-filter-button">
                    <img src={Buildings} alt="" />
                    Новостройки
                  </div>
                </div>
                <div className="filter-container">
                  <div className="filter-container-buttons">
                    <Button
                      className={`${
                        activeButtonFilter && 'active'
                      } filter-button`}
                      variant={`${
                        activeButtonFilter ? 'contained' : 'outlined'
                      }`}
                      onClick={() => setActiveButtonFilter(true)}
                    >
                      Купить
                    </Button>
                    <Button
                      onClick={() => setActiveButtonFilter(false)}
                      className={`${
                        !activeButtonFilter && 'active'
                      } filter-button`}
                      variant={`${
                        !activeButtonFilter ? 'contained' : 'outlined'
                      }`}
                    >
                      Аренда
                    </Button>
                  </div>
                  <div className="filter-price">
                    <h3 className="filter-price-title">Цена</h3>
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
                    </Box>
                    <ButtonGroup className="filter-currency-buttons">
                      <Button
                        className={`${
                          activeButtonCurr && 'active'
                        } filter-currency-button `}
                        variant={`${
                          activeButtonCurr ? 'contained' : 'outlined'
                        }`}
                        onClick={() => setActiveButtonCurr(true)}
                      >
                        СУМ
                      </Button>
                      <Button
                        className={`${
                          !activeButtonCurr && 'active'
                        } filter-currency-button`}
                        variant={`${
                          !activeButtonCurr ? 'contained' : 'outlined'
                        }`}
                        onClick={() => setActiveButtonCurr(false)}
                      >
                        USD
                      </Button>
                    </ButtonGroup>
                  </div>
                  <div className="filter-search">
                    <div className="filter-search-container">
                      <Button
                        className="filter-search-button"
                        variant="contained"
                      >
                        Показать на карте
                      </Button>
                      <Button
                        onClick={() => {
                          setActiveCards(true);
                          setActiveFilterProps(false);
                        }}
                        className="filter-search-button"
                        variant="contained"
                      >
                        Поиск
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {activeCards && (
            <div>
              <div className="map-filter-card-container">
                <MapFilterCard
                  className="card"
                  raute="newbuild"
                  title="Новостройка Parus"
                  time="11 мая 10:00"
                  address="Ташкент, улица Беруни, 3"
                  classOf="Комфорт"
                  numDom="1"
                  floors="25"
                  text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
                  price="170.000.000"
                  img={HomeNewImg}
                ></MapFilterCard>
              </div>
              <div className="map-filter-card-container">
                <MapFilterCard
                  className="card"
                  raute="newbuild"
                  title="Новостройка Parus"
                  time="11 мая 10:00"
                  address="Ташкент, улица Беруни, 3"
                  classOf="Комфорт"
                  numDom="1"
                  floors="25"
                  text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
                  price="170.000.000"
                  img={HomeNewImg}
                ></MapFilterCard>
              </div>
            </div>
          )}
        </div>
        <iframe
          class="map_iframe"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?&amp;height=100%&amp;hl=en&amp;q=ukraine vinnissa&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};
export default MapFilter;
