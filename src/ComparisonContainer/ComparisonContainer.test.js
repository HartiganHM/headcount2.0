import React from 'react';
import ComparisonContainer from './ComparisonContainer';
import { shallow } from 'enzyme';

describe('Comparison Container Tests', () => {
  let renderedComparisonContainer;
  let mockObject;
  let mockArray;

  beforeEach(() => {
    mockArray = [];
    mockObject = {};
    renderedComparisonContainer = shallow(
      <ComparisonContainer
        selectedArray={mockArray}
        comparedData={mockObject}
      />
    );
  });

  it('Comparison Container should exist', () => {
    expect(renderedComparisonContainer).toBeDefined();
  });

  it('Comparison Container should match the snapshot', () => {
    expect(renderedComparisonContainer).toMatchSnapshot();
  });

  it('Comparison Container should have no Cards if array is empty', () => {
    expect(renderedComparisonContainer.find('Card').length).toEqual(0);
  });

  it('Comparison Container should have one Cards if array is full', () => {
    mockArray = [{}];
    renderedComparisonContainer = shallow(
      <ComparisonContainer selectedArray={mockArray} />
    );
    expect(renderedComparisonContainer.find('Card').length).toEqual(1);
  });

  it('Comparison Container should have two Cards if array is full', () => {
    mockArray = [{}, {}];
    renderedComparisonContainer = shallow(
      <ComparisonContainer selectedArray={mockArray} />
    );
    expect(renderedComparisonContainer.find('Card').length).toEqual(2);
  });
});
