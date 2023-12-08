import React, { useEffect, useState } from "react";

export default function SaveSlot1 () {

    // let saveSlot1 = JSON.parse(localStorage.getItem("save-slot-1"));
    // saveSlot1.availableGoals | 
    // saveSlot1.completedGoals | 

    // TEST STORAGE
    // localStorage.setItem("save-slot-1-available",JSON.stringify([{"task":"Test 1","prereq":"Test 2","complete":false},{"task":"Test 2","prereq":"Test 4","complete":false},{"task":"Test 8","prereq":null,"complete":true},{"task":"Test 3","prereq":null,"complete":true},{"task":"Test 7","prereq":null,"complete":true}]));
    // localStorage.setItem("save-slot-1-complete",JSON.stringify([{task: "Test 4", prereq: null, complete: true},{task: "Test 5", prereq: null, complete: true},{task: "Test 6", prereq: null, complete: true}]));
    let EXPlevels = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
    let fishingPoints = 0;
    let farmingPoints = 0;
    let combatPoints = 0;
    let foragingPoints = 0;
    let minigPoints = 0;

    // on task generation check for exp
    // if exp exists will tempExp >= next EXPlevel
    // reroll goal

    let availableGoals = JSON.parse(localStorage.getItem("save-slot-1-available"));
    let completedGoals = JSON.parse(localStorage.getItem("save-slot-1-complete"));
    let allGoals = availableGoals.concat(completedGoals);
    let tempGoal;

    const [currentGoal, setCurrentGoal ] = useState("No Active Goal");
    const [completionPercentage, setCompletionPercentage ] =  useState("");

    // console.log(allGoals.length)


    // useEffect(() => {
    // if (currentGoal == "") {
    //     setCurrentGoal("No ")
    // }
    //   }, [currentGoal]);

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
                for (let i=1; i<completedGoals.length;i++){
                    if (tempGoal.prereq === completedGoals[i].task) {
                        validGoal = true;
                        console.log("Goal is valid");
                        console.log(tempGoal);
                        setCurrentGoal(tempGoal.task);
                        return;
                    } else {
                        randomIndex()
                        console.log("Goal is not valid");
                        console.log(tempGoal);
                    }
                }
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
                localStorage.setItem("save-slot-1-available",JSON.stringify(availableGoals));
                localStorage.setItem("save-slot-1-complete", JSON.stringify(completedGoals));
                return;
            } else {
                console.log("else")
                console.log(availableGoals);
            }
        }
    }

    function updateGoals () {
        availableGoals = JSON.parse(localStorage.getItem("save-slot-1-available"));
        completedGoals = JSON.parse(localStorage.getItem("save-slot-1-complete"));
    }


    return (
        <main>
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