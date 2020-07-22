import React, { Component } from 'react'

class AddUserForm extends Component {

  render() {
    return (
      <form>
        <label htmlFor="first-name">First name
          <input type="text" id="first-name"/>
        </label>
        <label htmlFor="last-name">Last name
          <input type="text" id="last-name"/>
        </label>
        <button></button>
      </form>
    )
  }
}

export default AddUserForm