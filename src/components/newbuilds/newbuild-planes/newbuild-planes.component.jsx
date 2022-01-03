import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './newbuild-planes.styles.scss';
const NewbuildPlane = ({
  img,
  rooms,
  meters,
  kitchemMeters,
  floors,
  date,
  price,
  priceForMeter,
  raute,
}) => {
  return (
    <div className="newbuild-plane">
      <img className="newbuild-plane-img" src={img} alt="" />
      <div className="newbuild-plane-data">
        <h3 className="newbuild-plane-title">{`${rooms} комнаты, ${meters}м²`}</h3>
        <ul className="newbuild-plane-list">
          <li>
            <span>Кухня</span> <h3>{`${kitchemMeters}м²`}</h3>
          </li>
          <li>
            <span>Этажи</span> <h3>{floors}</h3>
          </li>
          <li>
            <span>Срок сдачи</span> <h3>{date}</h3>
          </li>
        </ul>
        <div className="newbuild-plane-price">
          <h3>{`${price} Сум`}</h3>
          <span>{`${priceForMeter} Сум за м²`}</span>
        </div>
        <Button className="newbuild-plane-button" variant="contained">
          <Link to={raute}>Посмотреть квартиру</Link>
        </Button>
      </div>
    </div>
  );
};
export default NewbuildPlane;
