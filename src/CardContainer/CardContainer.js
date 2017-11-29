import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({data}) => {
    if (data.data) {

        const allCards = Object.keys(data.data).map( district => {
            return (
                <Card 
                    district={data.data[district].location} data={data.data[district].data}
                    key={data.data[district].location}
                 />
            )
        })
        
        return (
            <div>
                {allCards}
            </div>
    )}
    return null
}

CardContainer.propTypes = {
    data: PropTypes.object
}

export default CardContainer