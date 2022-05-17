import WeatherContext from '../context/WeatherProvider'
import { useContext } from 'react'

const useWeather = () => {
    return useContext(WeatherContext)
}

export default useWeather