import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await axios.get(apiUrl)

    console.log(response.data)
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade" />
      <button onClick={searchCity}>Buscar</button>
    </div>
  )
}

export default App
