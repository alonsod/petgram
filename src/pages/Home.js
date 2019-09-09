import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

/**
 * En la versión 14.1 de standard es necesario usar el componente
 * Fragment como React.Fragment
 *
 * @param {*} param0
 */

export const Home = ({ categoryId }) => {
  return (
    <Fragment key='key'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  )
}
