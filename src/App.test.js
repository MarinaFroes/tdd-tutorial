import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

// describe = test suite
describe('App', () => {
  // it = test
  it('renders without crashing', () => {
    // appWrapper gets the App component (creates an instance of it) so we can inspect it
    // shallow - only renders the component, not its entire child tree
    const appWrapper = shallow(<App />);
  });
});
