import { WeatherProvider } from './context/WeatherProvider'
import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return (
    <WeatherProvider>
      <Header />
      <Main />
    </WeatherProvider>
  )
}

export default App
