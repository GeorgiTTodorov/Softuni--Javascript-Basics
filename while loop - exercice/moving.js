function moving(input) {
    let freeSpaceWidth = Number(input[0]);
    let freeSpaceLength = Number(input[1]);
    let freeSpaceHeigth = Number(input[2]);
    let totalSpace = freeSpaceHeigth * freeSpaceLength * freeSpaceWidth;
    let index = 3;
    let boxSpace = 0;
    let command = "";

    while (boxSpace <= totalSpace) {
        command = input[index];
        if (command === "Done") {
            let spaceLeft = Math.abs(totalSpace - boxSpace);
            console.log(`${spaceLeft} Cubic meters left.`);
            break;
        }
        boxSpace += Number(input[index]);
        index++;

        
    }       
        if (boxSpace >= totalSpace) {
            let spaceLeft = Math.abs(totalSpace - boxSpace);
            console.log(`No more free space! You need ${spaceLeft} Cubic meters more.`);
        }
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


