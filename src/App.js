import React from 'react'

import AuthLayout from './layouts/Aut'

import AdminLayout from './layouts/Admin'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/auth' render={props => <AuthLayout {...props} />} />
          <Route path='/admin' render={props => <AdminLayout {...props} />} />
          <Redirect from='/' to='/auth/login' />
        </Switch>
      </Router>
    </div>
  )
}

export default App
