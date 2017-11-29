import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './CardContainer';
import { shallow, mount, render } from 'enzyme';

describe('Card Container Tests', () => {
    let renderedCardContainer;

    beforeEach( () => {
        renderedCardContainer = shallow(<CardContainer />)
    });

    it('CardContainer should exist', () => {
        expect(renderedCardContainer).toBeDefined();
    });
})