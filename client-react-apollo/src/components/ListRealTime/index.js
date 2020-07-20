import React from 'react'
import { useSubscription } from '@apollo/client'
import { SUSCRIPTION_REGISTER_USER } from '../../apollo/suscriptions'
import { Spinner } from '../../components/Spinner'
import { emojis } from './emojis'
import { StyledLoading, Emoji, Texto } from './style'

export const ListRealTime = () => {
  const { data, loading, error } = useSubscription(SUSCRIPTION_REGISTER_USER)

  if (loading) {
    return (
      <StyledLoading>
        Listening...
        <Spinner />
      </StyledLoading>
    )
  }

  if (error) return <div>Error! {error.message}</div>

  const {
    newUser: { username }
  } = data

  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

  return (
    <>
      <Emoji>
        <span role='img' aria-label='random'>
          {randomEmoji()}
        </span>
      </Emoji>
      <h3>
        <Texto>{username}</Texto>
      </h3>
      <p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </p>
    </>
  )
}
