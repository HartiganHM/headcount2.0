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

    this.helper;
    this.filterData = this.filterData.bind(this);
  }

  filterData(input) {
    let data = this.state.data.findAllMatches(input);
    // let data = this.state.data.data

    // newData.forEach( district => console.log(district.location))

    // let data = Object.keys(this.state.data.data).reduce( (data, district) => {
    //   newData.forEach( (newDistrict) => {
    //     if (district === newDistrict.location) {
    //       data[district] = this.state.data.data[district]
    //     }
    //   })
    //   return data
    // }, {})

    console.log(this.state.data.findAllMatches(input))
    console.log(data)

    this.setState({data})
  }

  componentDidMount() {
    this.helper = new DistrictRepository(schoolData);
    this.setState({ data: this.helper.data })
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