import React, { useState } from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './filter-price.styles.scss';
import {
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material';
const ariaLabel = { 'aria-label': 'description' };
const FilterPrice = ({ title, type }) => {
  const [age, setAge] = useState(false);
  const [currButton, setCurrButton] = useState(1);
  const handleChange = event => {
    if (
      event.target.id == 'demo-simple-select-helper' ||
      event.target.id == 'filter-submit'
    )
      setAge(!age);
  };
  return (
    <div className="filter-price-container-s">
      <FormControl className={'checkbox-filter'} fullWidth>
        {/* <InputLabel
          className="filter-price-input"
          style={{ color: '#A9A9A9' }}

          // id="demo-simple-select-helper-label"
        >
          <h3>sadfasf</h3>
        </InputLabel> */}

        <Select
          onClick={handleChange}
          renderValue={selected => {
            return `${title}`
          }}
          value={'asdfsdf'}
          style={{ borderRadius: '20px' }}
          id="demo-simple-select-helper"
          label="Age"
          open={age}
        >
          <div className="overlay">
            <div className="filter-price-overlay-container">
              <div className="filter-inputs-container">
                <div className="filter-overlay-input-container">
                  <OutlinedInput className="filter-input" placeholder="От" />
                </div>
                <div className="filter-overlay-input-container">
                  <OutlinedInput className="filter-input" placeholder="До" />
                </div>
              </div>
              <div className="filter-bottom-buttons">
                {!type ? (
                  <>
                    <Button
                      onClick={() => setCurrButton(1)}
                      variant={`${currButton === 1 ? 'contained' : 'outlined'}`}
                      className={`filter-curr-button  ${
                        currButton === 1 && 'active'
                      }`}
                    >
                      $
                    </Button>
                    <Button
                      onClick={() => setCurrButton(2)}
                      variant={`${currButton === 2 ? 'contained' : 'outlined'}`}
                      className={`filter-curr-button  ${
                        currButton === 2 && 'active'
                      }`}
                    >
                      Сум
                    </Button>
                  </>
                ) : (
                  <div>
                    <Button
                      onClick={() => setCurrButton(1)}
                      variant={`${currButton === 1 ? 'contained' : 'outlined'}`}
                      className={`filter-curr-button  ${
                        currButton === 1 && 'active'
                      }`}
                    >
                      м2
                    </Button>
                    <Button
                      onClick={() => setCurrButton(2)}
                      variant={`${currButton === 2 ? 'contained' : 'outlined'}`}
                      className={`filter-curr-button  ${
                        currButton === 2 && 'active'
                      }`}
                    >
                      Соток
                    </Button>
                    <Button
                      onClick={() => setCurrButton(3)}
                      variant={`${currButton === 3 ? 'contained' : 'outlined'}`}
                      className={`filter-curr-button  ${
                        currButton === 3 && 'active'
                      }`}
                    >
                      Гектар
                    </Button>
                  </div>
                )}
                <Button
                  onClick={handleChange}
                  variant="contained"
                  id="filter-submit"
                  className="filter-submit"
                >
                  Применить
                  <ArrowForwardIcon className="filter-submit-icon"></ArrowForwardIcon>
                </Button>
              </div>
            </div>{' '}
          </div>
        </Select>
      </FormControl>
    </div>
  );
};
export default FilterPrice;
