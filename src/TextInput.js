import React, { Component } from 'react'
import AddUserFormContext from './AddUserFormContext'

class TextInput extends Component {
  static contextType = AddUserFormContext;

  render() {
    const { name, type, label } = this.props;

    return (
      <label htmlFor={name}>
        {label}
        <input type={type} name={name} id={name} />
      </label>
    )
  }
}

export default TextInput
