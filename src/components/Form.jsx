import useWeather from '../hooks/useWeather'
import { useState } from 'react'

const Form = () => {
    const { data, handleData, getWeather } = useWeather()
    const [alert, setAlert] = useState('')
    const { city, country } = data

    const handleSubmit = evt => {
        evt.preventDefault()

        if (Object.values(data).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }

        setAlert('')
        getWeather({ city, country })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {alert && <p>{alert}</p>}

                <div className="campo">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={handleData}
                        placeholder="Ej: Madrid"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="country">País</label>
                    <select
                        name="country"
                        id="country"
                        value={country}
                        onChange={handleData}
                    >
                        <option value="">-- Selecciona --</option>
                        <option value="MX">México</option>
                        <option value="US">Estados Unidos</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Consultar Clima"
                />
            </form>
        </div>
    )
}

export default Form