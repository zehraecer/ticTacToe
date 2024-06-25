import { useContext, useEffect, useState } from "react"
import { userContext } from "../App";
import { MatchCombinations } from "./matchCombinations";

export const Box = () => {
    const { nextPlayer, setNextPlayer, setWinner, cell } = useContext(userContext)

    useEffect(() => {
        winningPlayer()

    }, [nextPlayer])

    const winningPlayer = () => {

        MatchCombinations.map(element => {
            const a = element[0]
            const b = element[1]
            const c = element[2]

            if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {

                setWinner(true)

            }
        })
    }

    const handleClickGame = (param) => {
        if (cell[param] === null) {

            cell[param] = nextPlayer
            setNextPlayer(nextPlayer === "./x.svg" ? "./o.svg" : "./x.svg")
        }

    }

    return (

        <>
            <div className="box-container">
                {cell.map((element, index) => {
                    return (
                        <div className="box-cell" key={index} onClick={() => handleClickGame(index)}> <img src={element} /> </div>
                    )
                })}
            </div>
        </>
    )
}