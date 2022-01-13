import React, { Component } from 'react';
import { MenuItems } from './nav-items';

import './nav.styles.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import SignImg from '../../assets/modal/sign.png';
import SignUpImg from '../../assets/modal/sign-up.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Facebook, LocalActivity } from '@mui/icons-material';
import { Container } from '@mui/material';
import { CardHeart } from '../card-heart/card-heart.component';
import ModalPopup from '../modal/modal.component';

class Navbar extends Component {
  state = {
    clicked: false,
    open: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar-items container">
          <div className="menu-icon" onClick={this.handleClick}>
            {this.state.clicked ? (
              <CloseIcon sx={{ color: '#fff' }}></CloseIcon>
            ) : (
              <DehazeIcon sx={{ color: '#fff' }}> </DehazeIcon>
            )}
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map(({ cName, url, title }, index) => {
              return (
                <li onClick={this.handleClick} key={index}>
                  <a href="">
                    <Link className={cName} to={url}>
                      {title}
                    </Link>
                  </a>
                </li>
              );
            })}
            <ul className="navbar-items-mobile">
              <li>
                <ul>
                  <li>Наши контакты</li>
                  <li>
                    <a href="tel:+998 33 339 3334">+998 33 339 3334</a>
                  </li>
                  <li>почта Mail.ru</li>
                </ul>
              </li>
              <li>
                <h4>Мы в соц.сетях</h4>
                <ul className="navbar-mobile-social">
                  <li>
                    <a href="">
                      <TelegramIcon></TelegramIcon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <InstagramIcon></InstagramIcon>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <Facebook></Facebook>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
          <div className="navbar-user">
            <div className="navbar-user-profile">  <Link to="map-filter">
                    <LocalActivity></LocalActivity>
                  </Link>
              {false ? (
                <>
                  {' '}
                
                  <Link to="/favorites">
                    <CardHeart num={10}></CardHeart>
                  </Link>
                  <h4 className="navbar-user-profile-text">Мой профиль</h4>
                  <AccountCircleOutlinedIcon
                    fontSize="medium"
                    className="navbar-user-profile-icon"
                  ></AccountCircleOutlinedIcon>
                </>
              ) : (
                <div className="modal">
                  <ModalPopup
                    img={{ registration: SignImg, sign: SignUpImg }}
                  ></ModalPopup>
                </div>
              )}

              <ul
                className={`${
                  this.state.clickedNav == true && 'nav-active'
                } navbar-user-profile-dropdown`}
              >
                <li className="navbar-user-profile-dropdown-item">
                  <Link to="profile">Личный кабинет</Link>
                </li>
                <li className="navbar-user-profile-dropdown-item">
                  <Link to="profile">Добавить объвление</Link>
                </li>
                <li className="navbar-user-profile-dropdown-item">
                  <Link to="profile">Настройки</Link>
                </li>
                <li className="navbar-user-profile-dropdown-item">
                  <Link to="/favorites">Избранное</Link>
                </li>
                <li className="navbar-user-profile-dropdown-item">
                  <Link to="profile">Выйти</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <Button>Sign up</Button> */}
        </nav>
      </div>
    );
  }
}
export default Navbar;
