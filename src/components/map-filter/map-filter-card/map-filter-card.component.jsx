import React from 'react';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import './map-filter-card.styles.scss';
import { Carousel } from 'react-responsive-carousel';
const MapFilterCard = ({
  title,
  time,
  address,
  classOf,
  raute,
  numDom,
  floors,
  text,
  price,
  img,
}) => {
  return (
    <div className="map-filter-card">
      <div className="map-filter-carousel-container">
        <Carousel
          renderIndicator={() => false}
          renderThumbs={() => false}
          className="map-filter-carousel"
          renderArrowNext={(onClickHandler, hasNext = true, label = 'le') =>
            hasNext && (
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
          renderArrowPrev={(onClickHandler, hasPrev = true, label = 'l') =>
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
        >
          <div
            className="map-filter-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>

          <div
            className="map-filter-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>
          <div
            className="map-filter-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>
        </Carousel>
      </div>
      <div className="map-filter-card-data">
        <div className="map-filter-card-about">
          <h3 className="map-filter-card-title">{title}</h3>
          <span className="map-filter-card-time">{time}</span>
          <span className="map-filter-card-address">{address}</span>
          <ul className="map-filter-card-list">
            <li>
              <h4>Класс</h4> <span>{classOf}</span>
            </li>
            <li>
              <h4>Домов в комплексе</h4> <span>{numDom}</span>
            </li>
            <li>
              <h4>Этажность дома</h4> <span>{floors}</span>
            </li>
          </ul>{' '}
        </div>
        <div className="map-filter-card-desc">
          <div>
            <h3>Описание</h3>
            <p className="map-filter-card-desc-text">{text}</p>{' '}
          </div>
          <div className="map-filter-card-price">
            <h2>{`${price} Сум`}</h2>
            <div className="map-filter-card-price-buttons">
              {' '}
              <Button
                className="map-filter-card-price-button"
                variant="contained"
              >
                {' '}
                <Link to={raute}> Подробнее</Link>
              </Button>
              <Button
                className="map-filter-card-price-buttons-icon"
                color="primary"
                component="div"
                href="tel:+998333393334"
              >
                <CallIcon className="map-filter-card-call" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapFilterCard;
