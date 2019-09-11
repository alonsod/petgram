
import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  /*
    La dependecia @babel/plugin-syntax-dynamic-import en la versión 7.5.0
    se añadió al paquete @babel/preset-env. Por lo tanto se puede usar la función import.
   */
  useEffect(function () {
    // console.log(element.current)
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        console.log({ isIntersecting })
        if (isIntersecting) {
          // console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element]) // segundo parametro.  que solo se ejecute cuando cambie el elemento.

  return [show, element]
}
