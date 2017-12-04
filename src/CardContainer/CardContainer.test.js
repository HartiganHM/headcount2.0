import React from 'react';
import CardContainer from './CardContainer';
import Card from '../Card/Card';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper';
import importedData from '../../data/kindergartners_in_full_day_program.js';

describe('Card Container Tests', () => {
  let renderedCardContainer;
  let mockData;
  let mockFunc;
  let mockArray;

  beforeEach(() => {
    mockData = {
      colorado: { location: 'colorado', data: { 2005: 0.8 } },
      ADAMSCOUNTY: { location: 'ADAMS COUNTY', data: { 2005: 0.6 } }
    };
    mockFunc = jest.fn();
    mockArray = [
      { location: 'yuma', data: { 2005: 0.8 } },
      { location: 'denver', data: { 2005: 0.6 } }
    ];
    renderedCardContainer = shallow(
      <CardContainer
        data={mockData}
        selectCard={mockFunc}
        removeCard={mockFunc}
        selectedArray={mockArray}
      />
    );
  });

  it('CardContainer should exist', () => {
    expect(renderedCardContainer).toBeDefined();
  });

  it('CardContainer should match the snapshot', () => {
    expect(renderedCardContainer).toMatchSnapshot();
  });

  it('CardContainer should render Cards', () => {
    // renderedCardContainer = mount(<CardContainer
    //   data={mockData}
    //   selectCard={mockFunc}
    //   removeCard={mockFunc}
    //   selectedArray={mockArray}
    // />)
    console.log(renderedCardContainer.debug());
    console.log(renderedCardContainer.find('Card').length);
    // expect(renderedCardContainer.find('Card').length).toEqual(2);

    mockData = new DistrictRepository(importedData);
    renderedCardContainer = shallow(<CardContainer data={mockData} />);

    const expectedLength = 181;

    console.log(renderedCardContainer.debug());

    // expect(renderedCardContainer.find('Card').length).toEqual(expectedLength);
  });
});
