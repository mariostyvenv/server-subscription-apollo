import { useState } from 'react'

export const useLogin = name => {
  const [isOk, setOk] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    name.value !== '' && setOk(true)
  }

  return {
    isOk,
    handleSubmit
  }
}
