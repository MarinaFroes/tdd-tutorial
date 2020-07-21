import React from 'react'
import App from './App'
import PersonList from './PersonList'
import AddUserForm from './AddUserForm'
import { shallow } from 'enzyme'

// describe = test suite
describe('App', () => {
  let appWrapper;

  // Adding a beforeAll to get the shallow App component (without its children) follows the DRY principle because I don't need to do it again inside every test
  beforeAll(() => {
    appWrapper = shallow(<App />);
  })
  // it = test
  it('renders a person list', () => {
    // .find() from Jest let us pass a component that we want to find in the current component and assign it to an array
    const personList = appWrapper.find(PersonList);
    // expect() will check if the array personList has the length of 1 - I should have only one component called PersonList 
    expect(personList).toHaveLength(1);
  });

  it('has state', () => {
    // .state() gets the state of the component (which should be a class component)
    const appState = appWrapper.state();

    // Checks if the App state is not null - first case scenario
    expect(appState).not.toBeNull();
  });

  it('has a people property on state', () => {
    const appState = appWrapper.state();

    // Checks if the property called people is defined inside the App state
    expect(appState.people).toBeDefined();
  });

  it('passes people property of state to PersonList as prop', () => {
    const personList = appWrapper.find(PersonList);

    // Checks if the PersonList component has a prop called people and if it equals to the people property inside the appWrapper component state
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });

  it('renders an add user form', () => {
    const addUserForm = appWrapper.find(AddUserForm);
    expect(addUserForm).toHaveLength(1);
  });

});
