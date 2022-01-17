import { Button, Input } from '@mui/material';
import React, { useState } from 'react';
import OfficeTypeIcon from '../../assets/post/office-type.png';
import BusinessTypeIcon from '../../assets/post/business-type.png';
import LandcoverTypeIcon from '../../assets/post/landcover-type.png';
import Office2TypeIcon from '../../assets/post/office2-type.png';
import StorageTypeIcon from '../../assets/post/storage-type.png';
import TsTypeIcon from '../../assets/post/ts-typr.png';
import FlatCategories from '../../assets/post/flat-categories.png';
import HouseCategories from '../../assets/post/house-categories.png';
import DachaCategories from '../../assets/post/dacha-categories.png';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Box from '@mui/material/Box';
import Pool from '../../assets/post/pool.svg'
import Pool1 from '../../assets/post/pool1.svg';
import Ban from '../../assets/post/ba.png';
import Kar from '../../assets/post/ka.svg';
import Ham from '../../assets/post/ham.svg';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OfficeCategories from '../../assets/post/office-categories.png';
import { ReactComponent as SaleHeaderIcon } from '../../assets/post/sale-header-icon.svg';
import { ReactComponent as HouseHeaderIcon } from '../../assets/post/house-header-icon.svg';
import './post.styles.scss';
import KidsIcon from '../../assets/build-icons/build-warning/kids.svg';
import HatIcon from '../../assets/build-icons/build-warning/hat.svg';
import AnimalIcon from '../../assets/build-icons/build-warning/animal.svg';
import PeopleIcon from '../../assets/build-icons/build-warning/people.svg';
import People2Icon from '../../assets/build-icons/build-warning/people2.svg';
import SmokeIcon from '../../assets/build-icons/build-warning/smoke.svg';
import PostCheckBox from '../../components/post/post-checkbox/post-checkbox.component';
import PostSelect from '../../components/post/post-select/post-select.component';
import WriteIcon from '../../assets/post/write.svg';
import MapIcon from '../../assets/post/map.svg';
import BathRoomIcon from '../../assets/build-icons/build-conveniences-icon/bathroom.svg';
import WaterIcon from '../../assets/build-icons/build-conveniences-icon/water.svg';
import BelconyIcon from '../../assets/build-icons/build-conveniences-icon/belcony.svg';
import AirConditionerIcon from '../../assets/build-icons/build-conveniences-icon/air-conditioner.svg';
import WifiIcon from '../../assets/build-icons/build-conveniences-icon/wifi.svg';
import Bathroom2Icon from '../../assets/build-icons/build-conveniences-icon/bathroom2.svg';
import WindowIcon from '../../assets/build-icons/build-conveniences-icon/window.svg';
import SignalingIcon from '../../assets/build-icons/build-conveniences-icon/signaling.svg';
import PostWarning from '../../components/post/post-warning/post-warning.component';
const Post = () => {
  const [headerButtons, setHeaderButtons] = useState(true);
  const [categoriesButton, setCategoriesButton] = useState(1);
  const [age, setAge] = React.useState('');
  const [active1, setActive1] = useState(1);
  const [active2, setActive2] = useState(1);
  const [typeButton, setTypeButton] = useState(0);
  const [dacha, setDacha] = useState(true);
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="post container">
      <div className="post-container">
        <div className="post-header-buttons">
          <Button
            className={`post-header-button ${headerButtons && 'active'}`}
            variant={`${headerButtons ? 'contained' : 'outlined'}`}
            onClick={() => setHeaderButtons(true)}
          >
            {' '}
            <SaleHeaderIcon></SaleHeaderIcon>
            Продажа
          </Button>
          <Button
            onClick={() => setHeaderButtons(false)}
            className={`post-header-button ${!headerButtons && 'active'}`}
            variant={`${!headerButtons ? 'contained' : 'outlined'}`}
          >
            {' '}
            <HouseHeaderIcon></HouseHeaderIcon>
            Сдача в аренду
          </Button>
        </div>

        <div className="post-categories-buttons">
          <div
            className={`post-categories-button  ${
              categoriesButton === 1 && 'active'
            }`}
            onClick={() => setCategoriesButton(1)}
          >
            <img
              className="post-categories-button-img"
              src={FlatCategories}
              alt=""
            />
            <div className="post-categories-button-title">
              {categoriesButton === 1 && (
                <span className="post-categories-button-icon">✔</span>
              )}
              <h5>Квартира</h5>
            </div>
          </div>
          <div
            onClick={() => setCategoriesButton(2)}
            className={`post-categories-button  ${
              categoriesButton === 2 && 'active'
            }`}
          >
            <img
              className="post-categories-button-img"
              src={HouseCategories}
              alt=""
            />
            <div className="post-categories-button-title">
              {categoriesButton === 2 && (
                <span className="post-categories-button-icon">✔</span>
              )}
              <h5>Дом</h5>
            </div>
          </div>
          <div
            onClick={() => setCategoriesButton(3)}
            className={`post-categories-button  ${
              categoriesButton === 3 && 'active'
            }`}
          >
            <img
              className="post-categories-button-img"
              src={DachaCategories}
              alt=""
            />
            <div className="post-categories-button-title">
              {categoriesButton === 3 && (
                <span className="post-categories-button-icon">✔</span>
              )}
              <h5>Дача</h5>
            </div>
          </div>
          <div
            onClick={() => setCategoriesButton(4)}
            className={`post-categories-button  ${
              categoriesButton === 4 && 'active'
            }`}
          >
            <img
              className="post-categories-button-img"
              src={OfficeCategories}
              alt=""
            />
            <div className="post-categories-button-title">
              {categoriesButton === 4 && (
                <span className="post-categories-button-icon">✔</span>
              )}
              <h5>Нежелая недвижимость</h5>
            </div>
          </div>
        </div>
        {categoriesButton === 1 && (
          <div className="post-data">
            <div className="post-data-options">
              <PostCheckBox
                title="Количество комнат"
                elements={['1', '2', '3', '4+', 'Свободная планировка']}
              ></PostCheckBox>
              <PostCheckBox
                title="Планировка"
                elements={[
                  'Отдельная',
                  'Студия',
                  'Коммунальная квартира',
                  'Другое',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Санузел"
                elements={[
                  'Раздельный',
                  'Комбинированный',
                  '2 и более санузлов',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Ремонт"
                elements={[
                  'Дизайнерский',
                  'Свежий ремонт',
                  'Косметический ремонт',
                  'Евро ремонт',
                  'Нуждается в ремонте',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Мебель"
                elements={['С мебелью', 'Старая мебель', 'Без мебели']}
              ></PostCheckBox>
              <div className="post-data-options-select">
                <PostSelect
                  title="Этаж в доме"
                  items={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                  ]}
                ></PostSelect>
                <PostSelect
                  title="Количество этажей в доме"
                  items={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                  ]}
                ></PostSelect>
              </div>
              <PostCheckBox
                title="Тип стен"
                elements={['Кирпич', 'Панельный', 'Шлакоблок', 'Другое']}
              ></PostCheckBox>
              <PostCheckBox
                title="Парковка"
                elements={[
                  'Подземная парковка',
                  'Охраняемая парковка',
                  'Свободная парковка',
                  'Собственное парковочное место',
                  'Нет парковки',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Период постройки дома"
                elements={[
                  'Постройка советских времен',
                  'Здание 1991-2000',
                  'Здание 2001-2010',
                  'Здание от 2011 и выше',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Период постройки дома"
                elements={[
                  'Постройка советских времен',
                  'Здание 1991-2000',
                  'Здание 2001-2010',
                  'Здание от 2011 и выше',
                ]}
              ></PostCheckBox>
            </div>
            <div className="post-credentials">
              <PostCheckBox
                title="Адрес"
                custom={true}
                icons={[WriteIcon]}
                elements={['Написать вручную']}
              ></PostCheckBox>
              <div className="post-credentials-address">
                <div className="post-address-city">
                  <h3>Город</h3>
                  <div className="post-address-city-form">
                    <FormControl fullWidth>
                      <InputLabel
                        style={{ color: '#A9A9A9' }}
                        placeholder="asffsfsf"
                        id="demo-simple-select-helper-label"
                      >
                        Выбрать город
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        className="post-credentials-select"
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ташкент</MenuItem>
                        <MenuItem value={20}>Ташкентская область</MenuItem>
                        <MenuItem value={30}>Самаркандская область</MenuItem>
                        <MenuItem value={40}>Бухарская область</MenuItem>
                        <MenuItem value={50}>Андижанская область</MenuItem>
                        <MenuItem value={60}>Навоийская область</MenuItem>
                        <MenuItem value={70}>Кашкадарьинская область</MenuItem>
                        <MenuItem value={80}>Наманганская область</MenuItem>
                        <MenuItem value={90}>Сирдарьинская область</MenuItem>
                        <MenuItem value={100}>
                          Сурхандарьинская область
                        </MenuItem>
                        <MenuItem value={110}>Ферганская область</MenuItem>
                        <MenuItem value={120}>Хорезмская область</MenuItem>
                        <MenuItem value={130}>Наманганская область</MenuItem>
                        <MenuItem value={140}>Джизакская область</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="post-credentials-details">
                  <div className="post-details-item">
                    <h3 className="post-details-title">Район</h3>
                    <Input
                      className="post-details-input"
                      placeholder="Мирзо-Улугбекский"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Улица</h3>
                    <Input
                      className="post-details-input"
                      placeholder="ул. Беруни"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Дом-Квартира</h3>
                    <Input
                      className="post-details-input"
                      placeholder="84/73"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PostCheckBox
              icons={[MapIcon]}
              elements={['Указать на карте']}
              custom={true}
            ></PostCheckBox>
            <div className="post-benefit">
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>

              <div>
                <h5 className="post-warning-title">Ограничения</h5>
                <PostWarning icon={PeopleIcon} text="Дети"></PostWarning>
                <PostWarning icon={AnimalIcon} text="Животные"></PostWarning>
                <PostWarning icon={KidsIcon} text="Парочки"></PostWarning>

                <PostWarning icon={SmokeIcon} text="Курить"></PostWarning>
                <PostWarning
                  icon={People2Icon}
                  text="Иностранцам"
                ></PostWarning>
                <PostWarning
                  icon={HatIcon}
                  text="Совместное проживание для студентов"
                ></PostWarning>
              </div>
              <div>
                <div className="post-rent-price">
                  {' '}
                  <PostCheckBox
                    title="Сдача квартиры"
                    elements={['Посуточно', 'Месячно']}
                  ></PostCheckBox>
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive1(1)}
                          className={`post-rent-row-button ${
                            active1 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive1(2)}
                          className={`post-rent-row-button ${
                            active1 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-rent-price">
                  {' '}
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive2(1)}
                          className={`post-rent-row-button ${
                            active2 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive2(2)}
                          className={`post-rent-row-button ${
                            active2 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                  <PostCheckBox
                    title="Коммунальные платежи"
                    elements={['По счетчикам', 'Включены']}
                  ></PostCheckBox>
                </div>
              </div>
              <div className="post-description">
                <h3 className="post-description-title">
                  Описание: Расскажите о квартире
                </h3>
                <div className="post-description-container-textarea">
                  {' '}
                  <textarea className="post-description-textarea"></textarea>{' '}
                </div>
              </div>
            </div>
            <div className="post-addphoto">
              <h3 className="post-addphoto-title">Добавить фото</h3>
              <div className="post-addphoto-icon-container">
                <AddPhotoAlternateOutlinedIcon className="post-addphoto-icon"></AddPhotoAlternateOutlinedIcon>
              </div>
            </div>
            <Button variant="contained" className="post-submit-button">
              Опубликовать
            </Button>
          </div>
        )}
        {categoriesButton === 2 && (
          <div className="post-data">
            <div className="post-data-options">
              <PostCheckBox
                title="Количество комнат"
                elements={['1', '2', '3', '4+', 'Свободная планировка']}
              ></PostCheckBox>
              <PostCheckBox
                title="Планировка"
                elements={[
                  'Отдельная',
                  'Студия',
                  'Коммунальная квартира',
                  'Другое',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Санузел"
                elements={[
                  'Раздельный',
                  'Комбинированный',
                  '2 и более санузлов',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Ремонт"
                elements={[
                  'Дизайнерский',
                  'Свежий ремонт',
                  'Косметический ремонт',
                  'Евро ремонт',
                  'Нуждается в ремонте',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Мебель"
                elements={['С мебелью', 'Старая мебель', 'Без мебели']}
              ></PostCheckBox>
              <div className="post-data-options-select">
                <PostSelect
                  title="Количество этажей в доме"
                  items={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                  ]}
                ></PostSelect>
              </div>
              <PostCheckBox
                title="Тип стен"
                elements={['Кирпич', 'Панельный', 'Шлакоблок', 'Другое']}
              ></PostCheckBox>

              <PostCheckBox
                title="Период постройки дома"
                elements={[
                  'Постройка советских времен',
                  'Здание 1991-2000',
                  'Здание 2001-2010',
                  'Здание от 2011 и выше',
                ]}
              ></PostCheckBox>
            </div>
            <div className="post-credentials">
              <PostCheckBox
                title="Адрес"
                custom={true}
                icons={[WriteIcon]}
                elements={['Написать вручную']}
              ></PostCheckBox>
              <div className="post-credentials-address">
                <div className="post-address-city">
                  <h3>Город</h3>
                  <div className="post-address-city-form">
                    <FormControl fullWidth>
                      <InputLabel
                        style={{ color: '#A9A9A9' }}
                        placeholder="asffsfsf"
                        id="demo-simple-select-helper-label"
                      >
                        Выбрать город
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        className="post-credentials-select"
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ташкент</MenuItem>
                        <MenuItem value={20}>Ташкентская область</MenuItem>
                        <MenuItem value={30}>Самаркандская область</MenuItem>
                        <MenuItem value={40}>Бухарская область</MenuItem>
                        <MenuItem value={50}>Андижанская область</MenuItem>
                        <MenuItem value={60}>Навоийская область</MenuItem>
                        <MenuItem value={70}>Кашкадарьинская область</MenuItem>
                        <MenuItem value={80}>Наманганская область</MenuItem>
                        <MenuItem value={90}>Сирдарьинская область</MenuItem>
                        <MenuItem value={100}>
                          Сурхандарьинская область
                        </MenuItem>
                        <MenuItem value={110}>Ферганская область</MenuItem>
                        <MenuItem value={120}>Хорезмская область</MenuItem>
                        <MenuItem value={130}>Наманганская область</MenuItem>
                        <MenuItem value={140}>Джизакская область</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="post-credentials-details">
                  <div className="post-details-item">
                    <h3 className="post-details-title">Район</h3>
                    <Input
                      className="post-details-input"
                      placeholder="Мирзо-Улугбекский"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Улица</h3>
                    <Input
                      className="post-details-input"
                      placeholder="ул. Беруни"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Дом-Квартира</h3>
                    <Input
                      className="post-details-input"
                      placeholder="84/73"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PostCheckBox
              icons={[MapIcon]}
              elements={['Указать на карте']}
              custom={true}
            ></PostCheckBox>
            <div className="post-benefit">
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>

              <div>
                <h5 className="post-warning-title">Ограничения</h5>
                <PostWarning icon={PeopleIcon} text="Дети"></PostWarning>
                <PostWarning icon={AnimalIcon} text="Животные"></PostWarning>
                <PostWarning icon={KidsIcon} text="Парочки"></PostWarning>

                <PostWarning icon={SmokeIcon} text="Курить"></PostWarning>
                <PostWarning
                  icon={People2Icon}
                  text="Иностранцам"
                ></PostWarning>
                <PostWarning
                  icon={HatIcon}
                  text="Совместное проживание для студентов"
                ></PostWarning>
              </div>
              <div>
                <div className="post-rent-price">
                  {' '}
                  <PostCheckBox
                    title="Сдача квартиры"
                    elements={['Посуточно', 'Месячно']}
                  ></PostCheckBox>
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive1(1)}
                          className={`post-rent-row-button ${
                            active1 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive1(2)}
                          className={`post-rent-row-button ${
                            active1 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-rent-price">
                  {' '}
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive2(1)}
                          className={`post-rent-row-button ${
                            active2 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive2(2)}
                          className={`post-rent-row-button ${
                            active2 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                  <PostCheckBox
                    title="Коммунальные платежи"
                    elements={['По счетчикам', 'Включены']}
                  ></PostCheckBox>
                </div>
              </div>
              <div className="post-description">
                <h3 className="post-description-title">
                  Описание: Расскажите о квартире
                </h3>
                <div className="post-description-container-textarea">
                  {' '}
                  <textarea className="post-description-textarea"></textarea>{' '}
                </div>
              </div>
            </div>
            <div className="post-addphoto">
              <h3 className="post-addphoto-title">Добавить фото</h3>
              <div className="post-addphoto-icon-container">
                <AddPhotoAlternateOutlinedIcon className="post-addphoto-icon"></AddPhotoAlternateOutlinedIcon>
              </div>
            </div>
            <Button variant="contained" className="post-submit-button">
              Опубликовать
            </Button>
          </div>
        )}
        {categoriesButton === 3 && (
          <div className="post-data">
            <div className="post-data-options">
              <div className="post-data-options-select">
                <PostSelect
                  title="Количество этажей"
                  items={[
                    '1',
                    '2',
                    '3',
                    '4',
                    '5',
                    '6',
                    '7',
                    '8',
                    '9',
                    '10',
                    '11',
                  ]}
                ></PostSelect>
              </div>

              <PostCheckBox
                title="Санузел"
                elements={[
                  'Раздельный',
                  'Комбинированный',
                  '2 и более санузлов',
                ]}
              ></PostCheckBox>

              <PostCheckBox
                title="Ремонт"
                elements={[
                  'Дизайнерский',
                  'Свежий ремонт',
                  'Косметический ремонт',
                  'Евро ремонт',
                  'Нуждается в ремонте',
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Мебель"
                elements={['С мебелью', 'Старая мебель', 'Без мебели']}
              ></PostCheckBox>

              <PostCheckBox
                title="Период постройки дома"
                elements={[
                  'Постройка советских времен',
                  'Здание 1991-2000',
                  'Здание 2001-2010',
                  'Здание от 2011 и выше',
                ]}
              ></PostCheckBox>
              <div className="post-options-input-buttons">
                <h3>Количество кроватей</h3>
                <div className="post-options-input-container">
                  <div
                    onClick={() => setDacha(true)}
                    className={`post-options-input-button ${dacha && 'active'}`}
                  >
                    Количество кроватей
                    <Input
                      className="post-options-input-button-input"
                      placeholder=""
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div
                    onClick={() => setDacha(false)}
                    className={`post-options-input-button ${
                      !dacha && 'active'
                    }`}
                  >
                    Ограничение до
                    <Input
                      className="post-options-input-button-input"
                      placeholder=""
                      inputProps={{ 'aria-label': 'description' }}
                    />
                    человек
                  </div>
                </div>
              </div>
            </div>
            <div className="post-credentials">
              <PostCheckBox
                title="Адрес"
                custom={true}
                icons={[WriteIcon]}
                elements={['Написать вручную']}
              ></PostCheckBox>
              <div className="post-credentials-address">
                <div className="post-address-city">
                  <h3>Город</h3>
                  <div className="post-address-city-form">
                    <FormControl fullWidth>
                      <InputLabel
                        style={{ color: '#A9A9A9' }}
                        placeholder="asffsfsf"
                        id="demo-simple-select-helper-label"
                      >
                        Выбрать город
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        className="post-credentials-select"
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ташкент</MenuItem>
                        <MenuItem value={20}>Ташкентская область</MenuItem>
                        <MenuItem value={30}>Самаркандская область</MenuItem>
                        <MenuItem value={40}>Бухарская область</MenuItem>
                        <MenuItem value={50}>Андижанская область</MenuItem>
                        <MenuItem value={60}>Навоийская область</MenuItem>
                        <MenuItem value={70}>Кашкадарьинская область</MenuItem>
                        <MenuItem value={80}>Наманганская область</MenuItem>
                        <MenuItem value={90}>Сирдарьинская область</MenuItem>
                        <MenuItem value={100}>
                          Сурхандарьинская область
                        </MenuItem>
                        <MenuItem value={110}>Ферганская область</MenuItem>
                        <MenuItem value={120}>Хорезмская область</MenuItem>
                        <MenuItem value={130}>Наманганская область</MenuItem>
                        <MenuItem value={140}>Джизакская область</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="post-credentials-details">
                  <div className="post-details-item">
                    <h3 className="post-details-title">Район</h3>
                    <Input
                      className="post-details-input"
                      placeholder="Мирзо-Улугбекский"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Улица</h3>
                    <Input
                      className="post-details-input"
                      placeholder="ул. Беруни"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Дом-Квартира</h3>
                    <Input
                      className="post-details-input"
                      placeholder="84/73"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PostCheckBox
              icons={[MapIcon]}
              elements={['Указать на карте']}
              custom={true}
            ></PostCheckBox>
            <div className="post-benefit">
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                  'Бассейн на улице',
                  'Бассейн внутри дома',
                  'Хамам',
                  'Баня/Сауна',
                  'Караоке',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                  Pool,
                  Pool1,
                  Ham,
                  Ban,
                  Kar,
                ]}
              ></PostCheckBox>

              <div>
                <div className="post-rent-price">
                  {' '}
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive1(1)}
                          className={`post-rent-row-button ${
                            active1 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive1(2)}
                          className={`post-rent-row-button ${
                            active1 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-rent-price">
                  {' '}
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive2(1)}
                          className={`post-rent-row-button ${
                            active2 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive2(2)}
                          className={`post-rent-row-button ${
                            active2 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                  <PostCheckBox
                    title="Коммунальные платежи"
                    elements={['По счетчикам', 'Включены']}
                  ></PostCheckBox>
                </div>
              </div>
              <div className="post-description">
                <h3 className="post-description-title">
                  Описание: Расскажите о квартире
                </h3>
                <div className="post-description-container-textarea">
                  {' '}
                  <textarea className="post-description-textarea"></textarea>{' '}
                </div>
              </div>
            </div>
            <div className="post-addphoto">
              <h3 className="post-addphoto-title">Добавить фото</h3>
              <div className="post-addphoto-icon-container">
                <AddPhotoAlternateOutlinedIcon className="post-addphoto-icon"></AddPhotoAlternateOutlinedIcon>
              </div>
            </div>
            <Button variant="contained" className="post-submit-button">
              Опубликовать
            </Button>
          </div>
        )}
        {categoriesButton === 4 && (
          <div className="post-data">
            <div className="post-type">
              <h3 className="post-type-title">Тип помещения</h3>
              <div className="post-type-cards">
                <div
                  onClick={() => setTypeButton(1)}
                  className={`post-type-data ${typeButton === 1 && 'active'}`}
                >
                  <img className="post-type-img" src={OfficeTypeIcon} alt="" />
                  <h5 className="post-type-subtitle">Офис</h5>
                </div>
                <div
                  onClick={() => setTypeButton(2)}
                  className={`post-type-data ${typeButton === 2 && 'active'}`}
                >
                  <img className="post-type-img" src={TsTypeIcon} alt="" />
                  <h5 className="post-type-subtitle">Торговое помещение</h5>
                </div>
                <div
                  onClick={() => setTypeButton(3)}
                  className={`post-type-data ${typeButton === 3 && 'active'}`}
                >
                  <img className="post-type-img" src={StorageTypeIcon} alt="" />
                  <h5 className="post-type-subtitle">Под склад</h5>
                </div>
                <div
                  onClick={() => setTypeButton(4)}
                  className={`post-type-data ${typeButton === 4 && 'active'}`}
                >
                  <img
                    className="post-type-img"
                    src={BusinessTypeIcon}
                    alt=""
                  />
                  <h5 className="post-type-subtitle">Готовый бизнес</h5>
                </div>
                <div
                  onClick={() => setTypeButton(5)}
                  className={`post-type-data ${typeButton === 5 && 'active'}`}
                >
                  <img
                    className="post-type-img"
                    src={LandcoverTypeIcon}
                    alt=""
                  />
                  <h5 className="post-type-subtitle">Земельный участок</h5>
                </div>

                <div
                  onClick={() => setTypeButton(6)}
                  className={`post-type-data ${typeButton === 6 && 'active'}`}
                >
                  <img className="post-type-img" src={Office2TypeIcon} alt="" />
                  <h5 className="post-type-subtitle">Производств. помещение</h5>
                </div>

                <div
                  onClick={() => setTypeButton(7)}
                  className={`post-type-data ${typeButton === 7 && 'active'}`}
                >
                  <img className="post-type-img" alt="" />
                  <h5 className="post-type-subtitle">Другое</h5>
                </div>
              </div>
            </div>
            <div className="post-data-options">
              <PostCheckBox
                title="Мебель"
                elements={['С мебелью', 'Старая мебель', 'Без мебели']}
              ></PostCheckBox>

              <PostCheckBox
                title="Находится в бизнес центре(для офисов)"
                elements={['Да', 'Нет']}
              ></PostCheckBox>
              <PostCheckBox
                title="Парковка"
                elements={[
                  'Подземная парковка',
                  'Охраняемая парковка',
                  'Свободная парковка',
                  'Собственное парковочное место',
                  'Нет парковки',
                ]}
              ></PostCheckBox>
            </div>
            <div className="post-credentials">
              <PostCheckBox
                title="Адрес"
                custom={true}
                icons={[WriteIcon]}
                elements={['Написать вручную']}
              ></PostCheckBox>
              <div className="post-credentials-address">
                <div className="post-address-city">
                  <h3>Город</h3>
                  <div className="post-address-city-form">
                    <FormControl fullWidth>
                      <InputLabel
                        style={{ color: '#A9A9A9' }}
                        placeholder="asffsfsf"
                        id="demo-simple-select-helper-label"
                      >
                        Выбрать город
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        className="post-credentials-select"
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ташкент</MenuItem>
                        <MenuItem value={20}>Ташкентская область</MenuItem>
                        <MenuItem value={30}>Самаркандская область</MenuItem>
                        <MenuItem value={40}>Бухарская область</MenuItem>
                        <MenuItem value={50}>Андижанская область</MenuItem>
                        <MenuItem value={60}>Навоийская область</MenuItem>
                        <MenuItem value={70}>Кашкадарьинская область</MenuItem>
                        <MenuItem value={80}>Наманганская область</MenuItem>
                        <MenuItem value={90}>Сирдарьинская область</MenuItem>
                        <MenuItem value={100}>
                          Сурхандарьинская область
                        </MenuItem>
                        <MenuItem value={110}>Ферганская область</MenuItem>
                        <MenuItem value={120}>Хорезмская область</MenuItem>
                        <MenuItem value={130}>Наманганская область</MenuItem>
                        <MenuItem value={140}>Джизакская область</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="post-credentials-details">
                  <div className="post-details-item">
                    <h3 className="post-details-title">Район</h3>
                    <Input
                      className="post-details-input"
                      placeholder="Мирзо-Улугбекский"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Улица</h3>
                    <Input
                      className="post-details-input"
                      placeholder="ул. Беруни"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                  <div className="post-details-item">
                    <h3 className="post-details-title">Дом-Квартира</h3>
                    <Input
                      className="post-details-input"
                      placeholder="84/73"
                      inputProps={{ 'aria-label': 'description' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PostCheckBox
              icons={[MapIcon]}
              elements={['Указать на карте']}
              custom={true}
            ></PostCheckBox>
            <div className="post-benefit">
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>
              <PostCheckBox
                title="Удобства"
                elements={[
                  'Душевая кабина',
                  'Подогрев воды',
                  'Балкон',
                  'Кондиционер',
                  'Wi-Fi',
                  'Ванная',
                  'Панорамные окна ',
                  'Сигнализация',
                ]}
                icons={[
                  BathRoomIcon,
                  WaterIcon,
                  BelconyIcon,
                  AirConditionerIcon,
                  WifiIcon,
                  Bathroom2Icon,
                  WindowIcon,
                  SignalingIcon,
                ]}
              ></PostCheckBox>

              <div>
                <h5 className="post-warning-title">Ограничения</h5>
                <PostWarning icon={PeopleIcon} text="Дети"></PostWarning>
                <PostWarning icon={AnimalIcon} text="Животные"></PostWarning>
                <PostWarning icon={KidsIcon} text="Парочки"></PostWarning>

                <PostWarning icon={SmokeIcon} text="Курить"></PostWarning>
                <PostWarning
                  icon={People2Icon}
                  text="Иностранцам"
                ></PostWarning>
                <PostWarning
                  icon={HatIcon}
                  text="Совместное проживание для студентов"
                ></PostWarning>
              </div>
              <div>
                <div className="post-rent-price">
                  {' '}
                  <PostCheckBox
                    title="Сдача квартиры"
                    elements={['Посуточно', 'Месячно']}
                  ></PostCheckBox>
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive1(1)}
                          className={`post-rent-row-button ${
                            active1 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive1(2)}
                          className={`post-rent-row-button ${
                            active1 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-rent-price">
                  {' '}
                  <h3 className="post-rent-price-title">Аредная плата</h3>
                  <div className="post-rent-data">
                    <h3 className="post-rent-title">Цена за сутки</h3>
                    <div className="post-rent-row">
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">От</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-input">
                        <h3 className="post-rent-row-input-title">До</h3>
                        <Input
                          className="post-details-input"
                          inputProps={{ 'aria-label': 'description' }}
                        />
                      </div>
                      <div className="post-rent-row-buttons">
                        <h3
                          onClick={() => setActive2(1)}
                          className={`post-rent-row-button ${
                            active2 === 1 && 'active'
                          }`}
                        >
                          USD
                        </h3>
                        <h3
                          onClick={() => setActive2(2)}
                          className={`post-rent-row-button ${
                            active2 === 2 && 'active'
                          }`}
                        >
                          UZS
                        </h3>
                      </div>
                    </div>
                  </div>
                  <PostCheckBox
                    title="Коммунальные платежи"
                    elements={['По счетчикам', 'Включены']}
                  ></PostCheckBox>
                </div>
              </div>
              <div className="post-description">
                <h3 className="post-description-title">
                  Описание: Расскажите о квартире
                </h3>
                <div className="post-description-container-textarea">
                  {' '}
                  <textarea className="post-description-textarea"></textarea>{' '}
                </div>
              </div>
            </div>
            <div className="post-addphoto">
              <h3 className="post-addphoto-title">Добавить фото</h3>
              <div className="post-addphoto-icon-container">
                <AddPhotoAlternateOutlinedIcon className="post-addphoto-icon"></AddPhotoAlternateOutlinedIcon>
              </div>
            </div>
            <Button variant="contained" className="post-submit-button">
              Опубликовать
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Post;
