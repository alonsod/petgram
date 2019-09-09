import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWthQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

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
  */
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
          )
          // en el package.json le agregamos la opción de compilación:
          // --history-api-fallback
          // si hay un 404 cargara el index
          // También se modifico el webpack.config.js
          // para agregar al output el publicPath
      }

    </div>
  )
}
