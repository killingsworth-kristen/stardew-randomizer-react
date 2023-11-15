import React from "react";


export default function Header () {
    return (
        <header className="header">
            <h1 className="title">Stardew Valley Perfection Randomizer</h1>
            <nav className="nav">
                <button className="account-btn">Account</button>
                <div className="account-drop">
                    <div>
                        <h6>Logout</h6>
                    </div>
                    <div>
                        <h6>View My Saves</h6>
                    </div>
                    <div>
                        <h6>About</h6>
                    </div>
                    <div>
                        <h6>Help</h6>
                    </div>
                </div>
            </nav>
        </header>
    )
}