import React from 'react';
import Card from '../Card/Card';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import PropTypes from 'prop-types';
import './ComparisonContainer.css';

const ComparisonContainer = ({ selectedArray, comparedData, removeCard }) => {
    let type = 'card selected';
    let placeHolder1 = selectedArray[0] ? '' : 'district';
    let placeHolder2 = selectedArray[1] ? '' : 'district';

    const selectedCards = selectedArray.map( (card) => {
        return (
            <Card district={card.location} data={card.data} key={card.location} clickFunction={removeCard} type={type}/>
        )
    })

    return (
        <div className='comparison-container'>
            <span className={placeHolder1}>{selectedCards[0] || ''}</span>
            <ComparisonCard comparedData={comparedData}/>
            <span className={placeHolder2}>{selectedCards[1] || ''}</span>
        </div>
    )
};

ComparisonContainer.propTypes = {
    selectedArray: PropTypes.array,
    comparedData: PropTypes.object,
    removeCard: PropTypes.func,
};

export default ComparisonContainer;