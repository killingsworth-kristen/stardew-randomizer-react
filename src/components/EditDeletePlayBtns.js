import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./style/EditDeletePlayBtns.css";

export default function EditDeletePlayBtns ({saveSlotNum, empty}) {
    const navigate = useNavigate()

    const [editTextShow, setEditTextShow] = useState(false);
    const [editIconShow, setEditIconShow] = useState(true);
    const [editHover, setEditHover] = useState(false);
    const [deleteTextShow, setDeleteTextShow] = useState(false);
    const [deleteIconShow, setDeleteIconShow] = useState(true);
    const [deleteHover, setDeleteHover] = useState(false);
    const [playTextShow, setPlayTextShow] = useState(false);
    const [playIconShow, setPlayIconShow] = useState(true);
    const [playHover, setPlayHover] = useState(false);

    useEffect(() => {
        showTooltip();
      }, [editHover, deleteHover, playHover]);


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

    function showTooltip () {
        if (editHover === true) {
            setEditTextShow(true);
            setEditIconShow(false);
        } else if (editHover === false) {
            setEditTextShow(false);
            setEditIconShow(true);
        }
        if (deleteHover === true) {
            setDeleteTextShow(true);
            setDeleteIconShow(false);
        } else if (deleteHover === false) {
            setDeleteTextShow(false);
            setDeleteIconShow(true);
        }
        if (playHover === true) {
            setPlayTextShow(true);
            setPlayIconShow(false);
        } else if (playHover === false) {
            setPlayTextShow(false);
            setPlayIconShow(true);
        }
        return;
    }

    return (
        <div className={empty == true ? "hidden col" : "col"}>
            <button className={`edit-delete-play-btn`} onClick={editSave} onMouseEnter={() => {setEditHover(true)}} onMouseLeave={() => {setEditHover(false)}}>
                <p className={editTextShow === true ? "tooltip-text" : "tooltip-text hidden"}>Edit</p>
                <img className={editIconShow === true ? "edit-delete-play-btn-icon": "edit-delete-play-btn-icon hidden"} id={`save-slot-${saveSlotNum}-edit`} src="/assets/icons/edit.svg" alt="edit save"/>
            </button>
            <button className={`edit-delete-play-btn`} onClick={deleteSave} onMouseEnter={() => {setDeleteHover(true)}} onMouseLeave={() => {setDeleteHover(false)}}>
                <p className={deleteTextShow === true ? "tooltip-text" : "tooltip-text hidden"}>Delete</p>
                <img className={deleteIconShow === true ? "edit-delete-play-btn-icon": "edit-delete-play-btn-icon hidden"} id={`save-slot-${saveSlotNum}-delete`} src="/assets/icons/delete.svg" alt="delete save"/>
            </button>
            <button className={`edit-delete-play-btn`} onClick={openSave} onMouseEnter={() => {setPlayHover(true)}} onMouseLeave={() => {setPlayHover(false)}}>
                <p className={playTextShow === true ? "tooltip-text" : "tooltip-text hidden"}>Play</p>
                <img className={playIconShow === true ? "edit-delete-play-btn-icon": "edit-delete-play-btn-icon hidden"} id={`save-slot-${saveSlotNum}-play`} src="/assets/icons/play.svg" alt="open/play save" />
            </button>
        </div>
    )
}