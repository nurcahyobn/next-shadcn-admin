import { useEffect, useState } from 'react'

interface LocalStorageProps<T> { key: string, defaultValue: T }

export default function useLocalStorage<T>({ key, defaultValue }: LocalStorageProps<T>) {

  const [value, setValue] = useState<T>(() => {
    let storedValue: T = defaultValue;
    if (typeof localStorage !== 'undefined') {
      const item = localStorage.getItem(key)
      storedValue = item !== null ? (JSON.parse(item) as T) : defaultValue
    }
    return storedValue;
  })

  useEffect(() => {

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    } else if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      console.log('Web Storage is not supported in this environment.');
    }


  }, [value, key])

  return [value, setValue] as const
}

