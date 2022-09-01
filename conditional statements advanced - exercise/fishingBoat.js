function fishingBoat (input) {
    const budget = Number(input[0]);
    const season = input[1];
    const fishermen = Number(input[2]);

    let springBoatPrice = 3000;
    let summerAndAutumnBoatPrice = 4200; 
    let winterBoatPrice = 2600;
    let finalMoney = 0; 

    switch (season) {
        case "Spring": finalMoney = springBoatPrice; break;
        case "Winter": finalMoney = winterBoatPrice; break;
        case "Summer":
        case "Autumn": finalMoney = summerAndAutumnBoatPrice; break;
    }
    
    if (fishermen <= 6 ) {
        finalMoney -= finalMoney * 0.1;
    } else if (fishermen >= 7 && fishermen <= 11) {
        finalMoney -=  finalMoney * 0.15;
    } else {
        finalMoney -= finalMoney * 0.25;
    }
    
    if ( fishermen % 2 === 0 && season != "Autumn") {
        finalMoney -= finalMoney * 0.05;
    } 

    if (budget >= finalMoney) {
        const moneyLeft = budget - finalMoney;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        const moneyNeeded = finalMoney - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }


}

fishingBoat(["3000","Summer","11"]);
fishingBoat(["3600","Autumn","6"]);
fishingBoat(["2000","Winter","13"]);

