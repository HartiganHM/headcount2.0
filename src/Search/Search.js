import React from 'react';
import PropTypes from 'prop-types';
import '../../fontello-d4ecff93/css/fontello.css';
import './Search.css';

const Search = ({ filterCards }) => {
  return (
    <div className="search">
      <i aria-hidden="true" className="icon-search" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for a district"
        onChange={e => filterCards(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  filterCards: PropTypes.func
};

export default Search;
