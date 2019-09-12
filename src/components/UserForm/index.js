import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  /**
   * Recordar que, lo siguiente:
   *       <input
   *     placeholder='Email' value={email.value}
   *     onChange={email.handleOnChange}
   *   />
   *
   * Equivale a (rest Operator):
   * <input
   *     placeholder='Email' {...email}
   *   />
   *
   */

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder='Email' {...email}
      />
      <input
        placeholder='Password' type='password' {...password}
      />
      <button>Iniciar Sesión</button>
    </form>
  )
}
