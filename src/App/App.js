import React, { Component } from 'react';
import DistrictRepository from '../helper'
import schoolData from '../../data/kindergartners_in_full_day_program.js'
import './App.css';

import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }

    this.filterData = this.filterData.bind(this);
  }

  filterData(input) {
    let newData = this.state.data.findAllMatches(input);

    console.log(newData)
  }

  componentDidMount() {
    let data = new DistrictRepository(schoolData);
    this.setState({data})
  }

  render() {
    return (
      <div className='app'>
        <span className='header'>Headcount 2.0</span>
        <Search filterCards={this.filterData}/>
        <CardContainer data={this.state.data} />
        <footer className='footer'>Developed by Matt Renn and Hugh Hartigan</footer>
      </div>
    );
  }
}

export default App;