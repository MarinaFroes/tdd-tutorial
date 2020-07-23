import React from 'react'
import AddUserForm from './AddUserForm'
import { mount } from 'enzyme'

describe('AddUserForm', () => {
  
  test('calls onSubmit prop when form is submitted', () => {
    const onSubmitFn = jest.fn();
    const addUserFormWrapper = mount(<AddUserForm onSubmit={onSubmitFn} />);

    const form = addUserFormWrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
