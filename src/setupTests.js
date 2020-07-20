// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Create an instance of an adapter for React 16 to wrap the component 
  // This is how Enzyme figures out how to connect itself to Jest
configure({ adapter: new Adapter()})