import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeatherThunk } from './store/weather'
import history from './history'
import PlacesAutocomplete from 'react-places-autocomplete'

class DisconnectedLocationForm extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(address) {
    this.setState({
      address,
    })
  }
  handleSelect() {}
  handleSubmit(event) {
    event.preventDefault()
    this.props.getWeather(this.state.address)
    history.push('/weatherpage')
  }

  render() {
    return (
      <div>
        <div>Test Autofill:</div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => {
            return (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input',
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    return <span>{suggestion.description}</span>
                  })}
                </div>
              </div>
            )
          }}
        </PlacesAutocomplete>
      </div>
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
