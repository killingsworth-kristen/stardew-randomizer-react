import React from "react";
import { useNavigate } from 'react-router-dom';

export default function EditDeletePlayBtns ({saveSlotNum}) {
    const navigate = useNavigate()

    function editSave (e) {
        let saveSlot = e.target.id.split("-edit")[0];
        // console.log(saveSlot)
        navigate(`/edit`);
        return;
    }

    function deleteSave (e) {
        let saveSlot = e.target.id.split("-delete")[0];
        console.log(saveSlot)
        return;
    }

    function openSave (e) {
        let saveSlot = e.target.id.split("-play")[0];
        // console.log(saveSlot)
        navigate(`/${saveSlot}`);
        return;
    }

    return (
        <div className="col">
        <button className={`edit-delete-play-btn`} onClick={editSave}>
            <img className="edit-delete-play-btn-icon" id={`save-slot-${saveSlotNum}-edit`} src="/assets/icons/edit.svg" alt="edit save"/>
        </button>
        <button className={`edit-delete-play-btn`} onClick={deleteSave}>
            <img className="edit-delete-play-btn-icon" id={`save-slot-${saveSlotNum}-delete`} src="/assets/icons/delete.svg" alt="delete save"/>
        </button>
        <button className={`edit-delete-play-btn`} onClick={openSave}>
            <img className="edit-delete-play-btn-icon" id={`save-slot-${saveSlotNum}-play`} src="/assets/icons/play.svg" alt="open/play save" />
        </button>
    </div>
    )
}