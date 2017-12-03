import React, { Component } from 'react';
import icon from '../Icons/search.svg';
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
        <img src={icon} alt='magnifying-glass-icon' className='search-icon' />
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
}

export default Search;
