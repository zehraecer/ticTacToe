import { createContext, useContext, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Box } from './components/Box'
import { Modal } from './components/Modal'

export const userContext = createContext()

function App() {
  const [nextPlayer, setNextPlayer] = useState("./x.svg")
  const [winner, setWinner] = useState(false)
  const [cell, setCell] = useState(Array(9).fill(null))

  return (
    <userContext.Provider value={{ nextPlayer, setNextPlayer, winner, setWinner, cell, setCell }}>
      <div className="container">

        <Header />
        <Box />

      </div>
      {winner === true ? < Modal /> : null}

    </userContext.Provider>
  )
}

export default App
