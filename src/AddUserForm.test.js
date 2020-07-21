import React from 'react'
import AddUserForm from './AddUserForm'
import { shallow } from 'enzyme'

describe('AddUserForm', () => {
  let addUserFormWrapper;

  beforeAll(() => {
    addUserFormWrapper = shallow(<AddUserForm />);
  });

  test('renders one form element', () => {
    expect(addUserFormWrapper.find('form')).toHaveLength(1);
  });

  test('renders two input fields', () => {
    expect(addUserFormWrapper.find('input')).toHaveLength(2);
  });

  test('renders two labels', () => {
    expect(addUserFormWrapper.find('label')).toHaveLength(2);
  });

  test('renders a submit button', () => {
    expect(addUserFormWrapper.find('button')).toHaveLength(1);
  });
});