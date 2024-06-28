import { useEffect, useState, useContext } from "react"
import { userContext } from "../App"

export const Footer = () => {


    const { oPlayer, xPlayer } = useContext(userContext)


    return (

        <>
            <div className="footer">

                <div className="xPlayer">
                    <h3>X Player</h3>
                    <h2>{xPlayer}</h2>

                </div>
                <div className="oPlayer">

                    <h3>  O Player</h3>
                    <h2>{oPlayer}</h2>
                </div>

            </div>
        </>
    )
}