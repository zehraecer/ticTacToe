import { useContext } from "react"
import { userContext } from "../App"

export const Modal = () => {

    const { winner, nextPlayer, modalRef } = useContext(userContext)
    return (

        <>
            <div className="Modal" ref={modalRef}>

                <h2>YOU WON!</h2>
                <div className="modal-middle">
                    <h3>TAKES THE ROUND</h3>
                    <img src={nextPlayer === "./x.svg" ? "./o.svg" : "./x.svg"} />
                </div>
                <h1>TEBRİKLER KAZANDINIZ</h1>

            </div>
        </>
    )
}