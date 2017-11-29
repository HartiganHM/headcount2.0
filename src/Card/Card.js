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
    <div>
      <span>{district}</span>
      <ul>{districtData}</ul>
    </div>
  );
};

Card.propTypes = {
  district: PropTypes.string,
  data: PropTypes.object
};

export default Card;
