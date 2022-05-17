import { useState, createContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
    const [data, setData] = useState({ city: '', country: '' })
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState({})
    const [alert, setAlert] = useState('')

    const handleData = evt => {
        setData({
            ...data,
            [evt.target.name]: evt.target.value
        })
    }

    const getWeather = async ({ city, country }) => {
        try {
            setLoading(true)
            setResult({})
            setAlert('')
            
            const appId = import.meta.env.VITE_API_KEY
            const urlCoordinates = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appId}&limit=1`
            console.log(urlCoordinates)
            
            const { data: coordinates } = await axios.get(urlCoordinates)
            const { lat, lon } = coordinates[0]

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const { data: weather } = await axios.get(urlWeather)

            setResult(weather)
        }
        catch {
            setAlert('No hay resultados')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                data,
                alert,
                result,
                loading,
                getWeather,
                handleData,
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherProvider }

export default WeatherContext