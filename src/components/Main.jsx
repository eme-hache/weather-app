import weatherImg from '../assets/weather-animated.gif'
import useWeather from '../hooks/useWeather'
import Spinner from './Spinner'
import Result from './Result'
import Form from './Form'

const Main = () => {
    const { result, loading, alert } = useWeather()

    return (
        <>
            <main className='content'>
                <Form />

                <div className="container clima">
                    {loading
                        ? <Spinner />
                        : Object.keys(result).length > 0 ? <Result />
                            : alert
                                ? <p>{alert}</p>
                                : <img
                                    className='weather-img'
                                    src={weatherImg}
                                    alt='weather'
                                />}
                </div>
            </main>
        </>
    )
}

export default Main