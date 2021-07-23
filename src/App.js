import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import Login from './pages/Login'

import './app.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
