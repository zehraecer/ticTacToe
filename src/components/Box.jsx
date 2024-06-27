import { useCallback, useContext, useEffect, useState } from "react"
import { userContext } from "../App";
import { MatchCombinations } from "./matchCombinations";

export const Box = () => {
    const { nextPlayer, setNextPlayer, setWinner, cell, modalRef } = useContext(userContext)

    useEffect(() => {

        winningPlayer()

    }, [nextPlayer])

    const winningPlayer = useCallback(() => {

        MatchCombinations.map(element => {
            const a = element[0]
            const b = element[1]
            const c = element[2]

            if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {

                setWinner(true)
                setTimeout(() => {

                    modalRef.current.showModal();

                }, 100)

            }
        })
    }, [nextPlayer])

    const handleClickGame = (param) => {
        if (cell[param] === null) {

            cell[param] = nextPlayer
            setNextPlayer(nextPlayer === "X" ? "O" : "X")
        }

    }

    return (

        <>
            <div className="box-container">
                {cell.map((element, index) => {
                    return (

                        <div className="box-cell" key={index} onClick={() => handleClickGame(index)}>  <span className={element === "X" ? "x" : "o"} >{element}</span> </div>

                    )
                })}
            </div>
        </>
    )
}