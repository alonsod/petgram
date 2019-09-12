import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment key='kay'>
            <UserForm onSubmit={activateAuth} title='Registrarse' />
            <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
