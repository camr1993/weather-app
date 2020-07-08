import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import WeatherPage from './WeatherPage'
import LocationForm from './LocationForm'
import Rain from './Rain'

const Routes = () => {
  return (
    <Switch>
      <Route path="/weatherpage" component={WeatherPage} />
      <Route path="/rain" component={Rain} />
      <Route component={LocationForm} />
    </Switch>
  )
}

export default withRouter(Routes)
