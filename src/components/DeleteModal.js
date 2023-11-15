import React from "react";

export default function DeleteModal () {
    return (
        <div className="delete-modal">
            <p className="delete-warning">Are You Sure You Want to Delete This Save? This Action CANNOT Be Undone!</p>
            <button className="delete-confirm">YES</button>
            <button className="delete-cancel">NO</button>
        </div>
    )
}