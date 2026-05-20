import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'
import Weather from './components/Weather/Weather'

function App() {
  const [weather, setWeather] = useState()
  const [weatherForecast, setWeatherForecast] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
    const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`

    const response = await axios.get(apiUrl)
    const responseForecast = await axios.get(apiUrlForecast)

    setWeather(response.data)
    setWeatherForecast(responseForecast.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <Weather weather={weather}/>} 
    </div>
  )
}

export default App
