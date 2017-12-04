import React, { Component } from 'react';
import DistrictRepository from '../helper';
import schoolData from '../../data/kindergartners_in_full_day_program.js';
import '../../fontello-d4ecff93/css/fontello.css';
import './App.css';

import ComparisonContainer from '../ComparisonContainer/ComparisonContainer';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      selected: [],
      comparedData: {}
    };

    this.helper = {};
    this.filterData = this.filterData.bind(this);
    this.selectCard = this.selectCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  filterData(input) {
    let data = this.helper.findAllMatches(input);

    this.setState({ data });
  }

  componentDidMount() {
    this.helper = new DistrictRepository(schoolData);
    this.setState({ data: this.helper.data });
  }

  selectCard(card) {
    let selectedCard = this.state.data[card];
    let selected = [...this.state.selected, selectedCard];

    if (this.state.selected.length < 2) {
      this.setState({ selected }, () => this.compareData());
    }
  }

  removeCard(card) {
    let clickedCard = this.state.data[card];
    let selected = this.state.selected.filter(card => {
      return card !== clickedCard;
    });
    let comparedData = {};

    this.setState({ selected, comparedData });
  }

  compareData() {
    if (this.state.selected.length === 2) {
      let comparedData = this.helper.compareDistrictAverages(
        this.state.selected[0].location,
        this.state.selected[1].location
      );

      this.setState({ comparedData });
    }
  }

  render() {
    return (
      <div className="app">
        <span className="header">
          <i className="icon-book" />Headcount 2<i className="icon-book dot" />0
        </span>
        <ComparisonContainer
          selectedArray={this.state.selected}
          removeCard={this.removeCard}
          comparedData={this.state.comparedData}
        />
        <Search filterCards={this.filterData} />
        <CardContainer
          data={this.state.data}
          selectCard={this.selectCard}
          removeCard={this.removeCard}
          selectedArray={this.state.selected}
        />
        <footer className="footer">
          <a
            href="https://github.com/HartiganHM/headcount2.0"
            className="footer-link"
          >
            <i className="icon-github-circled" />Developed by Matt Renn and Hugh
            Hartigan
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
