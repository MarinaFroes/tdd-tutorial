import React, { Component } from 'react'
import AddUserFormContext from './AddUserFormContext'

class SubmitButton extends Component {
  static contextType = AddUserFormContext;

  render() {
    const { text } = this.props;
    
    return <button type='submit'>{ text }</button>
  }
}

export default SubmitButton
