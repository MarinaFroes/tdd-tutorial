import React from 'react'

const TextInput = ({ name, type }) => {
  return (
    <input type={type} name={name} id={name} />
  )
}

export default TextInput
