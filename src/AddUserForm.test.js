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

  test('renders two input fields with type text', () => {
    expect(addUserFormWrapper.find('input').filterWhere((item) => {
      return item.prop('type') === 'text';
    })).toHaveLength(2);
  });

  test('renders an input with id of first-name', () => {
    expect(addUserFormWrapper.find('input#first-name')).toHaveLength(1);
  });

  test('renders an input with id of last-name', () => {
    expect(addUserFormWrapper.find('input#last-name')).toHaveLength(1);
  });

  test('renders two labels', () => {
    expect(addUserFormWrapper.find('label')).toHaveLength(2);
  });

  test('renders a label with the text First Name', () => {
    expect(addUserFormWrapper.find('label').filterWhere((item) => {
      return item.text() === 'First name';
    })).toHaveLength(1);
  });

  test('renders a label with the text Last Name', () => {
    expect(addUserFormWrapper.find('label').filterWhere((item) => {
      return item.text() === 'Last name';
    })).toHaveLength(1);
  });

  test('renders a label with htmlFor property of first-name', () => {
    expect(addUserFormWrapper.find('label').filterWhere((item) => {
      return item.prop('htmlFor') === 'first-name';
    })).toHaveLength(1);
  });

  test('renders a label with htmlFor property of last-name', () => {
    expect(addUserFormWrapper.find('label').filterWhere((item) => {
      return item.prop('htmlFor') === 'last-name';
    })).toHaveLength(1);
  });

  test('renders a submit button', () => {
    expect(addUserFormWrapper.find('button')).toHaveLength(1);
  });
});