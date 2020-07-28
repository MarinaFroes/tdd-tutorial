import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { mount } from 'enzyme'

import TextInput from './TextInput'
import AddUserForm from './AddUserForm'

describe('TextInput', () => {
  let textInputWrapper;
  let input;
  let label;

  beforeAll(() => {
    textInputWrapper = mount(<TextInput type="text" name="first-name" label="First Name" />);
    input = textInputWrapper.find('input');
    label = textInputWrapper.find('label');
  });

  test('renders one text input', () => {
    expect(input).toHaveLength(1);
  });

  test('renders one input type text', () => {
    expect(input.prop('type')).toEqual('text');
  });

  test('renders one input with name and id of first-name', () => {
    expect(input.prop('name')).toEqual('first-name');
    expect(input.prop('id')).toEqual('first-name');
  });

  test('renders one label', () => {
    expect(label).toHaveLength(1);
  });

  test('renders a label with the text of First Name', () => {
    expect(label.text()).toEqual('First Name');
  });

  test('renders a label with htmlFor equal to first-name', () => {
    expect(label.prop('htmlFor')).toEqual('first-name');
  });

  test('reads and sets input value when using context to store the data', () => {
    const wrapper = document.createElement('div');

    ReactDOM.render(
      <AddUserForm>
        <TextInput name="first-name" label="First Name" />
      </AddUserForm>,
      wrapper
    )

    const inputElement = wrapper.querySelector('input');

    TestUtils.Simulate.change(inputElement, { target: { value: 'Peter Parker' } });

    expect(input.value).toEqual('Peter Parker');
  });
})