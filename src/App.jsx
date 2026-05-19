import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input type="text" placeholder="Digite a cidade" />
      <button>Buscar</button>
    </div>
  )
}

export default App
