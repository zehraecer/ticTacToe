import { useContext } from "react"
import { userContext } from "../App"

export const Header = () => {
    const { nextPlayer, setCell, setNextPlayer, modalRef, resetGame } = useContext(userContext)

    return (
        <>
            <div className="header">

                <div className="header-left">

                    <img src="./x.svg" alt="" />
                    <img src="./o.svg" alt="" />

                </div>

                <div className="header-middle">

                    <img src={nextPlayer} alt="" />
                    <h3>TURN</h3>

                </div>

                <div className="header-right" onClick={resetGame}>

                    <img src="./restart.svg" alt="" />

                </div>
            </div >
        </>
    )
}