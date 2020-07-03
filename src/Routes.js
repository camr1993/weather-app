import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import WeatherPage from './WeatherPage'
import LocationForm from './LocationForm'

const Routes = () => {
  return (
    <Switch>
      <Route path="/weatherpage" component={WeatherPage} />
      <Route component={LocationForm} />
    </Switch>
  )
}

export default withRouter(Routes)
