import React, { useState } from 'react';
import GalleryHouse from '../../components/gallery-house/gallery-house.component';
import GalleryPhoto from '../../assets/newbuild/newbuild-gallery.png';
import Avatar from '../../assets/newbuild/newbuild-avatar.png';
import './newbuilds.styles.scss';
import HomeNewImg from '../../assets/newbuildings.png';
import Logo from '../../assets/logo.png';
import HomeNewBuild from '../../components/home-components/home-newbuildings/home-newbuildings.component';
import NewbuildRooms from '../../components/newbuilds/newbuilds-row/newbuilds-row.component';
import NewbuildsFeatures from '../../components/newbuilds/newbuilds-features/newbuilds-features.component';
// Icon Features
import ClassIcon from '../../assets/newbuild/icons-features/class.svg';
import BrickIcon from '../../assets/newbuild/icons-features/brick.svg';
import BrickwallIcon from '../../assets/newbuild/icons-features/brickwall.svg';
import BuildingIcon from '../../assets/newbuild/icons-features/building.svg';
import FlatIcon from '../../assets/newbuild/icons-features/flat.svg';
import RadiatorIcon from '../../assets/newbuild/icons-features/radiator.svg';
import WaterTapIcon from '../../assets/newbuild/icons-features/water-tap.svg';

