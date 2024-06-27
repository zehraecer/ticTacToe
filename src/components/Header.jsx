import { useContext } from "react"
import { userContext } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Header = () => {
    const { nextPlayer, resetGame } = useContext(userContext)

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

                <button className="header-right" onClick={resetGame} onTouchStart={resetGame}>


                    <i class="fa-solid fa-rotate-right fa-2x"></i>

                </button>
            </div >
        </>
    )
}