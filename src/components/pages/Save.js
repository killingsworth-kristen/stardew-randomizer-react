import React, { useEffect, useState } from "react";

export default function Save () {

    // let saveSlot1 = JSON.parse(localStorage.getItem("save-slot-1"));
    // saveSlot1.availableGoals | 
    // saveSlot1.completedGoals | 

    // TEST STORAGE
    localStorage.setItem("save-slot-2-available",JSON.stringify([{"task":"Test 1","prereq":"Test 2","complete":false},{"task":"Test 2","prereq":"Test 4","complete":false},{"task":"Test 8","prereq":null,"complete":false},{"task":"Test 3","prereq":null,"complete":false},{"task":"Test 7","prereq":null,"complete":false}]));
    localStorage.setItem("save-slot-2-complete",JSON.stringify([{task: "Test 4", prereq: null, complete: true},{task: "Test 5", prereq: null, complete: true},{task: "Test 6", prereq: null, complete: true}]));
    let EXPlevels = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
    let fishingPoints = 0;
    let farmingPoints = 0;
    let combatPoints = 0;
    let foragingPoints = 0;
    let minigPoints = 0;

    // on task generation check for exp
    // if exp exists will tempExp >= next EXPlevel
    // reroll goal
    let location = window.location.pathname.replace("/","");
    let availableGoals = JSON.parse(localStorage.getItem(`${window.location.pathname.replace("/","")}-available`));
    let completedGoals = JSON.parse(localStorage.getItem(`${window.location.pathname.replace("/","")}-complete`));
    let allGoals = availableGoals.concat(completedGoals);
    let tempGoal;

    const [currentGoal, setCurrentGoal ] = useState("No Active Goal");
    const [completionPercentage, setCompletionPercentage ] =  useState("");

    // console.log(location);



    function generateGoal () {
        updateGoals();
        let validGoal = false;
        randomIndex()
        while (!validGoal) {
            if (tempGoal.prereq === null) {
                validGoal = true;
                console.log("Goal is valid");
                console.log(tempGoal.task);
                setCurrentGoal(tempGoal.task);
                return;
            } else {
                for (let i=0; i< completedGoals.length; i++){
                    if (tempGoal.prereq === completedGoals[i].task) {
                        validGoal = true;
                        console.log("Goal is valid");
                        console.log(tempGoal);
                        setCurrentGoal(tempGoal.task);
                        return;
                    } else {
                        console.log(tempGoal.prereq + " =======/======= " + completedGoals[i].task)
                    }
                }
                randomIndex()
                        console.log("Goal is not valid");
                        console.log(tempGoal);
            }
        }
    }

    function randomIndex () {
        let randomIndex = Math.floor(Math.random() * availableGoals.length);
        tempGoal = availableGoals[randomIndex];
        return;
    }

    function completeGoal () {
        for (let i=0; i < availableGoals.length; i++) {
            if (currentGoal == "No Active Goal") {
                console.log(availableGoals);
                return;
            } else if (availableGoals[i].task == currentGoal) {
                availableGoals[i].complete = true;
                let moveGoals = availableGoals.splice(i, 1);
                completedGoals = completedGoals.concat(moveGoals);
                setCurrentGoal("No Active Goal");
                localStorage.setItem(`${window.location.pathname.replace("/","")}-available`,JSON.stringify(availableGoals));
                localStorage.setItem(`${window.location.pathname.replace("/","")}-complete`, JSON.stringify(completedGoals));
                return;
            } else {
                console.log("else")
                console.log(availableGoals);
            }
        }
    }

    function updateGoals () {
        availableGoals = JSON.parse(localStorage.getItem(`${window.location.pathname.replace("/","")}-available`));
        completedGoals = JSON.parse(localStorage.getItem(`${window.location.pathname.replace("/","")}-complete`));
    }


    return (
        <main>
            {/* <h2>{SaveName}</h2> */}
            <button onClick={generateGoal}>Generate Goal</button>
            <div>
                <h2>Current Goal:</h2>
                <h3>{currentGoal}</h3>
            </div>
            <div>
                <h2>Completion Percentage:</h2>
                <h3>{completionPercentage}</h3>
                <div>
                    <p>(progress bar)</p>
                </div>
            </div>
            <button onClick={completeGoal}>Complete Goal</button>
        </main>
    )
}