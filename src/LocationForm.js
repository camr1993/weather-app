import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk } from './store/weather'

class DisconnectedLocationForm extends Component {
  constructor() {
    super()
    this.state = {
      location: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.getWeather(this.state.location)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          required
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (city) => dispatch(getWeatherThunk(city)),
  }
}

const LocationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedLocationForm)

export default LocationForm
