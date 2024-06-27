import { useContext } from "react"
import { userContext } from "../App"

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

                    <span>{nextPlayer}</span>
                    <h3>TURN</h3>

                </div>

                <div className="header-right" onClick={resetGame} onTouchStart={resetGame} onTouchEnd={resetGame}>

                    <img src="./restart.svg" alt="" />

                </div>
            </div >
        </>
    )
}