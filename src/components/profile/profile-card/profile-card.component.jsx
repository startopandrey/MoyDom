import { Checkbox } from '@mui/material';
import React, { useState } from 'react';
import SliderCard from '../../slider-card/slider-card.component';

import ProductImg from '../../../assets/newbuildings.png';
import './profile-card.styles.scss';
import { Link } from 'react-router-dom';
import ModalPopup from '../../modal/modal-profile/modal-profile.component';
const CATEGORIES = {
  active: ['Просмотреть', 'Редактировать', 'Деактивировать'],
  notActive: ['Опубликовать', 'Редактировать', 'Удалить'],
  deactivated: ['Повторно опубликовать', 'Редактировать', 'Удалить'],
};
console.log(CATEGORIES.active);
const ProfileCard = ({
  imgs,
  dateFrom,
  dateTo,
  rooms,
  address,
  typeActive,
}) => {
  const category = typeActive;
  const [modal, setModal] = useState(false);
  return (
    <div className="profile-card">
      <div className="profile-card-checkbox-slider">
        <div className="profile-card-checkbox-container">
          <Checkbox
            className="profile-card-checkbox"
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <SliderCard className="profile-card-slider" imgs={imgs}></SliderCard>
      </div>
      <div className="profile-card-data">
        <h3 className="profile-card-title">{`Квартира ${rooms}-х комнатная Катартал`}</h3>
        <span className="profile-card-date">{`C ${dateFrom} - по ${dateTo}`}</span>
        <span className="profile-card-address">{address}</span>
        {typeActive == 'deactivated' && (
          <p className="profile-card-error">
            Вы нарушили правила сообщества MoyDom, нажмите подробнее чтобы
            узнать причины.
          </p>
        )}
      </div>
      <div className="profile-card-categories">
        {typeActive == 'deactivated' && (
          <div className="profile-card-categories-error">
          
            <ModalPopup></ModalPopup>
          </div>
        )}
        <div className="profile-card-categories-data">
          {CATEGORIES[`${category}`].map(el => (
            <h3>
              {' '}
              <Link to="/build"> {el}</Link>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
