import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import Items from './Items'
import ItemDetail from './ItemDetail'
import Home from './Home'

const Routes = props => {
  return (
    <Switch>
      <Route
        path="/items/:id"
        render={routeProps => <ItemDetail {...routeProps} {...props} />}
      />
      <Route
        path="/items"
        render={routeProps => <Items {...routeProps} {...props} />}
      />
      <Route
        path="/"
        render={routeProps => <Home {...routeProps} {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
