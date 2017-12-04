import React from 'react';
import CardContainer from './CardContainer';
import { shallow, mount } from 'enzyme';
import DistrictRepository from '../helper';
import importedData from '../../data/kindergartners_in_full_day_program.js';

describe('Card Container Tests', () => {
  let renderedCardContainer;
  let mockData;
  let mockFunc;
  let fakeArray;

  beforeEach(() => {
    mockData = {
      colorado: { location: 'colorado', data: { 2005: 0.8 } },
      ADAMSCOUNTY: { location: 'ADAMS COUNTY', data: { 2005: 0.6 } }
    };
    mockFunc = jest.fn();
    fakeArray = [
      { location: 'yuma', data: { 2005: 0.8 } },
      { location: 'denver', data: { 2005: 0.6 } }
    ];
    renderedCardContainer = shallow(
      <CardContainer
        data={mockData}
        selectCard={mockFunc}
        removeCard={mockFunc}
        selectedArray={fakeArray}
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
    expect(renderedCardContainer.find('Card').length).toEqual(2);

    mockData = new DistrictRepository(importedData);
    renderedCardContainer = shallow(
      <CardContainer
        data={mockData.data}
        selectCard={mockFunc}
        removeCard={mockFunc}
        selectedArray={fakeArray}
      />
    );

    const expectedLength = 181;

    expect(renderedCardContainer.find('Card').length).toEqual(expectedLength);
  });

  it('CardContainer should have two Card classes if a displayed card is in the selected array', () => {
    renderedCardContainer = mount(
      <CardContainer
        data={mockData}
        selectCard={mockFunc}
        removeCard={mockFunc}
        selectedArray={fakeArray}
      />
    );

    expect(renderedCardContainer.find('.card').length).toEqual(2);
    expect(renderedCardContainer.find('.card selected').length).toEqual(0);

    fakeArray = [
      { location: 'colorado', data: { 2005: 0.8 } },
      { location: 'denver', data: { 2005: 0.6 } }
    ];

    renderedCardContainer = mount(
      <CardContainer
        data={mockData}
        selectCard={mockFunc}
        removeCard={mockFunc}
        selectedArray={fakeArray}
      />
    );

    expect(renderedCardContainer.find('.card').length).toEqual(2);
    expect(renderedCardContainer.find('.selected').length).toEqual(1);
  });
});
