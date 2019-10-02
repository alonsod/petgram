import React from 'react'
import { Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const IconFav = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <IconFav size='32px' /> {likes} likes!
    </Button>
  )
}
// nombre de la propiedad: Tipo de dato de la propiedad.
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
