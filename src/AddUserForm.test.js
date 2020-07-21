import React from 'react'
import AddUserForm from './AddUserForm'
import { shallow } from 'enzyme'

describe('AddUserForm', () => {
  let addUserFormWrapper;

  beforeAll(() => {
    addUserFormWrapper = shallow(<AddUserForm />);
  });

  it('renders one form element', () => {
    expect(addUserFormWrapper.find('form')).toHaveLength(1);
  });

  it('renders two input fields', () => {
    expect(addUserFormWrapper.find('input')).toHaveLength(2);
  });
});