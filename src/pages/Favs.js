import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => (
  <Fragment key='key'>
    <h1>Favs</h1>
    <FavsWithQuery />
  </Fragment>
)
