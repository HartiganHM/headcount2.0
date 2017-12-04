import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount, render } from 'enzyme';
import DistrictRepository from '../helper';
import importedData from '../../data/kindergartners_in_full_day_program.js';

describe('Card Container Tests', () => {
  let renderedCardContainer;
  let data;

  beforeEach(() => {
    data = { data: {} };
    renderedCardContainer = shallow(<CardContainer data={data} />);
  });

  xit('CardContainer should exist', () => {
    expect(renderedCardContainer).toBeDefined();
  });

  xit('CardContainer should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  xit('CardContainer should render Cards', () => {
    data = new DistrictRepository(importedData);
    renderedCardContainer = shallow(<CardContainer data={data} />);

    const expectedLength = 181;

    expect(renderedCardContainer.find('Card').length).toEqual(expectedLength);
  });
});
