import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  function searchCity() {
    console.log(inputRef.current.value)
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
