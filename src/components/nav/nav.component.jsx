import React, { Component } from 'react';
import { MenuItems } from './nav-items';
import Button from './nav-button/nav-button.component.jsx';
import './nav.styles.scss';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { Facebook } from '@mui/icons-material';
import { Container } from '@mui/material';
import { CardHeart } from '../card-heart/card-heart.component';
class Navbar extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
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
            <CardHeart num={10}></CardHeart>
            <div className="navbar-user-profile">
              <h4 className="navbar-user-profile-text">Моя профиль</h4>
              <AccountCircleOutlinedIcon
                fontSize="medium"
                className="navbar-user-profile-icon"
              ></AccountCircleOutlinedIcon>
            </div>
          </div>
          {/* <Button>Sign up</Button> */}
        </nav>
      </div>
    );
  }
}
export default Navbar;
