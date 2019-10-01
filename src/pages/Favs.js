import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

/**
 * Inicialmente la declaración era nombrando el componente.
 * export const Favs = () => (
 *
 * Para usa esar React Lazy se requiere que sea por default.
 */
export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavsWithQuery />
  </Layout>
)
