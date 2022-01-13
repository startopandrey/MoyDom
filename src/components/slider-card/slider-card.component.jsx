import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './slider-card.styles.scss';
const SliderCard = ({ imgs }) => (
  <Carousel
    renderIndicator={() => false}
    renderThumbs={() => false}
    className="slider-card-carousel"
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
    {imgs.map(img => (
      <div
        className="slider-card-img"
        style={{ background: `url("${img}") no-repeat` }}
      ></div>
    ))}
  </Carousel>
);
export default SliderCard
