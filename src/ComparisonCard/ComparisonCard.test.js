import React from 'react';
import ComparisonCard from './ComparisonCard';
import { shallow } from 'enzyme';

describe('Comparison Card Tests', () => {
  let renderedComparisonCard;
  let mockData;

  beforeEach(() => {
    mockData = {};
    renderedComparisonCard = shallow(
      <ComparisonCard comparedData={mockData} />
    );
  });

  it('Comparison Card should exist', () => {
    expect(renderedComparisonCard).toBeDefined();
  });

  it('Comparison Card should match the snapshot', () => {
    expect(renderedComparisonCard).toMatchSnapshot();
  });

  it('Comparison Card should have default value if data does not exist', () => {
    expect(renderedComparisonCard.find('.comparison-data').text()).toEqual('-');
  });

  it('Comparison Card changes if data exists', () => {
    mockData = { d1: 0.1, d2: 0.3, compared: 0.2 };
    renderedComparisonCard = shallow(
      <ComparisonCard comparedData={mockData} />
    );
    expect(renderedComparisonCard.find('.comparison-data').text()).toEqual(
      'compared: 0.2'
    );
  });
});
