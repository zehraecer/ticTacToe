import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <Header />

      </div>

    </>
  )
}

export default App
