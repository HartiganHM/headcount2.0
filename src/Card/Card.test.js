import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';

describe('Card Tests', () => {
  let renderedCard;
  let districtData;

  beforeEach( () => {
    districtData = {district: 'place', data: {2007: 0.88}};
    let {district, data} = districtData; 
    renderedCard = shallow(<Card district={district} data={data} />);
  });

  it('should exist', () => {
    expect(renderedCard).toBeDefined();
  })

  it('should match the snapshot', () => {
    console.log('renderedCard', renderedCard.debug());
    
    expect(renderedCard).toMatchSnapshot();
  })
})