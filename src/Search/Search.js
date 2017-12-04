import React, { Component } from 'react';
import icon from '../Icons/search.svg';
import PropTypes from 'prop-types';
import '../../fontello-d4ecff93/css/fontello.css';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.props.filterCards(value);
    this.setState({ value });
  }

  render() {
    return (
      <div className='search'>
        <i
          aria-hidden='true'
          className='icon-search'></i>
        <input
          className='search-input'
          type='text'
          placeholder='Search for a district'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

Search.propTypes = {
  filterCards: PropTypes.func,
};

export default Search;
