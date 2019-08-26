import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect (function () {
    //console.log(element.current)

    const observer = new window.IntersectionObserver(function (entries){
      //console.log(entries)
      const { isIntersecting } = entries[0]
      console.log({isIntersecting})
      if (isIntersecting) {
        //console.log('si')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element]) // segundo parametro.  que solo se ejecute cuando cambie el elemento.

 // if(!show) return null // esto no funciono porque no devuelve algun elemento.

  return (
    <Article ref = {element}>
      {
        show && <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </Fragment>
      }

    </Article>
  )
}
