import React from "react";

export default function EditDeletePlayBtns () {
    return (
        <div className="col">
        <button className="edit-delete-play-btn">
            <img className="edit-delete-play-btn-icon" src="/assets/icons/edit.svg" alt="edit save"/>
        </button>
        <button className="edit-delete-play-btn">
            <img className="edit-delete-play-btn-icon" src="/assets/icons/delete.svg" alt="delete save"/>
        </button>
        <button className="edit-delete-play-btn">
            <img className="edit-delete-play-btn-icon" src="/assets/icons/play.svg" alt="open/play save" />
        </button>
    </div>
    )
}