import React, { Component } from 'react'

export default class LocationForm extends Component {
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
    // do something here
    this.setState({
      location: '',
    })
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
      </form>
    )
  }
}
