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
        renderedComparisonContainer = shallow(<ComparisonContainer
                                        selectedArray={mockArray}
                                        comparedData={mockObject}
                                    />)
    })

    it('Comparison Container should exist', () => {
        expect(renderedComparisonContainer).toBeDefined();
    });

    it('Comparison Container should match the snapshot', () => {
        expect(renderedComparisonContainer).toMatchSnapshot();
    });

    it('Comparison Container should have no Cards if array is empty', () => {
        expect(renderedComparisonContainer.find('Card').length).toEqual(0);
    });

    it('Comparison Container should two Cards if array is full', () => {
        mockArray = [ {}, {} ];
        renderedComparisonContainer = shallow(<ComparisonContainer selectedArray={mockArray} />)
        console.log(renderedComparisonContainer.debug())
        expect(renderedComparisonContainer.find('Card').length).toEqual(2);
    });
})