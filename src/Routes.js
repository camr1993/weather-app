import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './Test'
import LocationForm from './LocationForm'

const Routes = () => {
  return (
    <Switch>
      <Route path="/test" component={Test} />
      <Route component={LocationForm} />
    </Switch>
  )
}

export default Routes

// WITHROUTER???
