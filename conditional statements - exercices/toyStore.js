function toyStore(input) {
    const puzzle = 2.6;
    const talkingDoll = 3;
    const tedyBear = 4.1;
    const minion = 8.2;
    const toyTruck = 2;

    const vacationPrice = Number(input[0]);
    const puzzleNum = Number(input[1]);
    const talkingDollsNum = Number(input[2]);
    const tedyBearsNum = Number(input[3]);
    const minionsNum = Number(input[4]);
    const toyTrucksNum = Number(input[5]);

    let totalPrice = puzzle * puzzleNum + talkingDoll * talkingDollsNum
     + tedyBear * tedyBearsNum + minion * minionsNum + toyTruck * toyTrucksNum;

     const toysTotalSum = puzzleNum + talkingDollsNum + tedyBearsNum + minionsNum + toyTrucksNum;

     if (toysTotalSum >= 50) {
        totalPrice *= 0.75;
     }

     totalPrice *= 0.9;

     const moneyLeft = Math.abs(totalPrice - vacationPrice);

     if (totalPrice >= vacationPrice) {
         console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
     } else {
         console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
     }

}
toyStore(["40.8","20","25","30","50","10"]);
toyStore(["320","8","2","5","5","1"]);

