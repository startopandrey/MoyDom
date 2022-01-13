import { Avatar } from '@mui/material';
import React from 'react';

import './profile-account.styles.scss';
const ProfileAccount = ({ img, name, date, cards }) => (
  <div className="profile-account">
    <Avatar  className="profile-account-avatar" alt="Remy Sharp" src={img} />
    <div className="profile-account-data">
      <h2 className="profile-account-title">{`Личный кабинет ${name}`}</h2>
      <span className="profile-account-time">{`В Moydom с ${date}`}</span>
      <span className="profile-account-num">{`${cards} обьявлений`}</span>
    </div>
  </div>
);
export default ProfileAccount