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

  return (
    <userContext.Provider value={{ nextPlayer, setNextPlayer, winner, setWinner }}>
      <div className="container">

        <Header />
        <Box />
        <Modal />

      </div>

    </userContext.Provider>
  )
}

export default App
