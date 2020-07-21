import React, { Component } from 'react'

class AddUserForm extends Component {
  state = {
    firstName: "",
    lastName: ""
  }
  
  render() {
    return (
      <form>
        <label htmlFor="first-name">First name</label>
        <input type="text" value={this.state.firstName} id="first-name" />
        <label htmlFor="last-name">Last name</label>
        <input type="text" value={this.state.lastName} id="last-name" />
        <button>Submit</button>
      </form>
    )
  }
}

export default AddUserForm