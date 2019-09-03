import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

// En este punto Anchor es del tipo Link y se cambia
// href por to.
// a la propiedad path se le agrego # para que no este vacía. valor inicial.
// al final se cambio Anchor por Link para quedar más claros.
export const Category = ({ cover = DEFAULT_IMAGE, path ='#', emoji = '?' }) => (
  <Link to={path} >
    <Image src={cover} />
    {emoji}
  </Link>
)
