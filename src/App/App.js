import React, { Component } from 'react';
import DistrictRepository from './helper'
import schoolData from '../data/kindergartners_in_full_day_program.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    let data = new DistrictRepository(schoolData);
    this.setState({data})
  }

  render() {
    return (
      <div>
        <span>Headcount 2.0</span>
        <Search />
        <CardContainer />
        <footer>Developed by Matt Renn and Hugh Hartigan</footer>
      </div>
    );
  }
}

export default App;
