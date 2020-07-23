import React, { Component } from 'react'
import AddUserFormContext from './AddUserFormContext'

class AddUserForm extends Component {
  state = {
    name: ""
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <AddUserFormContext.Provider value={null}>
        <form onSubmit={this.onSubmit}>
          {this.props.children}
        </form>
      </AddUserFormContext.Provider>
    )
  }
}

export default AddUserForm
