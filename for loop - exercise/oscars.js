function oscars (input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let numOfEvaluators = Number(input[index]);
    index++;

    let isNominee = false;

    for (let i = 0; i < numOfEvaluators; i++ ) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        index++;

        startingPoints += (name.length * tempPoints) / 2;

    if (startingPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
        isNominee = true;
        break;
    } 
    }    
    
    if (!isNominee) {
    let pointsNeeded = Math.abs(1250.5 - startingPoints);
    console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
    }
}

 oscars(["Zahari Baharov",
 "205",
 "4",
 "Johnny Depp",
 "45",
 "Will Smith",
 "29",
 "Jet Lee",
 "10",
 "Matthew Mcconaughey",
 "39"])
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
