import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ data, selectCard, selectedArray }) => {
  if (data) {
    let type = 'card';

    const allCards = Object.keys(data).map(district => {
      const dist = data[district];
      // if (dist.location === selectedArray[0].location || selectedArray[1].location) {
      //   type = 'card selected'
      // }

      selectedArray.forEach( ( obj ) => {
        if ( obj.location === dist.location ) {
          console.log(obj.location)
          type = 'card selected'
        } else {
          type = 'card'
        }
      })

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