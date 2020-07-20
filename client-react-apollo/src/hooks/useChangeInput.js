import { useState } from 'react'

export const useChangeInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => setValue(e.target.value)

  return {
    value,
    onChange: handleChange
  }
}
