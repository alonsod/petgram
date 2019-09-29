import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout'
/**
 * En la versión 14.1 de standard es necesario usar el componente
 * Fragment como React.Fragment
 *
 * Después se quito el Fragment por el Layout
 * @param {*} param0
 */

export const Home = ({ categoryId }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con petgram puedes encontrar fotos de animales domésticos bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}
