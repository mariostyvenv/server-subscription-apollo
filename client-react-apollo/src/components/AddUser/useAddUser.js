import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../apollo/mutations'

export const useAddUser = () => {
  const [register, { error }] = useMutation(REGISTER_USER)
  const [mensaje, setMensaje] = useState(null)
  const [isDisabled, setDisabled] = useState(false)
  const [info, setInfo] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')

  const handleChangeUser = e => setUsername(e.target.value)
  const handleChangePass = e => setPassword(e.target.value)
  const handleChangeAge = e => setAge(e.target.value)

  const handleSubmit = async e => {
    e.preventDefault()
    if (username !== '' && password !== '' && age !== '') {
      try {
        const { data } = await register({
          variables: {
            input: {
              username: username,
              password: password,
              age: parseInt(age)
            }
          }
        })

        setDisabled(true)
        setMensaje(`User ${data.register.user.username} successfully added ✔`)

        setInfo(data)

        setTimeout(() => {
          setMensaje(null)
          setDisabled(false)
          setUsername('')
          setPassword('')
          setAge('')
        }, 2000)
      } catch (err) {
        setDisabled(false)
        setMensaje(err.message.replace('GraphQL error: ', ''))
        setTimeout(() => {
          setMensaje(null)
        }, 8000)
      }
    }
  }

  return {
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
  }
}
