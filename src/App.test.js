import React from 'react'
import App from './App'
import PersonList from './PersonList'
import { shallow } from 'enzyme'

// describe = test suite
describe('App', () => {
  // it = test
  it('renders without crashing', () => {
    // appWrapper gets the App component (creates an instance of it) so we can inspect it
    // shallow - only renders the component, not its entire child tree
    const appWrapper = shallow(<App />);
  });

  it('renders a person list', () => {
    const appWrapper = shallow(<App />);
    // .find() from Jest let us pass a component that we want to find in the current component and assign it to an array
    const personList = appWrapper.find(PersonList);
    // expect() will check if the array personList has the length of 1 - I should have only one component called PersonList 
    expect(personList).toHaveLength(1);
  });

  it('has state', () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();

    // Check if the App state is not null - first case scenario
    expect(appState).not.toBeNull();
  })
});
