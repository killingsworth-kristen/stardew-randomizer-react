import React from "react";

export default function CustomMainTask ({i}) {

    function removeTask () {
        
    }

    return (
        <div className="main-checkbox-container">
            <button onClick={removeTask}> X </button>
            <input type="checkbox" value={i.Task} name={i.key} id={i.key} defaultChecked="true" disabled={required}></input>
            <label htmlFor={i.key}>{i.Task}</label>
        </div>
    )
}