import React from "react";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './../style/Name.css';

export default function Name () {

    let storageName = localStorage.getItem("name");
    const [name, setName] = useState(storageName);

    const navigate = useNavigate()

    function handleName (e) {
        setName(e.target.value);
        return;
    }

    function handleSubmit (e) {
        e.preventDefault();
        localStorage.setItem("name", name);
        navigate(`/`);
    }

    return (
        <main>
            <h2 className="page-title">Input Your Name</h2>

            <form onSubmit={handleSubmit}>
                <label  htmlFor="name"></label>
                <input type="text" id="name" size="70" value={name} onChange={handleName}></input><br />
                <button type="submit" id="save-name-btn">save</button>
            </form>
        </main>
    )
}