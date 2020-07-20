import React from 'react'
import { Redirect } from 'react-router-dom'
import { ContainerLogin, Input, Section, Img, Title } from './style'
import { useChangeInput } from '../../hooks/useChangeInput'
import { useLogin } from './useLogin'

const URL_IMAGE = 'https://user-images.githubusercontent.com/38017835/87884670-8b451980-c9d5-11ea-9540-5f6965c52294.png'
const PLACEHOLDER = "What's your name ?"
const TITLE = 'Hey you'
const ALT = 'react, graphql and apollo'

const Login = () => {
  const name = useChangeInput('')
  const { isOk, handleSubmit } = useLogin(name)
  const RUTA = `/welcome/${name.value}`

  return (
    <ContainerLogin>
      <Section>
        <Img src={URL_IMAGE} alt={ALT} />
      </Section>
      <Title>{TITLE}</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder={PLACEHOLDER}
          name='name'
          id='name'
          {...name}
          required
        />
      </form>
      {isOk && <Redirect push to={RUTA} />}
    </ContainerLogin>
  )
}

export default Login
