import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tel from '../../assets/tel.png';
import './gallery-house.styles.scss';
import { Avatar, Button } from '@mui/material';
const GalleryHouse = ({
  img,
  rooms,
  address,
  addressCity,
  tel,
  online,
  price,
  avatar,
  name,
}) => (
  <div className="gallery-house">
    <img className="gallery-house-img" src={img} alt="" />
    <div className="gallery-house-right">
      <div className="gallery-house-overlay">
        <h2>{`${rooms} комнатная квартира`}</h2>
        <div className="gallery-house-location">
          {' '}
          <LocationOnIcon className="gallery-icon-loc"></LocationOnIcon>
          <div className="gallery-house-address">
            <span>{addressCity}</span>
            <span>{address}</span>
          </div>
        </div>
        <div className="gallery-house-button-cont">
          <Button className="gallery-house-button" variant="contained">
            {price}
          </Button>
        </div>
      </div>
      <div className="gallery-contact">
        <Avatar className="gallery-avatar" alt="Avatar" src={avatar}></Avatar>
        <h3>{name}</h3>
        <p>{`На серевисе ${online}`}</p>
        <div className="gallery-tel">
          <img src={Tel} alt="" /> Показать телефон
        </div>
      </div>
    </div>
  </div>
);
export default GalleryHouse;
