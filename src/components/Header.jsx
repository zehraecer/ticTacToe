import { useContext } from "react"
import { userContext } from "../App"

export const Header = () => {
    const { nextPlayer } = useContext(userContext)

    return (
        <>
            <div className="header">

                <div className="header-left">

                    <img src="./x.svg" alt="" />
                    <img src="./o.svg" alt="" />

                </div>

                <div className="header-middle">
                    <img src={nextPlayer} alt="" />

                </div>

                <div className="header-right">
                    <img src="./restart.svg" alt="" />
                </div>
            </div>
        </>
    )
}