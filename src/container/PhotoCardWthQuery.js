import React from 'react'
import { PhotoCard} from '../components/PhotoCard'
import {gql} from 'apollo-boost'
import {Query} from 'react-apollo'

const query =gql`
query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

//  En las reder Props no se puede renderizar un componente, sino una función.
export const PhotoCardWithQuery = ({ id }) => (
    <Query query={query} variables ={{id}} >
        {
            ({loading, error, data}) => {
                //console.log(data)
                const { photo = {}} = data
                return <PhotoCard {...photo } />
            }
        }
    </Query>
)