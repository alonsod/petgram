import { useState } from 'react'


// hook
export function useLocalStorage (key, initialValue) {
    const [storedValue, setValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
      } catch(e) {
        return initialValue
      }
    })
  
    const setLocalStorage = value => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
      } catch (e) {
        console.error(e)
      }
    }
  
       // el hook devuelve dos cosas
    return [storedValue, setLocalStorage]
}