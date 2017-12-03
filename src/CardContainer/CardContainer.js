import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ data, selectCard, selectedArray }) => {
  if (data) {
    let type;

    const allCards = Object.keys(data).map(district => {
      const dist = data[district];
      let dist1 = selectedArray.length ? selectedArray[0].location : null;
      let dist2 = selectedArray.length > 1 ? selectedArray[1].location : null;

      if (selectedArray.length && dist.location === dist1) {
        type = 'card selected';
      } else if (selectedArray.length && dist.location === dist2) {
        type = 'card selected';
      } else {
        type = 'card'
      }

      return (
        <Card district={dist.location} data={dist.data} key={dist.location} selectCard={selectCard} type={type}/>
      );
    });

    return <div className='card-container'>{allCards}</div>;
  }
  return null;
};

CardContainer.propTypes = {
  data: PropTypes.object
};

export default CardContainer;