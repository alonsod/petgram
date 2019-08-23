import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
// Por temas de seguridad no es recomendable, escribir en el body. Script de terceros lo pueden acceder.
ReactDOM.render(<App />, document.getElementById('App'))
