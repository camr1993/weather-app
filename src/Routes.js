import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import WeatherPage from './WeatherPage'
import LocationForm from './LocationForm'
import LocationForm2 from './LocationForm2'
import LocationForm3 from './LocationForm3'

const Routes = () => {
  return (
    <Switch>
      <Route path="/weatherpage" component={WeatherPage} />
      <Route path="/test" component={LocationForm2} />
      <Route path="/test2" component={LocationForm3} />
      <Route component={LocationForm} />
    </Switch>
  )
}

export default withRouter(Routes)
// WITHROUTER???
