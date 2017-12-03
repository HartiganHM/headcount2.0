import React from 'react';
import PropTypes from 'prop-types';
import './ComparisonCard.css';

const ComparisonCard = ({ comparedData }) => {
    const keys = Object.keys(comparedData);
    const data = keys.map( (district) => {
        return comparedData[district]
    })

    const district1 = keys.length ? `${keys[0]}:${data[0]}` : 'District 1';
    const district2 = keys.length ? `${keys[1]}:${data[1]}` : 'District 2';
    const comparison = keys.length ? `${keys[2]}:${data[2]}` : 'COMPARISON';

    return(
        <div className='comparison-card'>
            <span>{district1}</span>
            <span>{comparison}</span>
            <span>{district2}</span>
        </div>
    )
}

export default ComparisonCard