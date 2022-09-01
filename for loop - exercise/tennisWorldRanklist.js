function tennisWorldRanklist(input) {
    let index = 0;
    let numOfTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let positionInTournament = input[index];
    let points = 0;
    let champion = 0;

    for (let i = 1; i <= numOfTournaments; i++) {
        positionInTournament = input[index];
        index++;
        if (positionInTournament === "F") {
            points += 1200;
        } else if (positionInTournament === "SF") {
            points += 720;
        } else {
            champion++;
            points += 2000;
            }    
        
    }   let totalPoints = startingPoints + points;
        let averageWinRate = points / numOfTournaments;
        let percentageWinnedTournaments = (champion / numOfTournaments) * 100;

        console.log(`Final points: ${totalPoints}`);
        console.log(`Average points: ${Math.floor(averageWinRate)}`);
        console.log(`${percentageWinnedTournaments.toFixed(2)}%`)

}

tennisWorldRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
