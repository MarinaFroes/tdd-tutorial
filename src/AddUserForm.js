import React, { Component } from 'react'

class AddUserForm extends Component {
  state = {
    firstName: "",
    lastName: ""
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.firstName} id="first-name" />
        <input type="text" value={this.state.lastName} id="last-name" />
      </form>
    )
  }
}

export default AddUserForm