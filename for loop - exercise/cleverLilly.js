function cleverLilly (input) {
    const lillysAge = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const toyPrice = Number(input[2]);
    let present = 0;
    let toys = 0;
    let increase = 10;

    for (i = 1; i <= lillysAge; i++ ) {
        let birthdays = i;
        if (birthdays % 2 === 0) {
            present += increase - 1;
            increase += 10;
        } else {
            toys++;
        } 
    }
    let moneySaved = present + toys * toyPrice;

    if (moneySaved >= washingMachinePrice) {
        let moneyLeft = moneySaved - washingMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingMachinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

cleverLilly(["10","170.00","6"])
//cleverLilly(["21","1570.98","3"])

