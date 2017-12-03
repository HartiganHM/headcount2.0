import React from 'react';
import Card from '../Card/Card';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
// import PropTypes from 'prop-types';
// import './CardContainer.css';

const Comparison = ({ selectedArray, comparedData, selectCard }) => {
    let type = 'card';

    const selectedCards = selectedArray.map( (card) => {
        return (
            <Card district={card.location} data={card.data} key={card.location} selectCard={selectCard} type={type}/>
        )
    })

    return (
        <div className='comparison'>
            {selectedCards[0]}
            <ComparisonCard comparedData={comparedData}/>
            {selectedCards[1]}
        </div>
    )
}

export default Comparison;