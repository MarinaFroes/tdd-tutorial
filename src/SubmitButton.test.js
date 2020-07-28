import React from 'react'
import TestUtils from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import SubmitButton from './SubmitButton'
import AddUserForm from './AddUserForm'

describe('SubmitButton', () => {
  let submitBtnWrapper;
  let btn;

  beforeAll(() => {
    submitBtnWrapper = mount(<SubmitButton text='Add person' />);
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

  test('disables the submit button during submission and enables it when done', async () => {
    const onSubmitFn = jest.fn(async () => { await new Promise(resolve => resolve()) });
    
    const wrapper = document.createElement('div');
    ReactDOM.render(
      <AddUserForm onSubmit={onSubmitFn}>
        <SubmitButton>Add Person</SubmitButton>
      </AddUserForm>,
      wrapper
    );

    const button = wrapper.querySelector('button');
    const form = wrapper.querySelector('form');

    TestUtils.Simulate.submit(form);
    expect(button.disabled).toBeTruthy();

    await onSubmitFn.mock.results[0].value;
    expect(button.disabled).toBeFalsy();
  });
});