import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Facebook } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './footer.styles.scss';
const Footer = () => (
  <div className="footer">
    <div className="footer-container container">
      <div className="footer-nav">
        <h3 className="footer-title">Навигация по сайту</h3>
        <div className="footer-nav-pages">
          <ul>
            <li>О нас</li>
            <li>Пользование сайтом</li>
            <li>Личнный кабинет</li>
            <li>Регистрация</li>
          </ul>
          <ul>
            <li>Аренда</li>
            <li>Продажа</li>
            <li>Новостройки</li>
            <li>Блог</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <h3 className="footer-title">Мы в соц.сетях</h3>
        <ul>
          <li>
            <a href="">
              <TelegramIcon></TelegramIcon>
            </a>
          </li>
          <li>
            <a href="">
              <Facebook></Facebook>
            </a>
          </li>
          <li>
            <a href="">
              <InstagramIcon></InstagramIcon>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3 className="footer-title">Контактная информция</h3>
        <div className="footer-contact-address">
          <LocationOnIcon></LocationOnIcon>
          <div className="footer-contact-tel">
            <p>
              г.Ташкент Мирзо-Улугбекский район, Салар буйи, 7 Старт,
              бизнес-центр
            </p>
            <a href="tel:+998333393334">+998 (33) 339 33 34</a>
          </div>
        </div>
      </div>
    </div>
    <div className='corporation'>2021 Corporation</div>
  </div>
);
export default Footer;
