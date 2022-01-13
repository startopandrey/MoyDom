import { Button } from '@mui/material';
import HomeNewImg from '../../assets/newbuildings.png';
import React, { useState } from 'react';
import FavoriteImg from '../../assets/services.png';
import ApartmentCard from '../apartment/apartment-card/apartment-card.component';
import './favorites.styles.scss';
const Favorites = () => {
  const [activeButton, setActiveButton] = useState(true);
  return (
    <div className="favorites container">
      <div className="favorites-container">
        <h3 className="favorites-title">Избранные</h3>
        <div className="favorites-buttons">
          <Button
            className={`favorites-button  ${
              activeButton && 'favorites-button-active'
            } `}
            onClick={() => setActiveButton(true)}
            variant="outlined"
          >
            Недвижимость
          </Button>
          <Button
            onClick={() => setActiveButton(false)}
            className={`favorites-button  ${
              !activeButton && 'favorites-button-active'
            } `}
            variant="outlined"
          >
            Новостройки
          </Button>
        </div>{' '}
        <div className="favorites-data">
          {activeButton && (
            <div className="favorites-data-select">
              <img
                className="favorites-no-select-img"
                src={FavoriteImg}
                alt=""
              />
              <h2>Избранное</h2>
              <p>
                Добавьте понравившиеся объявления в избранное, чтобы просмотреть
                их позже
              </p>
            </div>
          )}
          {!activeButton && (
            <div className="favorites-data-">
              <ApartmentCard
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
              ></ApartmentCard>
              <ApartmentCard
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
              ></ApartmentCard>
              <ApartmentCard
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
              ></ApartmentCard>
              <ApartmentCard
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
              ></ApartmentCard>
              <ApartmentCard
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
              ></ApartmentCard>
              <ApartmentCard
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
              ></ApartmentCard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Favorites;
