import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

const clientApollo = new ApolloClient({
    uri: 'https://gram-api-dac.now.sh/graphql'
})
// Por temas de seguridad no es recomendable, escribir en el body. Script de terceros lo pueden acceder.
ReactDOM.render(
    <ApolloProvider client={ clientApollo }>
        <App />
    </ApolloProvider>  
    , document.getElementById('App'))
