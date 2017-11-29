import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ district, data }) => {
  const districtData = Object.keys(data).map(year => {
    return (
      <li key={year}>
        {year}: {data[year]}
      </li>
    );
  });

  return (
    <div className='card'>
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
