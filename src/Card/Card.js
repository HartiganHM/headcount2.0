import React from 'react';
import './Card.css';

const Card = ({ district, data }) => {
    const districtData = Object.keys(data).map( year => {
        return <li>{year}: {data[year]}</li>
    })

    return (
        <div>
            <span>{district}</span>
            <ul>
                {districtData}
            </ul>
        </div>
    )
}

export default Card;