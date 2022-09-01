function travel(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneySaved = 0;
    let command = '';

    while (command !== "End") {
        while (moneyNeeded > moneySaved) {
            moneySaved += Number(input[index]);
            command = input[index];
            index++;
        }
        console.log(`Going to ${destination}! `);
        command = input[index];
        if (command === "End") {
            break;
        }
        destination = input[index];
        moneySaved = 0;
        index++;
        moneyNeeded = Number(input[index]);
        index++
    }
  
}

travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

