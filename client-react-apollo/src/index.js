import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyle } from './assets/styles'
import App from './App'
import { client } from './apollo'

const Wrapper = () => {
  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
)
