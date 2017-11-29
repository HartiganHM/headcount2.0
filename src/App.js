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

    this.helper = new DistrictRepository(schoolData);
  }

  render() {
    console.log(this.helper)
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
