import { useContext } from "react"
import { userContext } from "../App"

export const Modal = () => {
    const { winner, nextPlayer, modalRef, resetGame } = useContext(userContext)

    return (

        <>
            <dialog className="modal" ref={modalRef}>

                <h2>YOU WON!</h2>
                <div className="modal-middle">
                    <img src={nextPlayer === "./x.svg" ? "./o.svg" : "./x.svg"} />
                    <h3 className={nextPlayer === "./x.svg" ? "mavi" : "turuncu"}>TAKES THE ROUND</h3>
                </div>
                <div style={{ display: "flex", justifyContent: "center", }}>

                    <h1 onClick={resetGame}>NEW ROUND</h1>
                </div>

            </dialog>
        </>
    )
}