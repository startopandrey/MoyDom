import React from 'react';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import './apartment-card.styles.scss';
import { Carousel } from 'react-responsive-carousel';
const ApartmentCard = ({
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
    <div className="apartment-card">
      <div className="apartment-carousel-container">
        <Carousel
          renderIndicator={() => false}
          renderThumbs={() => false}
          className="apartment-carousel"
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
            className="apartment-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>

          <div
            className="apartment-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>
          <div
            className="apartment-card-img"
            style={{ background: `url("${img}") no-repeat` }}
          ></div>
        </Carousel>
      </div>
      <div className="apartment-card-data">
        <div className="apartment-card-about">
          <h3 className="apartment-card-title">{title}</h3>
          <span className="apartment-card-time">{time}</span>
          <span className="apartment-card-address">{address}</span>
          <ul className="apartment-card-list">
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
        <div className="apartment-card-desc">
          <div>
            <h3>Описание</h3>
            <p className="apartment-card-desc-text">{text}</p>{' '}
          </div>
          <div className="apartment-card-price">
            <h2>{`${price} Сум`}</h2>
            <div className="apartment-card-price-buttons">
              {' '}
              <Button
                className="apartment-card-price-button"
                variant="contained"
              >
                {' '}
                <Link to={raute}> Подробнее</Link>
              </Button>
              <Button
                className="apartment-card-price-buttons-icon"
                color="primary"
                component="div"
                href="tel:+998333393334"
              >
                <CallIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApartmentCard;
