import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/index'
import Main from './pages/Main/index'

import { Layout } from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/welcome/:name' component={Main} />
        </Switch>
      </Router>
    </Layout>
  )
}
