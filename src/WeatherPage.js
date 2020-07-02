import React from 'react'
import { connect } from 'react-redux'

const DisconnectedWeatherPage = (props) => {
  console.log('PROPS', props.weatherInfo)
  const weather = props.weatherInfo.weather
  const city = props.weatherInfo.name
  console.log('WEATHER', weather)
  console.log('CITY', city)
  return (
    <div>
      {weather && (
        <div>
          <div>{city}</div>
          <div>{weather[0].main}</div>
          <div>{weather[0].description}</div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weather,
  }
}

const WeatherPage = connect(mapStateToProps)(DisconnectedWeatherPage)

export default WeatherPage
