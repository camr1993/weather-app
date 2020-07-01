import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './Test'
import LocationForm from './LocationForm'
import axios from 'axios'

export default class Routes extends Component {
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e8551b988fd858314363ae664d8bdb9c`
      )
      console.log('DATA:', data)
    } catch (error) {
      console.log(`Get Weather Error: ${error}`)
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/test" component={Test} />
        <Route component={LocationForm} />
      </Switch>
    )
  }
}

// WITHROUTER???
