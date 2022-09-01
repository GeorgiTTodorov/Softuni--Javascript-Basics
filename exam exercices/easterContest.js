function easterContest (input) {
    let index = 0;
    let numOfSweetRolls = Number(input[index]);
    index++;
    let winnerName = input[index];
    let bakerName = input[index];
    index++;
    let currentTopScore = 0;

    for (let i = 0; i < numOfSweetRolls; i++) {
        let totalPoints = 0;
        let command = '';
    while (command !== "Stop") {
        let tempPoints = 0;
        let points = Number(input[index]);
        tempPoints += points;
        totalPoints += tempPoints;
        index++;
        command = input[index];
    }
        console.log(`${bakerName} has ${totalPoints} points.`);
        if (i === 0) { 
        winnerName = bakerName; }

        if (currentTopScore < totalPoints) {
        console.log(`${bakerName} is the new number 1!`);
        winnerName = bakerName;    
        currentTopScore = totalPoints;
     }
        index++;
        bakerName = input[index];
        index++;

}       
        console.log(`${winnerName} won competition with ${currentTopScore} points!`);
        
        

}

easterContest([3,
    "Chef Manchev",
    10,
    10,
    10,
    10,
    "Stop",
    "Natalie",
    8,
    2,
    9,
    "Stop",
    "George",
    9,
    2,
    4,
    2,
    "Stop",
    ])