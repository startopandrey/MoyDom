import React, { useState } from 'react';
import ProfileAccount from '../../components/profile/profile-account/profile-account.component';
import './profile.styles.scss';
import { Button, TextField } from '@mui/material';
import ProductImg from '../../assets/newbuildings.png';
import ProfileAvatarImg from '../../assets/account/Ellipse 101.png';
import ProductImg1 from '../../assets/build.png';
import 'react-phone-number-input/style.css';
import Input from 'react-phone-number-input/input';
import ProfileCard from '../../components/profile/profile-card/profile-card.component';
const RULES = {
  1: 'active',
  2: 'notActive',
  3: 'deactivated',
};
const Profile = () => {
  const [acitveButton, setActiveButton] = useState(true);
  const [acitveButtonStatus, setActiveButtonStatus] = useState(3);
  const [settingsButton, setSettingsButton] = useState(4);
  const [value, setValue] = useState();
  return (
    <div className="profile container">
      <div className="profile-container">
        <ProfileAccount
          name="Джамшид Укям"
          date="января 2022г"
          img={ProfileAvatarImg}
          cards="7"
        ></ProfileAccount>
        <div className="profile-buttons">
          <Button
            onClick={() => setActiveButton(true)}
            className={`profile-button ${acitveButton && 'active-button'}`}
            variant={`${acitveButton ? 'contained' : 'outlined'}`}
          >
            Объявления
          </Button>
          <Button
            onClick={() => setActiveButton(false)}
            className={`profile-button ${!acitveButton && 'active-button'}`}
            variant={`${!acitveButton ? 'contained' : 'outlined'}`}
          >
            Настройки
          </Button>
        </div>

        {acitveButton ? (
          <div>
            {' '}
            <div className="profile-statuses">
              <Button
                onClick={() => setActiveButtonStatus(1)}
                className={`profile-status-button ${
                  acitveButtonStatus === 1 && 'active-status-button'
                }`}
                variant="text"
              >
                Активные(3)
              </Button>
              <Button
                onClick={() => setActiveButtonStatus(2)}
                className={`profile-status-button ${
                  acitveButtonStatus === 2 && 'active-status-button'
                }`}
                variant="text"
              >
                Неактивные(4)
              </Button>
              <Button
                onClick={() => setActiveButtonStatus(3)}
                className={`profile-status-button ${
                  acitveButtonStatus === 3 && 'active-status-button'
                }`}
                variant="text"
              >
                Деактивированные(2)
              </Button>
            </div>
            <div className="profile-cards-container">
              {RULES[acitveButtonStatus] == 'active' && (
                <div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                      ]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                      ]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                      ]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[ProductImg, ProductImg, ProductImg, ProductImg]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                </div>
              )}
              {RULES[acitveButtonStatus] == 'notActive' && (
                <div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[ProductImg, ProductImg, ProductImg, ProductImg]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[ProductImg, ProductImg, ProductImg, ProductImg]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                </div>
              )}
              {RULES[acitveButtonStatus] == 'deactivated' && (
                <div>
                  <div className="profile-card-container">
                    <ProfileCard
                      imgs={[
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                        ProductImg1,
                      ]}
                      dateFrom="22 января"
                      dateTo="17 января"
                      rooms="3"
                      address="Ташкент, ул. Ашотика дом 17/2"
                      typeActive={`${RULES[acitveButtonStatus]}`}
                      key={1}
                    ></ProfileCard>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="profile-settings">
            <ul className="profile-settings-buttons">
              <li className="profile-settings-button-item">
                <Button
                  onClick={() => setSettingsButton(1)}
                  className={`profile-settings-button ${
                    settingsButton === 1 && 'active-settings-button'
                  }`}
                  variant={`${settingsButton === 1 ? 'contained' : 'outlined'}`}
                >
                  Изменить контактные данные
                </Button>
              </li>
              <li className="profile-settings-button-item">
                <Button
                  onClick={() => setSettingsButton(2)}
                  className={`profile-settings-button ${
                    settingsButton === 2 && 'active-settings-button'
                  }`}
                  variant={`${settingsButton === 2 ? 'contained' : 'outlined'}`}
                >
                  Изменить номер телефона
                </Button>
              </li>
              <li className="profile-settings-button-item">
                <Button
                  onClick={() => setSettingsButton(3)}
                  className={`profile-settings-button ${
                    settingsButton === 3 && 'active-settings-button'
                  }`}
                  variant={`${settingsButton === 3 ? 'contained' : 'outlined'}`}
                >
                  Фото профиля
                </Button>
              </li>
              <li className="profile-settings-button-item">
                <Button
                  onClick={() => setSettingsButton(4)}
                  className={`profile-settings-button ${
                    settingsButton === 4 && 'active-settings-button'
                  }`}
                  variant={`${settingsButton === 4 ? 'contained' : 'outlined'}`}
                >
                  Удалить учетную запись
                </Button>
              </li>{' '}
            </ul>
            <div className="profile-settings-data">
              {settingsButton === 1 && (
                <div className="profile-settings-contact-name">
                  <h3>Контактное лицо</h3>
                  <TextField
                    className="profile-settings-contact-textfield"
                    hiddenLabel
                    sx={{
                      fontFamily: 'Montserrat, hsans-serif',
                    }}
                    id="filled-hidden-label-normal"
                    defaultValue=""
                    variant="filled"
                  ></TextField>
                  <div className="profile-settings-button-container">
                    <Button
                      className="profile-settings-contact-button"
                      variant="outlined"
                    >
                      Сохранить
                    </Button>
                  </div>
                </div>
              )}
              {settingsButton === 2 && (
                <div className="profile-settings-change-tel">
                  <h3 className="profile-settings-change-tel-title">
                    Новый номер телефона
                  </h3>
                  <div className="profile-tel-input-container">
                    <Input
                      className="profile-tel-input"
                      placeholder="+998 __ ___ __ __"
                      value={value}
                      onChange={setValue}
                      defaultCountry="RU"
                    />
                  </div>
                  <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                      className="profile-settings-change-tel"
                      variant="outlined"
                    >
                      Сохранить
                    </Button>
                  </div>
                </div>
              )}
              {settingsButton === 3 && (
                <div className="profile-settings-photo">
                  <div className="profile-settings-photo-left">
                    <h3>Разместите ваше фото</h3>
                    <div className="profile-settings-photo-rec"></div>
                    <span>Рекомендованный размер лого 200x200px</span>
                  </div>
                  <div className="profile-settings-photo-text">
                    {' '}
                    <p>Ваше лого будет размещаться на странице объявления</p>
                  </div>
                </div>
              )}
              {settingsButton === 4 && (
                <div className="profile-delete">
                  <div className="profile-delete-button-container">
                    <Button
                      className="profile-delete-button"
                      variant="outlined"
                    >
                      Удалить мою учетную запись
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
