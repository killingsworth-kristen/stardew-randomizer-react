import React from "react";

import './style/Header.css'

export default function Header ({current, setCurrent}) {
    let savesCurrent = false;
    let helpCurrent = false;
    let aboutCurrent = false;

    function determineCurrent () {
        if (current === '/') {
            savesCurrent = true;
            helpCurrent = false;
            aboutCurrent = false;
        } else if (current === '/help') {
            savesCurrent = false;
            helpCurrent = true;
            aboutCurrent = false;
        } else if (current === '/about') {
            savesCurrent = false;
            helpCurrent = false;
            aboutCurrent = true;
        }
    }

    determineCurrent();

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
                        <a className={savesCurrent ? "menu-link current" : "menu-link"} aria-current={savesCurrent ? true : false} href={'/'}><h3>Saves</h3></a>
                        <a className={helpCurrent ? "menu-link current" : "menu-link"} aria-current={helpCurrent ? true : false} href={'/help'}><h3>Help</h3></a>
                        <a className={aboutCurrent ? "menu-link current" : "menu-link"} aria-current={aboutCurrent ? true : false} href={'/about'}><h3>About</h3></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}