function godzillaVsKong(input) {
    const movieBudget = Number(input[0]);
    const extraCount = Number(input[1]);
    const singleSuitPrice = Number(input[2]);

    const set = movieBudget * (10/100);
    let wardrobePrice = singleSuitPrice * extraCount;

    if (extraCount >= 150) {
        wardrobePrice = (singleSuitPrice * extraCount) - (singleSuitPrice * extraCount * (10/100));
    }

    let filmExpenses = set + wardrobePrice;
    let moneyLeft = Math.abs(movieBudget - filmExpenses);
    
    if (filmExpenses > movieBudget) {
        console.log(`Not enough money!
        Wingard needs ${moneyLeft.toFixed(2)} leva more.`)
    } else {
        console.log(`Action!
        Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}

godzillaVsKong(["20000","120","55.5"]);
godzillaVsKong(["15437.62","186","57.99"]);
godzillaVsKong(["9587.88","222","55.68"]);


