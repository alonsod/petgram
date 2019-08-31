
import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
query getPhotos {
  photos {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`)
// ListOfPhotoCardsComponent, ya es un componente de orden superior HoC
// invocado por ListOfPhotoCards que le pasara como parámetro la lista de fotos(props).
const ListOfPhotoCardsComponent = ({ data: { photos =[] } } = {}) => {
  //console.log(props) // se imprime dos veces, una donde indica que se carga y otra donde ya tiene las fotos
  //el console.log de arriba funcionaba cuando recibia todas las props
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

// withPhotos  se inyecta al componente ListOfPhotoCardsComponent, 
// y nos regresa otro componente con los datos inyectados.
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)