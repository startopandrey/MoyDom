import { Button } from '@mui/material';
import React, { useState } from 'react';

import './newbuild-details.styles.scss';
const NewBuildDetails = ({
  img,
  rooms,
  meters,
  metersForLive,
  title,
  kitchemMeters,
  time,
  info,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className="container newbuild-details">
      <div className="newbuild-details-title">
        <div className="newbuild-details-title-name">
          <h3>{`${rooms} комнатная квартира, ${meters} м² в Новостройка ${title}`}</h3>
          <span>{`Цены актуальны ${time}`}</span>
        </div>
        <Button
          className="newbuild-details-button"
          onClick={() => setActive(true)}
          variant="contained"
        >
          {active ? '+998 (33) 339 33 34' : ' Показать телефон'}
        </Button>
      </div>
      <div className="newbuild-details-space">
        <ul className="newbuild-details-space-list">
          <li>
            <h4>{`${meters} м²`}</h4>
            <h4>общая</h4>
          </li>
          <li>
            <h4>{`${metersForLive} м²`}</h4>
            <h4>жилая</h4>
          </li>
          <li>
            <h4>{`${kitchemMeters} м²`}</h4>
            <h4>кухня</h4>
          </li>
        </ul>
      </div>
      <div className="newbuild-details-package">
        <img className="newbuild-details-package-img" src={img} alt="" />
        <div className="newbuild-details-package-list-container">
          <ul className="newbuild-details-package-list">
            <li className="newbuild-details-package-item-title">
              <ul>
                <li>Дата сдачи</li>
                <li>Этаж</li>
                <li>Квадратура</li>
                <li>Отделка</li>
                <li>Цена</li>
              </ul>{' '}
            </li>
            {info.map(el => (
              <li className="newbuild-details-package-item">
                <ul>
                  <li className="date">
                    {' '}
                    <h4>
                      {el.date}
                    </h4> <span>{`Корпус ${el.dateFrame}`}</span>{' '}
                  </li>
                  <li>{el.floor}</li>
                  <li>{el.meters}</li>
                  <li>{el.package}</li>
                  <li>
                    <h4>{`${el.price} сум`}</h4>
                    <span>{`${el.priceForMeter} сум за м²`}</span>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NewBuildDetails;
