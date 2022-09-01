function cake(input) {
    let cakeHeight = Number(input[0]);
    let cakeWidth = Number(input[1]);
    let totalPieces = cakeHeight * cakeWidth;
    let command = 0;
    let index = 2;
    let serving = 0;
    let piecesLeft = totalPieces;

    while (piecesLeft > 0) {
        command = input[index];
        if (command === "STOP") {
            console.log(`${piecesLeft} pieces are left.`);
            break;
        }
        serving = Number(input[index]);
        index++;
        piecesLeft -= serving;

    }  
        
        if (piecesLeft <= 0) {
        console.log(`No more cake left! You need ${Math.abs(piecesLeft)} pieces more.`); 
    }
        
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])



