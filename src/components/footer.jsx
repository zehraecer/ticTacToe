import { useEffect, useState, useContext } from "react"
import { userContext } from "../App"

export const Footer = () => {


    const { oPlayer, xPlayer, setCell, setWinner, setNextPlayer, setXPlayer, setOPlayer } = useContext(userContext)

    const newGame = () => {
        setCell(Array(9).fill(null))
        setWinner(false)
        setNextPlayer("X")
        setXPlayer(0)
        setOPlayer(0)
    }

    return (

        <>
            <div className="footer">

                <div className="xPlayer">
                    <h3>X Player</h3>
                    <h2>{xPlayer}</h2>

                </div>
                <div className="newGame" onClick={newGame}>
                    <h3>Reset Game</h3>
                </div>
                <div className="oPlayer">

                    <h3>  O Player</h3>
                    <h2>{oPlayer}</h2>
                </div>

            </div>
        </>
    )
}