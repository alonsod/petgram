import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment key='kay'>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables })
                      .then(activateAuth)
                  }
                  const errorMsg = error && 'El usuario ya existe o ocurrio algún error'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>

            <UserForm onSubmit={activateAuth} title='Iniciar Sesión' />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
