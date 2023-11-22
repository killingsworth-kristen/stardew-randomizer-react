import React from "react";

export default function EditDeleteDaveBtns () {
    return (
        <div className="col">
        <button className="edit-delete-btn">
            <img className="edit-delete-btn-icon" src="/assets/icons/edit.svg" alt="edit save"/>
        </button>
        <button className="edit-delete-btn">
            <img className="edit-delete-btn-icon" src="/assets/icons/delete.svg" alt="delete save"/>
        </button>
    </div>
    )
}