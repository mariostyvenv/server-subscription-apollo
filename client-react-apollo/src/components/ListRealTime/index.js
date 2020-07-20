import React from 'react'
import styled from 'styled-components'
import { useSubscription } from '@apollo/client'
import { SUSCRIPTION_REGISTER_USER } from '../../apollo/suscriptions'
import { Spinner } from '../../components/Spinner'

const StyledLoading = styled.code`
  font-size: 2rem;
  color: palevioletred;
`

export const ListRealTime = () => {
  const { data, loading, error } = useSubscription(SUSCRIPTION_REGISTER_USER)

  if (loading)
    return (
      <StyledLoading>
        Listening...
        <Spinner />
      </StyledLoading>
    )

  if (error) return <div>Error! {error.message}</div>

  return <code>{JSON.stringify(data)}</code>
}
