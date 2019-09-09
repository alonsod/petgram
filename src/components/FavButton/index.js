import React from 'react'
import { Button } from './styles'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

export const FavButton = ({ liked, likes, onClick }) => {
  const IconFav = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <IconFav size='32px' /> {likes} likes!
    </Button>
  )
}
