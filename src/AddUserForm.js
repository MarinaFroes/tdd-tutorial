import React, { Component } from 'react'

class AddUserForm extends Component {

  render() {
    return (
      <form>
        <label>
          <input type="text" id="first-name"/>
        </label>
        <label>
          <input type="text" id="last-name"/>
        </label>
        <button></button>
      </form>
    )
  }
}

export default AddUserForm