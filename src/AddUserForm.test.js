import React from 'react'
import AddUserForm from './AddUserForm'
import TextInput from './TextInput'
import { shallow } from 'enzyme'
import SubmitButton from './SubmitButton'

describe('AddUserForm', () => {
  let addUserFormWrapper;

  beforeAll(() => {
    addUserFormWrapper = shallow(<AddUserForm />);
  });

  test('renders one form element', () => {
    expect(addUserFormWrapper.find('form')).toHaveLength(1);
  });

  test('renders two TextInput', () => {
    expect(addUserFormWrapper.find(TextInput)).toHaveLength(2);
  });

  test('renders one SubmitButton', () => {
    expect(addUserFormWrapper.find(SubmitButton)).toHaveLength(1);
  });
});