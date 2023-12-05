import React from "react";
// import test from "../utils/test.js"

export default function NewSaveBtn ({ empty }) {

    // console.log(empty);
    return (
        <div className={empty == false ? "hidden col" : "col"}>
            <button className="new-save-btn">
                <h3 className="new-save-btn-text">New Save!</h3>
            </button>
        </div>
    )
}