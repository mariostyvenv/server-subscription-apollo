import { useQuery } from '@apollo/client'
import { NAME_USER } from '../../apollo/querys'

export const useMain = name => {
  const params = {
    variables: {
      name: name
    }
  }

  const { loading, data, error } = useQuery(NAME_USER, params)

  return {
    loading,
    data,
    error
  }
}
