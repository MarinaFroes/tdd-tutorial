import React from 'react'

const PersonList = ({ people = [] }) => <ul>{people.map((person, index) => <li key={index}>{person.firstName} {person.lastName}</li>)}</ul>

export default PersonList
