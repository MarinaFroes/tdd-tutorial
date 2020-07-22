import React from 'react'
import TextInput from './TextInput'
import { mount } from 'enzyme'

describe('TextInput', () => {
  let textInputWrapper;
  let input;

  beforeAll(() => {
    textInputWrapper = mount(<TextInput type="text" name="first_name" label="First Name" />);
    input = textInputWrapper.find('input');
  });

  test('renders one text input', () => {
    expect(input).toHaveLength(1);
  });

  test('renders one input type text', () => {
    expect(input.prop('type')).toEqual('text');
  });

  test('renders one input with name and id of first-name', () => {
    expect(input.prop('name')).toEqual('first_name');
    expect(input.prop('id')).toEqual('first_name');
  });
})