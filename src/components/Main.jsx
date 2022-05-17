import useWeather from '../hooks/useWeather'
import Spinner from './Spinner'
import Result from './Result'
import Form from './Form'

const Main = () => {
    const { result, loading, alert } = useWeather()

    return (
        <>
            <main className="dos-columnas">
                <Form />

                <div className="contenedor clima">
                    {loading
                        ? <Spinner />
                        : Object.keys(result).length > 0 ? <Result />
                            : alert
                                ? <p>{alert}</p>
                                : <span>Ingresa una ciudad y un país para comenzar :)</span>}
                </div>
            </main>
        </>
    )
}

export default Main