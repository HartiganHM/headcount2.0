import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ data, selectCard, selectedArray }) => {
  if (data) {
    let type = 'card';

    const allCards = Object.keys(data).map(district => {
      const dist = data[district];
      selectedArray.forEach( ( obj ) => {
        if ( obj.location === dist ) {
          type = 'card selected'
        }
      })
      
      return (
        <Card district={dist.location} data={dist.data} key={dist.location} selectCard={selectCard} className={type}/>
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
