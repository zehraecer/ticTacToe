import { useContext } from "react"
import { userContext } from "../App"

export const Modal = () => {

    const { winner, nextPlayer, modalRef } = useContext(userContext)
    return (

        <>
            <div className="Modal" ref={modalRef}>

                <img src={nextPlayer === "./x.svg" ? "./o.svg" : "./x.svg"} />
                <h1>TEBRİKLER KAZANDINIZ</h1>

            </div>
        </>
    )
}