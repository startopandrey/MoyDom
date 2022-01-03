import { Button } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NewbuildPlane from '../newbuild-planes/newbuild-planes.component';
import PlaneImg from '../../../assets/newbuild/planes/plane 1.png';
import './newbuilds-row.styles.scss';
const NewbuildRooms = ({ rooms, price, place, planes, flats, activeItem }) => {
  const [active, setActive] = useState(activeItem ? true : false);
  return (
    <div>
      <div className="newbuild-rooms">
        <div className="newbuild-rooms-container">
          <ul className="newbuild-rooms-list">
            <li className="newbuild-rooms--1">{`${rooms}-комнатные`}</li>
            <li className="newbuild-rooms--2">{`от ${price}`}</li>
            <li className="newbuild-rooms--3">{`от ${place}м2`}</li>
            <li className="newbuild-rooms--4">{`${planes} планировки`}</li>
            <li
              className="newbuild-rooms--5"
              onClick={() => setActive(!active)}
            >
              <Button
                className="newbuild-rooms-button"
                endIcon={<KeyboardArrowDownIcon />}
                variant="contained"
              >{`${flats} квартир`}</Button>
            </li>
          </ul>
        </div>
      </div>
      {active ? (
        <NewbuildPlane
          activeItem
          img={PlaneImg}
          rooms="3"
          meters="72"
          kitchemMeters="20"
          floors="9"
          date="4 квартал 2024 г."
          price="18 449 780 222"
          priceForMeter="18 449 780 222"
          raute="/newbuild/details"
        ></NewbuildPlane>
      ) : (
        ''
      )}
    </div>
  );
};
export default NewbuildRooms;
