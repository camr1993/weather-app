import React, { Component, Fragment } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import WeatherPage from './WeatherPage'
import LocationForm from './LocationForm'
import Test from './Test'
import { connect } from 'react-redux'
// import axios from 'axios'

// const Routes = () => {
//   return (
//     <Switch>
//       <Route path="/weatherpage" component={WeatherPage} />
//       <Route path="/test" component={Test} />
//       <Route component={LocationForm} />
//     </Switch>
//   )
// }

class Routes extends Component {
  render() {
    console.log('rerendered')
    return (
      <Switch>
        <Route path="/weatherpage" component={WeatherPage} />
        <Route path="/test" component={Test} />
        <Route component={LocationForm} />
      </Switch>
    )
  }
}

export default Routes
// WITHROUTER???
