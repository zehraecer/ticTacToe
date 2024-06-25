import { useContext, useState } from "react"
import { userContext } from "../App";

export const Box = () => {
    const { nextPlayer, setNextPlayer } = useContext(userContext)

    const [cell, setCell] = useState(Array(9).fill(null))


    const handleClickGame = (param) => {

        cell[param] = nextPlayer
        setNextPlayer(nextPlayer === "./x.svg" ? "./o.svg" : "./x.svg")

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