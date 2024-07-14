import { createContext, useContext, useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Box } from './components/Box'
import { Modal } from './components/Modal'
import { Footer } from './components/footer'

export const userContext = createContext()

function App() {
  const [nextPlayer, setNextPlayer] = useState("X")
  const [winner, setWinner] = useState(false)
  const [cell, setCell] = useState(Array(9).fill(null))
  const [xPlayer, setXPlayer] = useState(0)
  const [oPlayer, setOPlayer] = useState(0)
  const modalRef = useRef()

  const resetGame = () => {
    setCell(Array(9).fill(null))
    setWinner(false)
    setNextPlayer("X")
  }

  return (
    <userContext.Provider value={{ nextPlayer, setNextPlayer, winner, setWinner, cell, setCell, modalRef, resetGame, xPlayer, setXPlayer, oPlayer, setOPlayer }}>
      <div className="container">
        <Header />
        <Box />
        <Footer />
      </div>
      {winner === true ? < Modal /> : null}

    </userContext.Provider>
  )
}

export default App
