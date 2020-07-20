import React from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'
import { Title, Subtitle } from './style'
import { AddUser } from '../../components/AddUser'
import { useMain } from './useMain'

const Main = () => {
  const { name = 'Thor ?' } = useParams()
  const { loading, error, data } = useMain(name)

  if (loading && !error) return <Spinner />

  if (error)
    return (
      <h1>
        Error response{' '}
        <span role='img' aria-label='error'>
          🤦‍♂️
        </span>
        ...
      </h1>
    )

  return (
    <>
      <Title>
        {data.hello.saludar} ‍
        <span role='img' aria-label='acid'>
          😵
        </span>
      </Title>
      <Subtitle inputColor='palevioletred'>
        Trasteando con React, apollo-client and GraphQL
      </Subtitle>
      <AddUser />
    </>
  )
}

export default Main
