import React from 'react'
import SubmitButton from './SubmitButton'
import { mount } from 'enzyme'

describe('SubmitButton', () => {
  let submitBtnWrapper;
  let btn;

  beforeAll(() => {
    submitBtnWrapper = mount(<SubmitButton text="Add person" />);
    btn = submitBtnWrapper.find('button');
  });

  test('renders one button', () => {
    expect(btn).toHaveLength(1);
  });

  test('renders button with text Add Person', () => {
    expect(btn.text()).toEqual('Add person');
  });

  test('renders button with type submit', () => {
    expect(btn.prop('type')).toEqual('submit');
  });
});