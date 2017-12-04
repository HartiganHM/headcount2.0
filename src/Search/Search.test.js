import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('Search Tests', () => {
  let renderedSearch;
  let mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    renderedSearch = shallow(<Search filterCards={mockFunc} />);
  });

  it('Search should exist', () => {
    expect(renderedSearch).toBeDefined();
  });

  it('Search should match the snapshot', () => {
    expect(renderedSearch).toMatchSnapshot();
  });

  it('Search should fire filterCards with change', () => {
    let input = renderedSearch.find('.search-input');

    renderedSearch
      .find('.search-input')
      .simulate('change', { target: { value: 'abc' } });
    expect(mockFunc.mock.calls).toEqual([['abc']]);
  });
});
