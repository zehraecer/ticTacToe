import { useContext } from "react"
import { userContext } from "../App"

export const Modal = () => {

    const { winner, nextPlayer } = useContext(userContext)
    return (

        <>
            <h3>{`Winner : ${winner}`}</h3>
        </>
    )
}