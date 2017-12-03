import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ district, data, clickFunction, type }) => {
  const districtData = Object.keys(data).map(year => {
    const dataClass = data[year] > 0.5 ? 'greaterThan' : 'lessThan';
    return (
      <li key={year} className={dataClass}>
        {year}: {data[year]}
      </li>
    );
  });

  return (
    <div className={ type } id={district} onClick={() => clickFunction(district)}>
      <span className='district-name'>{district}</span>
      <ul className='district-data'>{districtData}</ul>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.string,
  data: PropTypes.object
};

export default Card;