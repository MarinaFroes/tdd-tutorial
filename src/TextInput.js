import React from 'react'

const TextInput = ({ name, type, label }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input type={type} name={name} id={name} />
    </label>
  )
}

export default TextInput
