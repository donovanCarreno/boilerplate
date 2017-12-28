// React
import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// Components
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
