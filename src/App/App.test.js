import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import importedData from '../../data/kindergartners_in_full_day_program.js';

describe('App Tests', () => {
  let renderedApp;
  let defaultState;

  beforeEach(() => {
    renderedApp = shallow(<App />);
    defaultState = {
      data: {},
      selected: [],
      comparedData: {}
    };
  });

  it('App should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('App should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  it('Should have default state', () => {
    renderedApp.setState(defaultState);
    expect(renderedApp.state()).toEqual(defaultState);
  });

  it('Should take data as state', () => {
    const expectedState = importedData;

    renderedApp.state().data = defaultState;
    expect(renderedApp.state().data).toEqual(defaultState);

    renderedApp.instance().setState({ data: expectedState });
    expect(renderedApp.state().data).toEqual(expectedState);
  });

  it('Should render a card for each data object in state.data', () => {
    renderedApp = mount(<App />);

    expect(renderedApp.find('.card').length).toEqual(181);
  });

  it('should add a card object to selected array', () => {
    const expectedLocation = 'YUMA SCHOOL DISTRICT 1';

    renderedApp = mount(<App />);
    const lastCard = renderedApp.find('.card').last();

    lastCard.simulate('click');

    expect(renderedApp.state().selected.length).toEqual(1);
    expect(renderedApp.state().selected[0].location).toEqual(expectedLocation);
    expect(Object.keys(renderedApp.state().selected[0].data).length).toEqual(
      11
    );
  });

  it('should remove selected card from selected array on second click', () => {
    renderedApp = mount(<App />);
    const lastCard = renderedApp.find('.card').last();

    expect(renderedApp.state().selected.length).toEqual(0);
    lastCard.simulate('click');

    expect(renderedApp.state().selected.length).toEqual(1);

    lastCard.simulate('click');

    expect(renderedApp.state().selected.length).toEqual(0);
  });
});
