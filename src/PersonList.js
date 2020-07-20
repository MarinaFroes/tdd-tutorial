import React from 'react'

const PersonList = (props) => <ul>{props.people && props.people.length === 1 ? <li></li> : undefined}</ul>;

export default PersonList
