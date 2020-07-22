import React, { Component } from 'react'
import TextInput from './TextInput'

class AddUserForm extends Component {

  render() {
    return (
      <form>
        <TextInput name="first-name" label="First Name" type="text"/>
        <TextInput name="last-name" label="Last Name" type="text"/>
      </form>
    )
  }
}

export default AddUserForm