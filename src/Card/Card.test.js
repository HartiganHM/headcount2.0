import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow, mount, render } from 'enzyme';

describe('Card Tests', () => {
  // let renderedCard;
  // let districtData;
  // let {district, data};

  // beforeEach( () => {
  //   districtData = {district: 'place', data: {}}
  //   {district, data} = districtData; 
  //   renderedCard = shallow(<Card district={district} data={data} />);
  // });

  it('should exist', () => {
    const renderedCard = shallow(<Card />);
    expect(renderedCard).toBeDefined();
  })

  it('should match the snapshot', () => {
    const districtData = {district: 'place', data: {}}
    const {district, data} = districtData; 
    const renderedCard = shallow(<Card district={district} data={data} />);
    expect(renderedCard).toMatchSnapshot();
  })
})