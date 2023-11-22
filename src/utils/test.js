// Friendship DB
import progressiveFriendshipDB from "../DB/progressiveFriendshipDB.json";
import allHeartsDB from "../DB/allHeartsDB.json";

// Museum DB
import museumIndividualDB from "../DB/museumIndividualDB.json";
import musuemMilestonesDB from "../DB/musuemMilestonesDB.json";

// Cooking DB
import cookingDB from "../DB/cookingDB.json";

// Crafting DB
import craftingDB from "../DB/craftingDB.json";

// Fishing DB
import fishingDB from "../DB/fishingDB.json";

// Shipping DB
import shippingDB from "../DB/shippingDB.json"


// import skillsDB from "../DB/skillsDB.json"
// import commCeneterDB from "../DB/commCenterDB.json"
// import monsterDB from "../DB/monsterDB.json"
// import stardropDB from "../DB/stardropDB.json"
// import miscellaneousDB from "../DB/miscellaneousDB.json"
// import boardRequestsRequiredDB from "../DB/boardRequestsRequiredDB.json"
    // includes Qi board quests

// Optional extra goals
// import notRequiredQOLDB from "../DB/notRequiredQOLDB.json"
// import hatsDB from "../DB/hatsDB.json"
// import boardRequestsOptionalDB from "../DB/boardRequestsOptionalDB.json"
    // includes Qi board quests

// import userSelections (i.e. prgressive-xp vs free, progressive-freindship vs all-hearts, etc.)

export default function test () {
    let selectedTasks = [];
    let notSelectedTasks = []

    // Friendship type selection
    if (userSelections.friendship === "progressive-friendship") {
        taskSelection = taskSelection.concat(progressiveFriendshipDB);
        notSelectedTasks = notSelectedTasks.concat(allHeartsDB)
    } else {
        taskSelection = notSelectedTasks.concat(allHeartsDB)
        notSelectedTasks = taskSelection.concat(progressiveFriendshipDB);
    }

    // Museum type sleection
    if (userSelection.museum === "milestones") {
        selectedTasks = taskSelection.concat(musuemMilestonesDB);
        notSelectedTasks = notSelectedTasks.concat(museumIndividualDB);
    } else if (userSelection.museum === "individual") {
        selectedTasks = notSelectedTasks.concat(museumIndividualDB);
        notSelectedTasks = taskSelection.concat(musuemMilestonesDB);
    } else {
        notSelectedTasks = taskSelection.concat(musuemMilestonesDB);
        notSelectedTasks = notSelectedTasks.concat(museumIndividualDB);
    }

    // 
    console.log(cookingDB)
}