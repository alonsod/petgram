import React, { useState } from 'react'

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}

export const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPasswortd] = useState('')

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Email' value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder='Password' type='password' value={password}
        onChange={e => setPasswortd(e.target.value)}
      />
      <button>Iniciar Sesión</button>
    </form>
  )
}
