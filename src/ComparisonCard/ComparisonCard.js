import React from 'react';
import PropTypes from 'prop-types';
import '../../fontello-d4ecff93/css/fontello.css';
import './ComparisonCard.css';

const ComparisonCard = ({ comparedData }) => {
  const keys = Object.keys(comparedData);
  const data = keys.map(district => {
    return comparedData[district];
  });

  const district1 = keys.length
    ? `${keys[0]}: ${data[0]}`
    : 'Pick two districts';
  const district2 = keys.length
    ? `${keys[1]}: ${data[1]}`
    : 'to compare statistics';
  const comparison = keys.length ? `${keys[2]}: ${data[2]}` : '-';

  return (
    <div className="comparison-card">
      <span className="district-data">{district1}</span>
      <span className="comparison-data">
        <i className="icon-left-big" />
        {comparison}
        <i className="icon-right-big" />
      </span>
      <span className="district-data">{district2}</span>
    </div>
  );
};

ComparisonCard.propTypes = {
  comparedData: PropTypes.object
};

export default ComparisonCard;