// Icon Infrastructure..
import ClassRoom from '../../assets/newbuild/icon-infrastructure/classroom.svg';
import Dumbbell from '../../assets/newbuild/icon-infrastructure/dumbbell.svg';
import GraduationHat from '../../assets/newbuild/icon-infrastructure/graduation-hat.svg';
import Location from '../../assets/newbuild/icon-infrastructure/location.svg';
import Store from '../../assets/newbuild/icon-infrastructure/store.svg';
import Veterinary from '../../assets/newbuild/icon-infrastructure/veterinary.svg';
import IframeMap from '../../components/newbuilds/newbuilds-iframe/newbuilds-iframe.component';
import { NewbuildDesription } from '../../components/newbuilds/newbuilds-description/newbuilds-description.component';
import NewbuildPlane from '../../components/newbuilds/newbuild-planes/newbuild-planes.component';
const FEATURES = [
  {
    icon: ClassIcon,
    title: 'Класс',
    text: 'Комфорт',
  },
  {
    icon: BrickIcon,
    title: 'Облицовка фасадов',
    text: 'Штукатурка',
  },
  {
    icon: BrickwallIcon,
    title: 'Тип стен',
    text: 'Кирпич',
  },
  {
    icon: FlatIcon,
    title: 'Этажность дома',
    text: '25',
  },
  {
    icon: BuildingIcon,
    title: 'Количество квартир',
    text: '400',
  },
  {
    icon: RadiatorIcon,
    title: 'Отопление',
    text: 'Централизованное',
  },
  {
    icon: WaterTapIcon,
    title: 'Водоснабжение',
    text: 'Централизованное',
  },
  {
    icon: ClassIcon,
    title: 'Класс',
    text: 'Комфорт',
  },
  {
    icon: BrickIcon,
    title: 'Облицовка фасадов',
    text: 'Штукатурка',
  },
  {
    icon: BrickwallIcon,
    title: 'Тип стен',
    text: 'Кирпич',
  },
  {
    icon: FlatIcon,
    title: 'Этажность дома',
    text: '25',
  },
  {
    icon: BuildingIcon,
    title: 'Количество квартир',
    text: '400',
  },
  {
    icon: RadiatorIcon,
    title: 'Отопление',
    text: 'Централизованное',
  },
  {
    icon: WaterTapIcon,
    title: 'Водоснабжение',
    text: 'Централизованное',
  },
];
const INFRASTRUCTURE = [
  {
    icon: ClassRoom,
    title: 'Детский садик',
    text: '25',
  },
  {
    icon: Dumbbell,
    title: 'Облицовка фасадов',
    text: '7 мин пешком',
  },
  {
    icon: GraduationHat,
    title: 'Спортзал',
    text: '7 мин пешком',
  },
  {
    icon: Location,
    title: 'Торговый центр',
    text: '7 мин пешком',
  },
  {
    icon: Store,
    title: 'Ресторан',
    text: '7 мин пешком',
  },
  {
    icon: Veterinary,
    title: 'Ветинарная больница',
    text: '7 мин пешком',
  },
  {
    icon: ClassRoom,
    title: 'Детский садик',
    text: '25',
  },
  {
    icon: Dumbbell,
    title: 'Облицовка фасадов',
    text: '7 мин пешком',
  },
  {
    icon: GraduationHat,
    title: 'Спортзал',
    text: '7 мин пешком',
  },
  {
    icon: Location,
    title: 'Торговый центр',
    text: '7 мин пешком',
  },
  {
    icon: Store,
    title: 'Ресторан',
    text: '7 мин пешком',
  },
  {
    icon: Veterinary,
    title: 'Ветинарная больница',
    text: '7 мин пешком',
  },
  {
    icon: ClassRoom,
    title: 'Детский садик',
    text: '25',
  },
  {
    icon: Dumbbell,
    title: 'Облицовка фасадов',
    text: '7 мин пешком',
  },
  {
    icon: GraduationHat,
    title: 'Спортзал',
    text: '7 мин пешком',
  },
  {
    icon: Location,
    title: 'Торговый центр',
    text: '7 мин пешком',
  },
  {
    icon: Store,
    title: 'Ресторан',
    text: '7 мин пешком',
  },
  {
    icon: Veterinary,
    title: 'Ветинарная больница',
    text: '7 мин пешком',
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
const DESCRIPTION = [
  'Сдаётся 2 ком квартира переделанные 3 ком',
  'Дом находится 1.5 км от главный дороги',
  'С евро ремонтом',
  'Мебелью и техникой',
  'Высоко потолочный дом',
  'Есть огород-- Тихий место',
  '2/1/2',
  'Общий полошат 65м²',
  'Цена 300$в месяц',
  'New Realtor',
  'Ориф+998974908887',
];

const Newbuild = () => {
  return (
    <div className="newbuild">
      <div className="newbuild-container container">
        <GalleryHouse
          rooms="3"
          address="Яшнабадский р-он, Ул. Фараби, 17-3"
          addressCity="г.Ташкент"
          tel="+999888777666"
          price="1.173.000.000"
          online="января 2022г"
          avatar={Avatar}
          name="Jamshid Kamolov"
          img={GalleryPhoto}
        ></GalleryHouse>

        <div className="container">
          <div className="newbuild-description">
            <NewbuildDesription
              title="Описание"
              text={DESCRIPTION}
            ></NewbuildDesription>
          </div>
          <div className="newbuild-rooms">
            <NewbuildRooms
              rooms="1"
              price="18 449 780"
              place="52,99"
              planes="29"
              flats="26"
         
            ></NewbuildRooms>

            <NewbuildRooms
              rooms="2"
              price="18 449 780"
              place="52,99"
              planes="29"
              flats="26"
            ></NewbuildRooms>
            <NewbuildRooms
              rooms="3"
              price="18 449 780"
              place="52,99"
              planes="29"
              flats="26"
            ></NewbuildRooms>
            <NewbuildRooms
              rooms="4"
              price="18 449 780"
              place="52,99"
              planes="29"
              flats="26"
            ></NewbuildRooms>
          </div>
          <div className="newbuild-feature">
            <h3 className="newbuild-title">Характеристики ЖК</h3>
            <div className="newbuild-feature-container">
              <div className="newbuild-feature-left">
                <ul className="newbuild-feature-left-list">
                  {FEATURES.map(({ icon, title, text }) => (
                    <li className="newbuild-feature-left-item">
                      <NewbuildsFeatures
                        icon={icon}
                        title={title}
                        text={text}
                      ></NewbuildsFeatures>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="newbuild-feature-right">
                <NewbuildDesription
                  title="Описание"
                  text={DESCRIPTION}
                ></NewbuildDesription>
              </div>
            </div>
            <div className="newbuild-infrastructure">
              <h3 className="newbuild-title">Инфаструктура</h3>
              <div className="newbuild-infrastructure-container">
                <div className="newbuild-infrastructure">
                  <ul className="newbuild-infrastructure-list">
                    {INFRASTRUCTURE.map(({ icon, title, text }) => (
                      <li className="newbuild-infrastructure-item">
                        <NewbuildsFeatures
                          icon={icon}
                          title={title}
                          text={text}
                          info={true}
                        ></NewbuildsFeatures>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="newbuild-map">
              <h3 className="newbuild-title" style={{ coloer: 'black' }}>
                {' '}
                Локация
              </h3>
              <IframeMap></IframeMap>
            </div>
            <div className="newbuild-same">
              <h3 style={{ coloer: 'black' }} className="newbuild-title">
                Похожие объявления
              </h3>
              <div className="newbuild-same-cards ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newbuild;
