import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import './home-newbuildings.styles.scss';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from '@mui/material';
const HomeNewBuild = ({
  title,
  address,
  floors,
  date,
  rooms,
  url,
  price,
  img,
  logo,
  id,
}) => {
  return (
    <div className="home-newbuilding">
      <div
        className="home-newbuilding-img"
        style={{ background: `url('${img}') no-repeat` }}
      ></div>
      <div className="home-newbuilding-data">
        <div className="home-address">
          <div className="home-address-data">
            <h3 className="home-address-title mobile-hidden">{title}</h3>
            <h3 className="home-address-title">{`${rooms} комнатная квартира`}</h3>
            <span>
              <LocationOnIcon></LocationOnIcon>
              {address}
            </span>
          </div>
          <img className="logo-company mobile-hidden" src={logo} alt="" />
          <Checkbox
            className="home-address-heart"
            icon={<FavoriteBorder sx={{ color: '#1976d2' }} fontSize="large" />}
            checkedIcon={
              <Favorite fontSize="large" sx={{ color: '#e30000' }} />
            }
          ></Checkbox>
        </div>
        <div className="home-about mobile-hidden">
          <div className="home-about-items">
            <h4>Этажность дома</h4>
            <span>{floors}</span>
          </div>
          <div className="home-about-items">
            <h4>Год сдачи</h4>
            <span>{date}</span>
          </div>
          <div className="home-about-items">
            <h4>Комнаты</h4>
            <span>{rooms}</span>
          </div>
        </div>
        <div className="home-site">
          <div className="home-site-url mobile-hidden">
            <LanguageIcon></LanguageIcon>
            <a href={url}>{url}</a>
          </div>
          <div className="home-site-price mobile-add">
            {`$ ${price} `}
            <span>/ месяц</span>
          </div>
          <Button className="home-site-button" variant="contained">
            <Link to="/newbuild">Перейти</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default HomeNewBuild;
// const FILTERPROPS = [
//   {
//     buy: {
//       type: ['Все', 'Квартиры', 'Дома', 'Нежилая недвижимость', 'Дачи'],
//       price: true,
//       region: [
//         'Все',
//         'Ташкент',
//         'Ташкентская область',
//         'Самарканд',
//         'Бухара',
//         'Андижан',
//         'Навой',
//         'Кашкадарья',
//         'Навой',
//         'Наманган',
//         'Сырдарья',
//         'Сурхандарья',
//         'Ферган',
//         'Хорезм',
//         'Навоий',
//         'Наманган',
//         'Джизак',
//       ],
//     }
//   },
// ];
