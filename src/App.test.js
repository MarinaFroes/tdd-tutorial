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

  // .find() from Jest let us pass a component that we want to find in the current component
  it('', () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(PersonList);
  });
});
