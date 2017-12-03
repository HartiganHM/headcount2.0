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

  it('CardContainer should exist', () => {
    expect(renderedCardContainer).toBeDefined();
  });

  it('CardContainer should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('CardContainer should render Cards', () => {
    data = new DistrictRepository(importedData);
    renderedCardContainer = shallow(<CardContainer data={data} />);

    const expectedLength = 181;

    expect(renderedCardContainer.find('Card').length).toEqual(expectedLength);
  });
});
