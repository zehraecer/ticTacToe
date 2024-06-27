import { useContext } from "react"
import { userContext } from "../App"

export const Modal = () => {
    const { nextPlayer, modalRef, resetGame } = useContext(userContext)

    return (

        <>
            <dialog className="modal" ref={modalRef}>

                <h2>YOU WON!</h2>

                <div className="modal-middle">

                    <span className={nextPlayer === "X" ? "o" : "x"}>{nextPlayer === "X" ? "O" : "X"} </span>
                    <h3 className={nextPlayer === "X" ? "mavi" : "turuncu"}>TAKES THE ROUND</h3>

                </div>

                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>

                    <h1 onClick={resetGame}>NEW ROUND</h1>

                </div>

            </dialog>
        </>
    )
}