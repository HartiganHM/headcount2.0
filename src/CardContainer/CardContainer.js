import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ data }) => {
  if (data) {
    const allCards = Object.keys(data).map(district => {
      const dist = data[district];

      return (
        <Card district={dist.location} data={dist.data} key={dist.location} />
      );
    });

    return <div className="card-container">{allCards}</div>;
  }
  return null;
};

CardContainer.propTypes = {
  data: PropTypes.object
};

export default CardContainer;
