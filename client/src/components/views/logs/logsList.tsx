import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import LogDetailsView from './logDetails'

const LogsListView = () => {
  return (
    <Switch>
      <Route path="/logs/:id">
        <h1>/log details</h1>
        <LogDetailsView />
      </Route>
      <Route path="/logs" strict>
        <h1>/logs list</h1>
        <Link to="/logs/qsdqsd">single log</Link>
      </Route>
    </Switch>
  )
}

export default LogsListView
