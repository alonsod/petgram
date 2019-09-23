import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  /**
   * Recordar que, lo siguiente:
   *       <Input
   *     placeholder='Email' value={email.value}
   *     onChange={email.handleOnChange}
   *   />
   *
   * Equivale a (rest Operator):
   * <Input
   *     placeholder='Email' {...email}
   *   />
   *
   */

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment key='key'>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder='Email' {...email}
        />
        <Input
          disabled={disabled}
          placeholder='Password' type='password' {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {
        error && (
          <Error>{error}</Error>
        )
      }
    </Fragment>
  )
}
