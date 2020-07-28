import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
// import { mount } from 'enzyme'

import AddUserForm from './AddUserForm'
import TextInput from './TextInput'

describe('AddUserForm', () => {
  
  // test('calls onSubmit prop when form is submitted', () => {
  //   const onSubmitFn = jest.fn();
  //   const addUserFormWrapper = mount(<AddUserForm onSubmit={onSubmitFn} />);

  //   const form = addUserFormWrapper.find('form');
  //   form.simulate('submit');
  //   expect(onSubmitFn).toHaveBeenCalledTimes(1);
  // });
  test('gets the form state from onSubmit function', () => {
    const wrapper = document.createElement('div');

    const onSubmitFn = jest.fn(data => data);

    ReactDOM.render(
      <AddUserForm onSubmit={onSubmitFn}>
        <TextInput name="first-name" label="First Name" />
      </AddUserForm>,
      wrapper
    );

    const input = wrapper.querySelector('input');
    const form = wrapper.querySelector('form');

    TestUtils.Simulate.change(input, { target: { value: 'Peter Parker' } });
    TestUtils.Simulate.submit(form);

    expect(onSubmitFn).toHaveBeenCalledTimes(1);
    expect(onSubmitFn.mock.results[0].value).toEqual({
      'first-name': 'Peter Parker'
    })

  });
});
