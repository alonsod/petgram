import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
import Context from './Context'

const clientApollo = new ApolloClient({
  uri: 'https://gram-api-dac.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError &&
      networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.ref = '/'
    }
  }
})
// Por temas de seguridad no es recomendable, escribir en el body. Script de terceros lo pueden acceder.
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={clientApollo}>
      <App />
    </ApolloProvider>
  </Context.Provider>
  , document.getElementById('App'))
