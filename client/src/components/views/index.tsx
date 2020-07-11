import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import LogsListView from './logs/logsList'

const RootIndexView = () => {
  return (
    <div>
      <h1>todo nav bar</h1>
      <Link to="/">index</Link>
      <br />
      <Link to="/logs">logs</Link>
      <hr />
      <Switch>
        <Route path="/logs">
          <LogsListView />
        </Route>
        <Route path="/" strict>
          <h1>/index</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default RootIndexView
