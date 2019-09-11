import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { User } from './pages/User'
import Context from './Context'
/**
 * Standard
 * Para la opción
 * Trailing spaces not allowed.eslint(no-trailing-spaces)
 *
 * Se eligio
 *
 */

/**
  *
  * "off" or 0 - turn the rule off
  * "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
  * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
  * https://eslint.org/docs/4.0.0/user-guide/configuring
  *
  * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
  * https://eslint.org/docs/rules/operator-linebreak
  * https://eslint.org/docs/rules/indent
  * https://eslint.org/docs/user-guide/configuring
  *
  *   // en algun momento en el package.son(eslintConfig) había agregado estas líneas para que no
  *   // me marcará el error el lint, pero era errores que se debian corregir.
  *   // Estaba en la sección:
  *     "rules": {
  *    "react/jsx-fragments": [2, "element"],
  *    "operator-linebreak": ["error", "after", { "overrides": { "?": "ignore", ":": "ignore" } }],
  *    "indent": ["error", 2, { "flatTernaryExpressions": true }]
  *  }
  */

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />

      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
              )
              : (
                <Router>
                  <NotRegisterUser path='/favs' />
                  <NotRegisterUser path='/user' />
                </Router>
              )
          )
        }
      </Context.Consumer>
      <NavBar />

      {
      // en el package.json le agregamos la opción de compilación:
      // --history-api-fallback
      // si hay un 404 cargara el index
      // También se modifico el webpack.config.js
      // para agregar al output el publicPath
      }
    </div>
  )
}
