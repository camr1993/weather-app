import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WeatherPage from './WeatherPage'
import LocationForm from './LocationForm'
// import axios from 'axios'

const Routes = () => {
  // async componentDidMount() {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e8551b988fd858314363ae664d8bdb9c`
  //     )
  //     console.log(data)
  //   } catch (error) {
  //     console.log(`Get Weather Error: ${error}`)
  //   }
  // }

  return (
    <Switch>
      <Route path="/weatherpage" component={WeatherPage} />
      <Route component={LocationForm} />
    </Switch>
  )
}

export default Routes
// WITHROUTER???
