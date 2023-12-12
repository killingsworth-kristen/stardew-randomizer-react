import React, {useState} from "react";

import "./../style/NewSavePreview.css";

export default function NewSavePreview ({array}) {

    let location = window.location.pathname.replace("/new-","");
    console.log(location);

    const [saveName, setSaveName] = useState(location);
    const [customPrereqValue, setCustomPrereqValue] = useState("");
    // const [customPrereqVisible, setCustomPrereqVisible] = useState(false);

    function handleNameChange (e) {
        setSaveName(e.target.value);
    }

    function handleCustomPrereqChange (e) {
        setCustomPrereqValue(e.target.value);
    }

    function addPrereq (e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.parentNode.parentNode.parentNode);
        let mainTaskContainer = e.target.parentNode.parentNode.parentNode.children[0].children[0];
        let mainTaskIndex = mainTaskContainer.id.split("-")[2];
        console.log(mainTaskIndex);
        let customPrereqForm = e.target.parentNode.children[0];
        let customPrereqList = e.target.parentNode.parentNode;
        if (customPrereqForm.classList.contains("hidden")) {
            customPrereqForm.classList.remove("hidden");
            return;
        } else {
            customPrereqForm.classList.add("hidden");
            // let newPrereq = document.createElement("div");
            // newPrereq.innerHTML = 
            //     `
            //         <input type="checkbox" value="${customPrereqValue}" checked></input>
            //         <label>${customPrereqValue}</label>
            //     `
            // newPrereq.classList.add("prereq-checkbox");
            // customPrereqList.append(newPrereq);
            // console.log(array[mainTaskIndex]);
            if (array[mainTaskIndex].Prerequisites === "") {
                array[mainTaskIndex].Prerequisites = [customPrereqValue];
            } else {
                array[mainTaskIndex].Prerequisites = [array[mainTaskIndex].Prerequisites, customPrereqValue];
            }
            console.log(array[mainTaskIndex]);
            setCustomPrereqValue("");
            return;
        }
    }

    function addNewTask () {

    }

    return (
        <main>
            <h2>New Save Preview</h2>
            <form id="save-preview-form">
                <label htmlFor="save-name">Edit Save Name (optional)</label>
                <input type="text" value={saveName} onChange={handleNameChange} name="save-name"></input>
                <button id="add-main-task-btn" onClick={addNewTask}>Add Task</button>
                {array.map((i)=>{
                    let required = false;
                    let prereq = "";
                    // console.log(i.Prerequisites);

                    // All tasks required for perfection are required (cannot bu unchecked on accident)
                    if (i.Task.includes("Ship") | i.Task.includes("Cook ") | i.Task.includes("Befriend") | i.Task.includes("Stardrop") | i.Task.includes("Slay") | i.Task.includes("Obelisk") | i.Task.includes("Craft") | i.Task.includes("Catch") | i.Task.includes("Finish Golden Walnuts")) {
                        required = true;
                    } else {
                        console.log(i.Task);
                    }

                    // Handle Prerequisites
                    if (i.Prerequisites === "" | i.Prerequisites == "null") {
                        prereq = "None"
                    } else if (i.Prerequisites.includes("|")) {
                        prereq = i.Prerequisites.replaceAll("|", "OR");
                    } else {
                        prereq = i.Prerequisites;
                    }
                    return (
                        <div className="main-checkbox-container">
                            <div className="main-checkbox">
                                <input type="checkbox" value={i.Task} name={`input-main-${i.key}`} id={`input-main-${i.key}`} key={`input-main-${i.key}`} defaultChecked="true" disabled={required}></input>
                                <label htmlFor={`input-main-${i.key}`} key={`label-main-${i.key}`}>{i.Task}</label>
                            </div>
                            <div className="prereq-checkbox-container">
                                <h6>Prerequisites:</h6>
                                <div className="custom-prereq-adder">
                                    <div className="custom-prereq-form hidden">
                                        <label htmlFor={`custom-prerequisite-task-${i.key}`} id={`custom-prerequisite-label-${i.key}`} key={`custom-prerequisite-label-${i.key}`}>Custom Prerequisite: </label>
                                        <input type="text" name={`custom-prerequisite-task-${i.key}`} id={`custom-prerequisite-task-${i.key}`} key={`custom-prerequisite-task-${i.key}`} value={customPrereqValue} onChange={handleCustomPrereqChange}></input>
                                    </div>
                                    <button className="add-prereq-btn" onClick={addPrereq}>Add</button>
                                </div>
                                <div className="prereq-checkbox">
                                    <input type="checkbox" value={prereq} disabled={prereq === "None" ? true : false} defaultChecked="true"></input>
                                    <label>{prereq}</label>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </form>
        </main>
    )
}