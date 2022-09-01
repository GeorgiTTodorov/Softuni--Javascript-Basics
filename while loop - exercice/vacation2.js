function vacation2(input) {
    let excursionPrice = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let daysSpend = 0;
    let daysCounter = 0;

    while (money < excursionPrice) {
        let action = input[index];
        index++;
        let amountOfMoney = Number(input[index]);
        daysCounter++;
        switch (action) {
            case "spend": 
            money -= amountOfMoney;
            if (money < 0) {
                money = 0;
            }
            daysSpend++;
            break;
            case "save": 
            money += amountOfMoney;
            daysSpend = 0;
            break;
        }
        if (daysSpend >= 5) {
            console.log("You can't save the money.");
            console.log(daysCounter);
            break;
        }
        index++;
    }
    if (money >= excursionPrice) {
        console.log(`You saved the money for ${daysCounter} days.`);
    }
}

vacation2(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
