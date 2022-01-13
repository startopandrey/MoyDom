import React from 'react';
import GalleryHouse from '../../components/gallery-house/gallery-house.component';
import GalleryPhoto1 from '../../assets/newbuild/newbuild-gallery1.png';
import BuildSizeIcon from '../../assets/build-size-icon.png';
import './build.styles.scss';

//
import SmokeWarningIcon from '../../assets/build-icons/build-warning/smoke.svg'
import KidsWarningIcon from '../../assets/build-icons/build-warning/kids.svg';
import PeopleWarningIcon from '../../assets/build-icons/build-warning/people.svg';
import People2WarningIcon from '../../assets/build-icons/build-warning/people2.svg';
import AnimalsarningIcon from '../../assets/build-icons/build-warning/animal.svg';
//
import DishWasherHouseHoldIcon from '../../assets/build-icons/build-household/dishwasher.svg';
import CleanerHouseHoldIcon from '../../assets/build-icons/build-household/cleaner.svg';
import MicrowaveHouseHoldIcon from '../../assets/build-icons/build-household/microwave.svg';
import StoveHouseHoldIcon from '../../assets/build-icons/build-household/stove.svg';
import WashMachineHouseHoldIcon from '../../assets/build-icons/build-household/washmachine.svg';
//
import BathRoomConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/bathroom.svg';
import WaterConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/water.svg';
import WifiConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/wifi.svg';
import BalconyConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/belcony.svg';
import AirConditionerConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/air-conditioner.svg';
import WindowConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/window.svg';
import BathRoom2ConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/bathroom2.svg';
import SignalingConveniencesIcon from '../../assets/build-icons/build-conveniences-icon/signaling.svg';
///
import HeaterPackageIcon from '../../assets/build-icons/build-package-icon/heater.svg';
import WallPackageIcon from '../../assets/build-icons/build-package-icon/wall.png';
import ToolsPackageIcon from '../../assets/build-icons/build-package-icon/tools.svg';
import LampPackageIcon from '../../assets/build-icons/build-package-icon/lamp.svg';
import ParkingPackageIcon from '../../assets/build-icons/build-package-icon/parking.svg';
import HomePackageIcon from '../../assets/build-icons/build-package-icon/home.svg';

import BathRoomPackageIcon from '../../assets/build-icons/build-package-icon/bathroom.svg';
import PlaneIcon from '../../assets/build-icons/build-package-icon/plane.svg';
import BuildRow from '../../components/build-row/build-row.component';
import { NewbuildDesription } from '../../components/newbuilds/newbuilds-description/newbuilds-description.component';
import BuildCard from '../../components/build-card/build-card.component';
import IframeMap from '../../components/newbuilds/newbuilds-iframe/newbuilds-iframe.component';
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

const Build = ({}) => {
  return (
    <div className="build container">
      <GalleryHouse
        rooms="3"
        address="Яшнабадский р-он, Ул. Фараби, 17-3"
        addressCity="г.Ташкент"
        tel="+999888777666"
        price="1.173.000.000"
        online="января 2022г"
        avatar={'J'}
        name="Jamshid Kamolov"
        img={[GalleryPhoto1, GalleryPhoto1, GalleryPhoto1, GalleryPhoto1]}
      ></GalleryHouse>
      <div className="build-sizes">
        <div className="build-sizes-title">
          <img className="build-sizes-icon" src={BuildSizeIcon} alt="" />
          Площадь{' '}
        </div>
        <ul className="build-sizes-list">
          <li className="build-sizes-item">
            <h4>Общая</h4>
            <span>200м²</span>
          </li>
          <li className="build-sizes-item">
            <h4>Жилая</h4>
            <span>80м²</span>
          </li>
          <li className="build-sizes-item">
            <h4>Кухня</h4>
            <span>20м²</span>
          </li>
          <li className="build-sizes-item">
            <h4>Этаж</h4>
            <span>4 из 9</span>
          </li>
        </ul>
      </div>
      <div className="build-package">
        <div className="build-desription-right">
          <NewbuildDesription
            title="Описание"
            text={DESCRIPTION}
          ></NewbuildDesription>
        </div>
        <div className="build-package-left">
          <ul className="build-package-left-list">
            <li className="build-package-list-item">
              <BuildRow
                icon={PlaneIcon}
                title="Планировка"
                text="Раздельный"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={BathRoomPackageIcon}
                title="Санузел"
                text="Раздельный"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={HeaterPackageIcon}
                title="Отопление"
                text="Центральное"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={WallPackageIcon}
                title="Тип стен"
                text="Кирпичные"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={HomePackageIcon}
                title="Тип дома"
                text="Постройка 91-2000-е"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={ToolsPackageIcon}
                title="Ремонт"
                text="Косметический ремонт"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={LampPackageIcon}
                title="Мебель"
                text="Без мебели"
              ></BuildRow>
            </li>
            <li className="build-package-list-item">
              <BuildRow
                icon={ParkingPackageIcon}
                title="Парковка"
                text="Подземная парковка"
              ></BuildRow>
            </li>
          </ul>
        </div>
      </div>
      <div className="build-benefit">
        <h3 className="build-benefit-title">Удобства</h3>
        <ul className="build-benefit-list">
          <li className="build-benefit-item">
            <BuildCard
              icon={BathRoomConveniencesIcon}
              text="Душевая кабина"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={WaterConveniencesIcon}
              text="Подогрев воды"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard icon={WifiConveniencesIcon} text="Wi-Fi"></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard icon={BalconyConveniencesIcon} text="Балкон"></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={AirConditionerConveniencesIcon}
              text="Кондиционер"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={WindowConveniencesIcon}
              text="Панорамные окна "
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={BathRoom2ConveniencesIcon}
              text="Ванная"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={SignalingConveniencesIcon}
              text="Сигнализация"
            ></BuildCard>
          </li>
        </ul>
      </div>
      <div className="build-benefit">
        <h3 className="build-benefit-title">Бытовая техника</h3>
        <ul className="build-benefit-list">
          <li className="build-benefit-item">
            <BuildCard
              icon={DishWasherHouseHoldIcon}
              text="Посудомоечная машина"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={MicrowaveHouseHoldIcon}
              text="Микроволновка"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard icon={StoveHouseHoldIcon} text="Плита"></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard
              icon={WashMachineHouseHoldIcon}
              text="Стиральная машина"
            ></BuildCard>
          </li>
          <li className="build-benefit-item">
            <BuildCard icon={CleanerHouseHoldIcon} text="Пылесос"></BuildCard>
          </li>
        </ul>
      </div>
      <div className="build-warning">
        <h3 className="build-warning-title">Ограничения</h3>
        <ul className="build-warning-list">
          <li className="build-warning-item">
            <BuildCard icon={KidsWarningIcon} text="Дети"></BuildCard>
          </li>

          <li className="build-warning-item">
            <BuildCard icon={AnimalsarningIcon} text="Животные"></BuildCard>
          </li>
          <li className="build-warning-item">
            <BuildCard icon={PeopleWarningIcon} text="Иностранцам"></BuildCard>
          </li>
          <li className="build-warning-item">
            <BuildCard
              watrning={true}
              icon={SmokeWarningIcon}
              text="Курить"
            ></BuildCard>
          </li>
          <li className="build-warning-item">
            <BuildCard
              watrning={true}
              icon={People2WarningIcon}
              text="Парочки"
            ></BuildCard>
          </li>
        </ul>
      </div>
      <div className="build-map">
        <h3 className="build-map-title">Локация</h3>
        <div className="build-map-iframe">
          <IframeMap></IframeMap>
        </div>
      </div>
    </div>
  );
};
export default Build;
