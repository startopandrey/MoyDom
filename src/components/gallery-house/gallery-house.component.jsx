import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tel from '../../assets/tel.png';
import './gallery-house.styles.scss';
import { Avatar, Button } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="gallery-house">
      <Carousel
        // { window.innerHeight < 1024 ? }

        renderArrowPrev={(onClickHandler, hasPrev = true, label = 'le') =>
          hasPrev && (
            <button
              className="arrow-left arrow"
              type="button"
              onClick={onClickHandler}
              title={label}
            >
              &#8249;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasPrev = true, label = 'le') =>
          hasPrev && (
            <button
              className="arrow-right arrow"
              type="button"
              onClick={onClickHandler}
              title={label}
            >
              &#8250;
            </button>
          )
        }
        infiniteLoop
      >
        {img.map(img => (
          <div className="image">
            <img className="gallery-house-img" src={img} alt="" />
          </div>
        ))}
      </Carousel>
      <div className="gallery-house-right">
        <div className="gallery-house-overlay">
          <h2>{`${rooms} комнатная квартира`}</h2>
          <div className="gallery-house-location-tel">
            <div className="gallery-house-location">
              {' '}
              <LocationOnIcon className="gallery-icon-loc"></LocationOnIcon>
              <div className="gallery-house-address">
                <span>{addressCity}</span>
                <span>{address}</span>
              </div>
            </div>

            <div onClick={() => setActive(true)} className="gallery-tel-mobile">
              <img src={Tel} alt="" />
              <h5> {active ? { tel } : 'Показать телефон'}</h5>
            </div>
          </div>
          <div className="gallery-house-button-cont">
            <Button className="gallery-house-button" variant="contained">
              {price}
            </Button>
          </div>
        </div>
        <div className="gallery-contact">
          <Avatar className="gallery-avatar" alt={avatar} src={avatar}></Avatar>
          <h3>{name}</h3>
          <p>{`На серевисе ${online}`}</p>
          <div onClick={() => setActive(true)} className="gallery-tel">
            <img src={Tel} alt="" />
            {active ? { tel } : 'Показать телефон'}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GalleryHouse;
