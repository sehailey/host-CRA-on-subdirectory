import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Items, ItemDetail, Home, NotFound } from './components'

const Routes = props => {
  return (
    <Switch>
      <Route
        path={`${process.env.PUBLIC_URL}/items/:id`}
        render={routeProps => <ItemDetail {...routeProps} {...props} />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/items`}
        render={routeProps => <Items {...routeProps} {...props} />}
      />
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        render={routeProps => <Home {...routeProps} {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
