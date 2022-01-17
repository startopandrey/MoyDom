import React, { useState } from 'react';
import '../filter-rent/filter-rent.styles.scss';
import FilterIcon from '../../../assets/filter.svg';
import Button from '@mui/material/Button';
import MultipleSelect from '../filter-select/filter-select.component';
import FilterCheckbox from '../filter-checkbox/filter-checkbox.copmonent';
import Box from '@mui/material/Box';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';
import Select from '@mui/material/Select';
import '../filter-select/filter-select.styles.scss';
import GeoIcon from '../../../assets/geo.svg';
import SearchIcon from '../../../assets/search.svg';
import FilterPrice from '../filter-price/filter-price.component';
import { Input, ListItemText, OutlinedInput } from '@mui/material';
import Checkbox from '../checkbox/checkbox.component';
import FilterCheckBox from '../filter-choose/filter-choose.component';
import FilterChoose from '../filter-choose/filter-choose.component';
import { Link } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
const FilterRent = ({ key, title, region = true, name, rooms, typehouse }) => {
  const [current, setCurrent] = useState();
  const [details, setDetails] = useState(false);
  const [age, setAge] = React.useState('');
  const [room, setRoom] = useState(false);
  const [typeHouse, setTypeHouse] = useState(false);
  const [typeApartment, setTypeApartment] = useState(false);
  const [square, setSquare] = useState(false);
  const [roomFilter, setRoomFilter] = useState(1);
  const [location, setLocation] = useState(false);
  const handleChange3 = event => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleChange4 = event => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleChange5 = event => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const handleChange6 = event => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const [personName, setPersonName] = React.useState([]);
  const [personName1, setPersonName1] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [personName3, setPersonName3] = React.useState([]);
  const BasicSelect = function BasicSelect({
    name,
    caterories = ['Все', 'Квартиры', 'Дома', 'Нежилая недвижимость', 'Дачи'],
    title = '',
  }) {
    const handleChange = event => {
      setAge(event.target.value);
    };
    const handleChange1 = event => {
      setCurrent(event.target.value);
    };
    console.log(current);
    return (
      <div className="filter-rent-container">
        <FormControl className="filter-form" fullWidth>
          <InputLabel
            // style={{
            //   position: 'absolute',
            //   top: '-0.3rem',
            //   color: 'wheat',
            // }}
            className="filter-form-input"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper-label"
          >
            Тип недвижимости
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={current}
            className="post-credentials-select"
            label="Age"
            onChange={handleChange1}
          >
            {caterories.map((text, i) => (
              <MenuItem className="demo-simple-select-options" value={i * 10}>
                {text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };
  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="filter-rent">
      <div key={key} className="header-filter-container">
        <div className="filter-row">
          <div className="filter-data">
            <div className="filter-row-container">
              <div className="filter-row-city">
                <div className="filter-row-city-form-container">
                  <img src={GeoIcon} alt="" />
                  <FormControl
                    variant="outlined"
                    className="filter-row-city-form"
                    fullWidth
                  >
                    <InputLabel
                      className="filter-row-city-input"
                      style={{ color: '#A9A9A9' }}
                      placeholder="asffsfsf"
                      id="demo-simple-select-helper-label"
                    >
                      {' '}
                      Выбрать город
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={age}
                      className="filter-row-city-select"
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
                      <MenuItem value={100}>Сурхандарьинская область</MenuItem>
                      <MenuItem value={110}>Ферганская область</MenuItem>
                      <MenuItem value={120}>Хорезмская область</MenuItem>
                      <MenuItem value={130}>Наманганская область</MenuItem>
                      <MenuItem value={140}>Джизакская область</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="filter-row-region-form-container">
                <Checkbox
                  title="Районы"
                  items={[
                    'По всем районам',
                    'Чиланзарский район',
                    'Шайхантахурский район',
                    'Яккасарайский район',
                    'Юнусабадский район',
                    'Олмазорский район',
                  ]}
                ></Checkbox>
              </div>
              <div className="filter-row-search">
                <img
                  className="filter-row-search-icon"
                  src={SearchIcon}
                  alt=""
                />
                <Input
                  className="filter-row-search-input"
                  placeholder="Регион, улица , ЖК ..."
                  inputProps={{ 'aria-label': 'description' }}
                />
              </div>
            </div>
            <Button className="filter-row-search-button" variant="contained">
              Поиск
            </Button>
          </div>
          <div className="filter-row-filt-icon-container">
            <div
              onClick={() => setDetails(!details)}
              className="filter-row-filt-icon"
            >
              <img src={FilterIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="filter-bottom-select">
          <div className="filter-bottom-item">
            {<BasicSelect></BasicSelect>}
          </div>

          <div className="filter-bottom-item">
            <FilterPrice title="Цена"></FilterPrice>
          </div>
          {current === 20 && (
            <div className="filter-bottom-item">
              <FilterPrice type={true} title="Площадь"></FilterPrice>
            </div>
          )}

          {current === 20 && (
            <div className="filter-bottom-item">
              <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Вид дома
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange3}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {['Любой', 'Готовый', 'Без ремонта', 'Не достроенный'].map(
                    name => (
                      <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>
          )}
          {current === 30 && (
            <div className="filter-bottom-item">
              <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Вид помещения
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName1}
                  onChange={handleChange4}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {[
                    'Офис',
                    'Торг. помещение',
                    'Под склад',
                    'Производств. пом.',
                    'Готовый бизнес',
                    'Земельный участок',
                    'Другое',
                    'Любое помещение',
                  ].map(name => (
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
          {current === 40 && (
            <div className="filter-bottom-item">
              <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Удобства
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName2}
                  onChange={handleChange5}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {[
                    'Минимум',
                    'Есть все что нужно',
                    'Лакшери',
                    'Все классы',
                  ].map(name => (
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
          {current === 40 && (
            <div className="filter-bottom-item">
              <FormControl sx={{ m: 1, width: 150 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Расположение
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName3}
                  onChange={handleChange6}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {[
                    'В горах',
                    'Чарвак',
                    'Чимган',
                    'Ташкент',
                    'Ташкент. область',
                    'Другие регионы',
                  ].map(name => (
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          )}
          <div className="filter-mobile-buttons-container">
            <div className="filter-mobile-buttons">
              <div className="filter-bottom-button-map-container">
                <Link to="map-filter">
                  <Button
                    className="filter-bottom-button-map"
                    variant="contained"
                  >
                    Поиск по карте
                  </Button>
                </Link>
              </div>
              <div className="filter-bottom-button-reset-container">
                <Button
                  className="filter-bottom-button-reset"
                  variant="contained"
                >
                  <ClearRoundedIcon sx={{ fontSize: 30 }}></ClearRoundedIcon>
                  Сбросить
                </Button>
              </div>
            </div>
          </div>
        </div>
        {details && (
          <div className="filter-checkbox">
            <FilterChoose
              title="Планировка"
              elements={[
                'Отдельная',
                'Студия',
                'Коммунальная квартира',
                'Другое',
              ]}
            ></FilterChoose>
            <FilterChoose
              title="Мебель"
              elements={['С мебелью', 'Старая мебель', 'Без мебели']}
            ></FilterChoose>
            <FilterChoose
              title="Ремонт"
              elements={[
                'Дизайнерский',
                'Студия',
                'Коммунальная квартира',
                'Другое',
              ]}
            ></FilterChoose>
            <FilterChoose
              title="Период постройки дома"
              elements={[
                'Постройка советских времен',
                'Здание 1991-2000г.',
                'Здание 2001-2010г.',
                'Здание от 2011 и выше',
              ]}
            ></FilterChoose>
            <div className="filter-checkbox-button-container">
              <Button className="filter-checkbox-button" variant="contained">
                Применить
              </Button>
            </div>
          </div>
        )}
      </div>
      <div key={key} className="mobile-filter-container">
        <div className="filter-mobile-data">
          <div className="filter-mobile-city-form-container">
            <img src={GeoIcon} alt="" />
            <FormControl
              variant="outlined"
              className="filter-mobile-city-form"
              fullWidth
            >
              <InputLabel
                className="filter-mobile-city-input"
                style={{ color: '#A9A9A9' }}
                placeholder="asffsfsf"
                id="demo-simple-select-helper-label"
              >
                {' '}
                Выбрать город
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                className="filter-mobile-row-city-select"
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
                <MenuItem value={100}>Сурхандарьинская область</MenuItem>
                <MenuItem value={110}>Ферганская область</MenuItem>
                <MenuItem value={120}>Хорезмская область</MenuItem>
                <MenuItem value={130}>Наманганская область</MenuItem>
                <MenuItem value={140}>Джизакская область</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="filter-mobile-bottom-items">
            <div className="filter-mobile-bottom-item">
              {<BasicSelect></BasicSelect>}
            </div>

            <div className="filter-mobile-bottom-item">
              <FilterPrice title="Цена"></FilterPrice>
            </div>
            {current === 20 ||
              (current === 30 && (
                <div className="filter-mobile-bottom-item">
                  <FilterPrice type={true} title="Площадь"></FilterPrice>
                </div>
              ))}
            {current === 20 && (
              <div className="filter-mobile-bottom-item">
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Вид дома
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange3}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {['Любой', 'Готовый', 'Без ремонта', 'Не достроенный'].map(
                      name => (
                        <MenuItem key={name} value={name}>
                          <ListItemText primary={name} />
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
            )}
            {current === 30 && (
              <div className="filter-mobile-bottom-item">
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Вид помещения
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName1}
                    onChange={handleChange4}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {[
                      'Офис',
                      'Торг. помещение',
                      'Под склад',
                      'Производств. пом.',
                      'Готовый бизнес',
                      'Земельный участок',
                      'Другое',
                      'Любое помещение',
                    ].map(name => (
                      <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            {current === 20 && (
              <div className="filter-mobile-bottom-item">
                <FilterPrice type={true} title="Площадь"></FilterPrice>
              </div>
            )}
            {current === 40 && (
              <div className="filter-mobile-bottom-item">
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Удобства
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName2}
                    onChange={handleChange5}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {[
                      'Минимум',
                      'Есть все что нужно',
                      'Лакшери',
                      'Все классы',
                    ].map(name => (
                      <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            {current === 40 && (
              <div className="filter-mobile-bottom-item">
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Расположение
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName3}
                    onChange={handleChange6}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {[
                      'В горах',
                      'Чарвак',
                      'Чимган',
                      'Ташкент',
                      'Ташкент. область',
                      'Другие регионы',
                    ].map(name => (
                      <MenuItem key={name} value={name}>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
          </div>
          <div className="filter-mobile-bottom-rooms">
            <h3 className="filter-mobile-bottom-title">Количество комнат</h3>
            <ul className="filter-mobile-bottom-list">
              <li
                className={roomFilter === 1 && 'active'}
                onClick={() => setRoomFilter(1)}
              >
                1
              </li>
              <li
                className={roomFilter === 2 && 'active'}
                onClick={() => setRoomFilter(2)}
              >
                2
              </li>
              <li
                className={roomFilter === 3 && 'active'}
                onClick={() => setRoomFilter(3)}
              >
                3
              </li>
              <li
                className={roomFilter === 4 && 'active'}
                onClick={() => setRoomFilter(4)}
              >
                4+
              </li>
            </ul>
          </div>
          <div className="filter-mobile-search">
            <img
              className="filter-mobile-search-icon"
              src={SearchIcon}
              alt=""
            />
            <Input
              className="filter-mobile-search-input"
              placeholder="Регион, улица , ЖК ..."
              inputProps={{ 'aria-label': 'description' }}
            />
          </div>
          <div className="filter-mobile-buttons">
            <div className="filter-mobile-bottom-button-reset-container">
              <Button
                className="filter-mobile-bottom-button-reset"
                variant="contained"
              >
                <ClearRoundedIcon sx={{ fontSize: 30 }}></ClearRoundedIcon>
                Сбросить
              </Button>
            </div>{' '}
            <Button className="filter-mobile-search-button" variant="contained">
              Поиск
            </Button>
            <div className="filter-mobile-row-filt-icon-container">
              <div
                onClick={() => setDetails(!details)}
                className="filter-mobile-row-filt-icon"
              >
                <img src={FilterIcon} alt="" />
              </div>
            </div>
          </div>{' '}
        </div>

        {details && (
          <div className="filter-checkbox">
            <FilterChoose
              title="Планировка"
              elements={[
                'Отдельная',
                'Студия',
                'Коммунальная квартира',
                'Другое',
              ]}
            ></FilterChoose>
            <FilterChoose
              title="Мебель"
              elements={['С мебелью', 'Старая мебель', 'Без мебели']}
            ></FilterChoose>
            <FilterChoose
              title="Ремонт"
              elements={[
                'Дизайнерский',
                'Студия',
                'Коммунальная квартира',
                'Другое',
              ]}
            ></FilterChoose>
            <FilterChoose
              title="Период постройки дома"
              elements={[
                'Постройка советских времен',
                'Здание 1991-2000г.',
                'Здание 2001-2010г.',
                'Здание от 2011 и выше',
              ]}
            ></FilterChoose>
            <div className="filter-checkbox-button-container">
              <Button
                onClick={() => setDetails(!details)}
                className="filter-checkbox-button"
                variant="contained"
              >
                Применить
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default FilterRent;
