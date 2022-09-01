function vacation (input) {
    let vacationMoney = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    let sum = 0;
    let daysCounter = 0;
    let spendCounter = 0;

    while (currentMoney < vacationMoney) {
        command = input[index];
        index++;
        sum = Number(input[index]);
        daysCounter++;
        if (command === "spend") {
            spendCounter++;
            currentMoney -= sum;
            if (currentMoney < 0) {
                currentMoney = 0;
            } 
        } else {
            currentMoney += sum;
            spendCounter = 0;
        }
        if ( spendCounter >= 5) {
            console.log("You can't save the money.");
            console.log(spendCounter);
            break;
        } 
        index++;
    }
        if (currentMoney >= vacationMoney) {
            console.log(`You saved the money for ${daysCounter} days.`);
        }

}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
