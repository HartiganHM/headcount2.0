import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonContainer from './ComparisonContainer';
import { shallow, mount, render } from 'enzyme';

describe('ComparisonContainer Tests', () => {
    let renderedComparisonContainer;
    let mockObject;
    let mockArray;
    let mockFunc;

    beforeEach( () => {
        mockArray = [];
        mockObject = {};
        mockFunc = jest.fn();
        renderedComparisonContainer = shallow(<ComparisonContainer
                                        selectedArray={mockArray}
                                        comparedData={mockObject}
                                        removeCard={mockFunc}
                                    />)
    })

    it('Comparison Container should exist', () => {
        expect(renderedComparisonContainer).toBeDefined();
    });

    it('Comparison Container should match the snapshot', () => {
        
    })
})