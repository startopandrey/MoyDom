import React from 'react';
import './home.styles.scss';
import Logo from '../../assets/logo.png';
import { Button } from '@mui/material';
import HomeCategoriesCardComponent from '../../components/home-components/home-categories-card/home-categories-card.component';
import HomeCategories1 from '../../assets/home-categories1.png';
import HomeCategories2 from '../../assets/home-categories2.png';
import HomeCategories3 from '../../assets/home-categories3.png';
import HomeCategories4 from '../../assets/home-categories4.png';
import HomeMarketing from '../../assets/marketing-mobile.png';
import HomeSearch from '../../assets/home-search.png';
import HomeMap from '../../assets/home-map.png';
import HomeGeo from '../../assets/home-geo.png';
import HomeFile from '../../assets/home-file.png';
import HomeNewImg from '../../assets/newbuildings.png';
import HomeNewFullImg from '../../assets/novostrojki-aricle.png';
import HomeArticleFlat from '../../assets/novostrojki.png';
import HomeArticleIconHouse from '../../assets/home-house.png';
import HomeArticleIconTs from '../../assets/home-ts.png';
import HomeArticleIconAuto from '../../assets/home-auto.png';
import HomeNewBuild from '../../components/home-components/home-newbuildings/home-newbuildings.component';

import { Link } from 'react-router-dom';
const CARDS = [
  {
    img: HomeCategories1,
    text: 'Квартиры',
  },
  {
    img: HomeCategories2,
    text: 'Дома',
  },
  {
    img: HomeCategories3,
    text: 'Нежилая недвижимость',
  },
  {
    img: HomeCategories4,
    text: 'Дачи',
  },
];
const HOMENEWBUILD = [
  {
    title: 'ЖК Sky Builds',
    address: 'ул Карасув №35',
    floors: '12',
    date: '2 кв. 2022',
    rooms: '4',
    url: 'skybuilds.uz',
    logo: Logo,
    id: 1,
    price: '450',
    img: HomeNewImg,
  },
  {
    title: 'ЖК Sky Builds',
    address: 'ул Карасув №35',
    floors: '12',
    date: '2 кв. 2022',
    rooms: '4',
    url: 'skybuilds.uz',
    logo: Logo,
    id: 1,
    price: '450',
    img: HomeNewImg,
  },
  {
    title: 'ЖК Sky Builds',
    address: 'ул Карасув №35',
    floors: '12',
    date: '2 кв. 2022',
    rooms: '4',
    url: 'skybuilds.uz',
    logo: Logo,
    id: 1,
    price: '450',
    img: HomeNewImg,
  },
];
const Home = () => (
  <div key={1} className="home">
    <div></div>
    <div className="home-categories container">
      {CARDS.map(card => (
        <HomeCategoriesCardComponent
          img={card.img}
          text={card.text}
        ></HomeCategoriesCardComponent>
      ))}
    </div>
    <div className="home-newbuild container">
      <h1 className="home-title">Новостройки</h1>
      <div className="home-newbuild-cards ">
        {HOMENEWBUILD.map(card => (
          <HomeNewBuild
            title={card.title}
            address={card.address}
            floors={card.floors}
            date={card.date}
            rooms={card.rooms}
            url={card.url}
            logo={card.logo}
            id={card.id}
            price={card.price}
            img={card.img}
          ></HomeNewBuild>
        ))}
      </div>{' '}
    </div>
    <div className="home-benefit ">
      <h1 className="home-title container home-benefit-title">
        Наши преимущества
      </h1>
      <div className="home-benefit-container">
        <div className="home-benefit-data">
          <img className="home-benefit-img" src={HomeMarketing} alt="" />
          <div className="home-benefit-items">
            <div className="home-benefit-item">
              <img src={HomeSearch} alt="" />
              <div className="home-benefit-text">
                {' '}
                <h3>Удобный поиск</h3>{' '}
                <p>
                  {' '}
                  Мы постарались сделать поиск с фильтрами максимально удобными
                  чтобы каждый человек смог легко и быстро найти ту
                  недвижимость, которую он ищет{' '}
                </p>
              </div>
            </div>
            <div className="home-benefit-item">
              <img src={HomeFile} alt="" />
              <div className="home-benefit-text">
                {' '}
                <h3>Подробности о недвижимости</h3>{' '}
                <p>
                  {' '}
                  Мы постарались уместить много деталей о каждом объекте
                  недвижимости для того чтобы вы могли получить хорошее
                  впечатление о недвижимости которую ищите.{' '}
                </p>
              </div>
            </div>
            <div className="home-benefit-item">
              <img src={HomeMap} alt="" />
              <div className="home-benefit-text">
                {' '}
                <h3>Карта с отметками</h3>{' '}
                <p>
                  {' '}
                  На карте указаны все объекты жилой, нежилой недвижимости а
                  также новостройки для того чтобы ориентируясь по местности
                  найти именно в том месте недвижимость, где вы ищите{' '}
                </p>
              </div>
            </div>
            <div className="home-benefit-item">
              <img src={HomeGeo} alt="" />
              <div className="home-benefit-text">
                {' '}
                <h3>Быстрая навигация</h3>{' '}
                <p>
                  {' '}
                  Перемещение по страницам и функицонал упрощем и интуитивно
                  понятен. Мы решили сделать максимально удобно и не перегрузить
                  вас кучей лишних деталей.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home-articles container">
      <h1 className="home-title">Полезные статьи</h1>
      <div className="home-articles-data">
        <div className="home-articles-house">
          <div
            className="home-articles-left mobile-hidden"
            style={{ background: `url("${HomeArticleFlat}")` }}
          >
            <h3>Купить квартиру</h3>
            <ul>
              <li>1-комнатные</li>
              <li>2-комнатные</li>
              <li>3-комнатные</li>
            </ul>
          </div>
          <div className="home-articles-right mobile-hidden">
            <div className="home-data">
              <img src={HomeArticleIconHouse} alt="" />
              <h3>Купить дом</h3>
            </div>
          </div>
        </div>
        <div className="home-articles-cards">
          <div
            className="home-articles-card mobile-height"
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить комнату</h3>
            <span>966 предложений</span>
          </div>
          <div className="home-articles-card-icon mobile-hidden">
            <img src={HomeArticleIconTs} alt="" />
            <h3>Бизнес-центры</h3>
          </div>
          <div
            className="home-articles-card"
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить квартиру в новом доме</h3>
            <span>966 предложений</span>
          </div>{' '}
          <div
            className="home-articles-card-icon mobile-hidden"
            style={{ background: '#F8F8F8' }}
          >
            <img src={HomeArticleIconAuto} alt="" />
            <h3 style={{ color: '#5894C9' }}>Бизнес-центры</h3>
          </div>
          <div
            className="home-articles-card"
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить таунханус</h3>
            <span>966 предложений</span>
          </div>
          <div
            className="home-articles-card"
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить участок</h3>
            <span>966 предложений</span>
          </div>
          <div
            className="home-articles-card "
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить комнату</h3>
            <span>966 предложений</span>
          </div>
          <div
            className="home-articles-card mobile-height"
            style={{ background: `url("${HomeNewFullImg}") no-repeat` }}
          >
            <h3>Купить комнату</h3>
            <span>966 предложений</span>
          </div>
        </div>
        <div className="mobile-add home-articles-button">
          <Link to="/blog/acticle">
            <Button variant="contained">Больше статей</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
