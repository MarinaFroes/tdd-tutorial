import React, { Component } from 'react'
import AddUserFormContext from './AddUserFormContext'

class SubmitButton extends Component {
  static contextType = AddUserFormContext;

  render() {
    const { text } = this.props;
    
    return <button type='submit' disabled={this.context.isSubmitting}>{ text }</button>
  }
}

export default SubmitButton
