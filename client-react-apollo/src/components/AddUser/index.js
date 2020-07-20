import React from 'react'
import { FormGroup, Button, Input, Alerta, Card, Subtitle, Grid } from './style'
import { useAddUser } from './useAddUser'
import { List } from '../List'
import { ListRealTime } from '../ListRealTime'

export const AddUser = () => {
  const {
    mensaje,
    isDisabled,
    username,
    password,
    age,
    handleChangeUser,
    handleChangePass,
    handleChangeAge,
    handleSubmit,
    error,
    info
  } = useAddUser()

  const ViewMessage = () => (
    <Alerta inputColor='palevioletred'>{mensaje}</Alerta>
  )

  if (error) return <h1>Error the response</h1>

  return (
    <>
      <Grid>
        <Card>
          <Subtitle>Add user</Subtitle>
          <form onSubmit={handleSubmit}>
            {mensaje && ViewMessage()}
            <FormGroup>
              <Input
                type='text'
                id='username'
                placeholder='Name'
                name='username'
                value={username}
                onChange={handleChangeUser}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={handleChangePass}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='number'
                id='age'
                name='age'
                placeholder='Age'
                value={age}
                onChange={handleChangeAge}
              />
            </FormGroup>
            <FormGroup>
              <Button disabled={isDisabled}>Send</Button>
              {isDisabled && <p>Wait moment...</p>}
            </FormGroup>
          </form>
        </Card>
        <Card>
          <Subtitle>Mutation</Subtitle>
          <FormGroup>
            {info && <List info={info}/>}
          </FormGroup>
        </Card>
        <Card>
          <Subtitle>Suscription</Subtitle>
          <ListRealTime />
        </Card>
      </Grid>
    </>
  )
}
