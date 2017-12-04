import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card Tests', () => {
  let renderedCard;
  let mockDistrict;
  let mockData;
  let mockFunc;
  let mockType;

  beforeEach(() => {
    mockDistrict = 'colorado';
    mockData = { 2007: 0.88 };
    mockFunc = jest.fn();
    mockType = 'card';
    let { district, data } = mockData;
    renderedCard = shallow(
      <Card
        district={mockDistrict}
        data={mockData}
        clickFunction={mockFunc}
        type={mockType}
      />
    );
  });

  it('Card should exist', () => {
    expect(renderedCard).toBeDefined();
  });

  it('Card should match the snapshot', () => {
    expect(renderedCard).toMatchSnapshot();
  });

  it('Card should have a different type with new data', () => {
    expect(renderedCard.find('.high-score').length).toEqual(1);

    mockData = { 2005: 0.1 };
    renderedCard = shallow(<Card data={mockData} />);
    expect(renderedCard.find('.low-score').length).toEqual(1);
  });

  it('Card should have a list that matches number of years/ranges', () => {
    expect(renderedCard.find('.high-score').length).toEqual(1);

    mockData = { 2005: 0.8, 2006: 0.85, 2007: 0.9 };
    renderedCard = shallow(<Card data={mockData} />);

    expect(renderedCard.find('.high-score').length).toEqual(3);

    mockData = { 2005: 0.1, 2006: 0.3, 2007: 0.6, 2008: 0.9 };
    renderedCard = shallow(<Card data={mockData} />);

    expect(renderedCard.find('.high-score').length).toEqual(1);
    expect(renderedCard.find('.mid-high-score').length).toEqual(1);
    expect(renderedCard.find('.mid-low-score').length).toEqual(1);
    expect(renderedCard.find('.low-score').length).toEqual(1);
  });

  it('Card should send district name on click', () => {
    renderedCard.simulate('click');
    expect(mockFunc.mock.calls).toEqual([[mockDistrict]]);
  });
});
