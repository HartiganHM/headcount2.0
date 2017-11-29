import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount, render } from 'enzyme';

describe('Card Container Tests', () => {
    let renderedCardContainer;
    let data;

    beforeEach( () => {
        data = {data: {}}
        renderedCardContainer = shallow(<CardContainer data={data}/>)
    });

    it('CardContainer should exist', () => {
        expect(renderedCardContainer).toBeDefined();
    });

    it('CardContainer should match the snapshot', () => {
        expect(renderedCardContainer).toMatchSnapshot();
    });
})