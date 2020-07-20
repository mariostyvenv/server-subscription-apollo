import React from 'react'

export const List = ({ info }) => {
  const {
    register: { user }
  } = info
  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
