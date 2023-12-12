import React, {useState} from "react";

import "./../style/NewSavePreview.css";

export default function NewSavePreview ({array}) {

    let location = window.location.pathname.replace("/new-","");
    console.log(location);

    const [saveName, setSaveName] = useState(location);
    const [customPrereqValue, setCustomPrereqValue] = useState("");
    const [customMainValue, setCustomMainvalue] = useState("");
    // const [customPrereqVisible, setCustomPrereqVisible] = useState(false);

    function handleNameChange (e) {
        setSaveName(e.target.value);
    }

    function handleCustomPrereqChange (e) {
        setCustomPrereqValue(e.target.value);
    }

    function handleCustomMainChange (e) {
        setCustomMainvalue(e.target.value);
    }

    function addPrereq (e) {
        e.preventDefault();
        let mainTaskContainer = e.target.parentNode.parentNode.parentNode.children[0].children[0];
        let mainTaskIndex = mainTaskContainer.id.split("-")[2];
        let customPrereqForm = e.target.parentNode.children[0];
        if (customPrereqForm.classList.contains("hidden")) {
            customPrereqForm.classList.remove("hidden");
            return;
        } else {
            customPrereqForm.classList.add("hidden");
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

    function addNewTask (e) {
        e.preventDefault();
        // console.log(e.target.parentNode.parentNode.children);
        let customMainForm = e.target.parentNode.children[0];
        if (customMainForm.classList.contains("hidden")) {
            customMainForm.classList.remove("hidden");
            return;
        } else {
            customMainForm.classList.add("hidden");
            console.log(array);
            let reversedArry = array.reverse();
            reversedArry.push({Task: customMainValue, key: (array.length - 1), complete: false, completeDate: null, Prerequisites: ''});
            array = reversedArry.reverse();
            setCustomMainvalue("");
            return;
        }
    }

    function handleBuildSave (e) {
        e.preventDefault();
    }

    // document.addEventListener(SubmitEvent, (e) => {
    //     e.preventDefault();
    // }

    return (
        <main>
            <h2>New Save Preview</h2>
            <form id="save-preview-form" onSubmit={handleBuildSave}>
                <label htmlFor="save-name">Edit Save Name (optional)</label>
                <input type="text" value={saveName} onChange={handleNameChange} name="save-name"></input>
                <div className="custom-main-adder">
                    <div className="custom-main-form hidden">
                        <label htmlFor={`custom-main-${array.length}`} >Custom Task: </label>
                        <input type="text" name={`custom-main-${array.length}`} id={`custom-main-${array.length}`} value={customMainValue} onChange={handleCustomMainChange}></input>
                    </div>
                    <button id="add-main-task-btn" onClick={addNewTask}>Add Task</button>
                </div>
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