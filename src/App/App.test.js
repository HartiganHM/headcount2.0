import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import importedData from '../../data/kindergartners_in_full_day_program.js';

describe('App Tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('App should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('App should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  it('Should have default state', () => {
    const defaultState = {};

    renderedApp.state().data = defaultState;
    expect(renderedApp.state().data).toEqual(defaultState);
  });

  it('Should take data as state', () => {
    const defaultState = {};
    const expectedState = importedData;

    renderedApp.state().data = defaultState;
    expect(renderedApp.state().data).toEqual(defaultState);

    renderedApp.instance().setState({ data: expectedState });
    expect(renderedApp.state().data).toEqual(expectedState);
  });
});
