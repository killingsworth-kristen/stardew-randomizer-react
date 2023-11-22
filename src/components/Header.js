import React from "react";
import './style/Header.css'

export default function Header () {

    return (
        <header className="header">
            <h1 className="title">Stardew Valley Perfection Randomizer</h1>
            <nav className="nav">
                <button className="menu-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <h2>Menu</h2>
                </button>
                <div className="collapse" id="collapseExample">
                    <div className="menu-dropdown">
                        {/* <a><h3>Logout</h3></a> */}
                        <a><h3>Saves</h3></a>
                        <a><h3>Help</h3></a>
                        <a><h3>About</h3></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}