import React, { Component} from 'react'
import './App.css'
import PersonList from './PersonList'
import AddUserForm from './AddUserForm'

class App extends Component {
  state = {
    people: [{ firstName: "Jane", lastName: "Curtin" }]
  };

  render() {
    return (
      <div className="App">
        <AddUserForm />
        <PersonList people={this.state.people} />
      </div>
  )};
}

export default App;
