import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// inicialmente de aquí salio la lista de valores.
// Pero ahora viene del servicio.
//import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
  // valor inicial de useState un array vacio
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(function() {
    fetch('https://gram-api-dac.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []) 
  // Para el segundo parémetro se usa un array vacío(dependencias), 
  // solo se ejecuta cuando se monta el compomente, en el primer renderizado  .

  useEffect(function(){
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    
    // devover una función para limpiar el eventListener
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={ fixed }>
      {
        categories.map(category =>
          <Item key={category.id} >
            <Category {...category} />
          </Item>)
      }
    </List>
  )
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}
