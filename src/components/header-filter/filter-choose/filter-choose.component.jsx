import React, {useState} from 'react'
import './filter-choose.styles.scss'

const FilterChoose = ({ title='', elements=[], custom=false, icons = false }) => {
  const [active, setActive] = useState(1);

  return (
    <div className="filter-choose">
      <h4 className="filter-choose-title">{title}</h4>
      <ul className="filter-choose-items">
        {elements.map((el, i) => (
          <li
            className={`filter-choose-item ${active === i + 1 && 'active'} ${
              custom && 'active-address'
            }`}
            onClick={() => setActive(i + 1)}
          >
            {icons && <img src={icons[i]} alt="" />}
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FilterChoose;
