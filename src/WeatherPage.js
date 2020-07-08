import React from 'react'
import './WeatherPage.css'
import { connect } from 'react-redux'

const DisconnectedWeatherPage = (props) => {
  const weatherInfo = props.weatherInfo
  return (
    <div id="bg">
      {weatherInfo && (
        <div className="rain">
          <div>{weatherInfo.name}</div>
          <div>Main: {weatherInfo.weather[0].main}</div>
          <div>Description: {weatherInfo.weather[0].description}</div>
          {/* <div className="rain"></div> */}
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
