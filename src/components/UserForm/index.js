import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
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

  return (
    <Fragment key='key'>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder='Email' {...email}
        />
        <Input
          placeholder='Password' type='password' {...password}
        />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  )
}
