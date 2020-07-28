import React, { Component } from 'react'
import AddUserFormContext from './AddUserFormContext'

class AddUserForm extends Component {
  state = {
    data: {},
    isSubmitting: false
  }

  onSubmit = async e => {
    e.preventDefault();
    this.setState({
      isSubmitting: true
    });
    await this.props.onSubmit();
    this.setState({
      isSubmitting: false
    })
  }

  // Return the value in data if it exists, otherwise it returns the provided default value
  getInputValue = (name, defaultValue = '') => this.state.data[name] || defaultValue;

  inputChange = name => e => {
    const targetValue = e.target.value;

    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [name]: targetValue
      }
    }))
  }

  render() {
      //  getInputValue and inputChange are available in any consumer of the AddUserFormContext.Provider
    return (
      <AddUserFormContext.Provider value={
        {
          getInputValue: this.getInputValue,
          inputChange: this.inputChange,
          isSubmitting: this.state.isSubmitting
        }
      }>
        <form onSubmit={this.onSubmit}>
          {this.props.children}
        </form>
      </AddUserFormContext.Provider>
    )
  }
}

export default AddUserForm
