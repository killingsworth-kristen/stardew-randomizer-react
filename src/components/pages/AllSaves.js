import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './../style/AllSaves.css';

import EditDeletePlayBtns from "../EditDeletePlayBtns";
import NewSaveBtn from "../NewSaveBtn";

export default function AllSaves () {
    let navigate = useNavigate();

    const [name, setName] = useState(localStorage.getItem("name"));
    let allSaveStatus = localStorage.getItem("all-save-status");
    let splitSaves = [];
    let save1Storage;
    let save2Storage;
    let save3Storage;

    if (allSaveStatus == null | allSaveStatus === "" | !allSaveStatus) {
        localStorage.setItem("all-save-status",[JSON.stringify({"save1Status": "50"}), JSON.stringify({"save2Status": "null"}), JSON.stringify({"save3Status": "null"})]);
        save1Storage = {save1Status: "50"};
        save2Storage = {save2Status: "null"};
        save3Storage = {save3Status: "null"};
    } else {
        splitSaves = allSaveStatus.split(",");
        save1Storage = JSON.parse(splitSaves[0]);
        save2Storage = JSON.parse(splitSaves[0]);
        save3Storage = JSON.parse(splitSaves[0]);
    }


    const [save1Percentage, setSave1Percentage] = useState("Empty")
    const [save2Percentage, setSave2Percentage] = useState("Empty")
    const [save3Percentage, setSave3Percentage] = useState("Empty")

    useEffect(() => {
        if (name === null | name === 'null' | name === '') {
            navigate(`/name`);
        }

        showPercentage();
      },[]);

    function editName (e) {
        // setName(localStorage.setItem("name", null));
        navigate(`/name`);
    }

    function showPercentage () {
        if (save1Storage.save1Status != null) {
            setSave1Percentage(save1Storage.save1Status + "%");
        } 

        if (save2Storage.save2Status != null) {
            setSave2Percentage(save2Storage.save2Status + "%");
        } 

        if (save3Storage.save3Status != null) {
            setSave3Percentage(save3Storage.save3Status + "%");
        } 
    }

    function isSaveEmpty (savePercent) {
        if (savePercent == "Empty") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <main>
            <div className="title-container">
                <h2>{`Welcome ${name}!`}</h2>
                <button id="edit-name-btn" onClick={editName}>Edit Name</button>
            </div>
            <div className="grid-wrapper align-items-center">                
                <div className="container">
                    <div className="row" id="row-1">
                        <div className="col">
                            <h3>Save Slot 1</h3>
                        </div>
                        <div className="col">
                            <h3>{save1Percentage}</h3>
                        </div>
                        <NewSaveBtn  empty={isSaveEmpty(save1Percentage)}/>
                        <EditDeletePlayBtns empty={isSaveEmpty(save1Percentage)} saveSlotNum={1}/>
                    </div>
                    <div className="row" id="row-2">
                        <div className="col">
                            <div>
                                <h3>Save Slot 2</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h3>{save2Percentage}</h3>
                            </div>
                        </div>
                        <NewSaveBtn empty={isSaveEmpty(save2Percentage)}/>
                        <EditDeletePlayBtns empty={isSaveEmpty(save2Percentage)} saveSlotNum={2}/>

                    </div>
                    <div className="row" id="row-3">
                    <div className="col">
                            <div>
                                <h3>Save Slot 3</h3>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h3>{save3Percentage}</h3>
                            </div>
                        </div>
                        <NewSaveBtn empty={isSaveEmpty(save3Percentage)}/>
                        <EditDeletePlayBtns empty={isSaveEmpty(save3Percentage)} saveSlotNum={3}/>
                    </div>
                </div>
            </div>
        </main>
    )
}