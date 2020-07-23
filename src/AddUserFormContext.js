import { createContext } from 'react'

export default createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => { }
});