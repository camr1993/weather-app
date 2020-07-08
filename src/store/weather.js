import axios from 'axios'
import history from '../history'

// Action Types:
const GET_WEATHER = 'GET_WEATHER'

// Action Creators / Thunks

const getWeather = (weatherObj) => ({
  type: GET_WEATHER,
  weatherObj,
})

export const getWeatherThunk = (city) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e8551b988fd858314363ae664d8bdb9c`
        // `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e8551b988fd858314363ae664d8bdb9c`
      )
      dispatch(getWeather(data))
      history.push('/weatherpage')
    } catch (error) {
      console.log('Get Weather THUNK Error: ', error)
    }
  }
}

// Initial State
const defaultWeather = {}

export default function weatherReducer(state = defaultWeather, action) {
  switch (action.type) {
    case GET_WEATHER:
      return action.weatherObj
    default:
      return state
  }
}
