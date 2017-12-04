import React from 'react';
import PropTypes from 'prop-types';
import '../../fontello-d4ecff93/css/fontello.css';
import './Card.css';

const Card = ({ district, data, clickFunction, type }) => {
  const districtData = Object.keys(data).map(year => {
    let dataClass;

    if( data[year] >= 0.75 ) {
      dataClass = 'high-score';
    } else if ( data[year] < 0.75 && data[year] >= 0.5 ) {
      dataClass = 'mid-high-score';
    } else if ( data[year] < 0.5 && data[year] >= 0.25 ) {
      dataClass = 'mid-low-score';
    } else {
      dataClass = 'low-score'
    }

    return (
      <li key={year} className={dataClass}>
        <span><i className='icon-pencil'></i>{year}: {data[year]}</span>
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
  data: PropTypes.object,
  clickFunction: PropTypes.func,
  type: PropTypes.string
};

export default Card;