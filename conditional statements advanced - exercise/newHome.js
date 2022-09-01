function newHome(input) {
    const flower = input[0];
    const numFlowers = Number(input[1]);
    const budget = Number(input[2]);
    
    const priceOfRoses = 5;
    const priceOfDahlias = 3.8;
    const priceOfTulips = 2.8;
    const priceOfNarcissus = 3;
    const priceOfGladiolus = 2.5;
    let finalPrice = 0;

    switch (flower) {
        case "Roses":
            if (numFlowers > 80) {
                finalPrice -= priceOfRoses * numFlowers * (10/100);
            }  finalPrice += priceOfRoses * numFlowers;
            break;   
        case "Dahlias":
            if (numFlowers > 90) {
                finalPrice -= priceOfDahlias * numFlowers * (15/100);
            }   finalPrice += priceOfDahlias * numFlowers; 
        break;
        case "Tulips":
            if (numFlowers > 80) {
                finalPrice -= priceOfTulips * numFlowers * (15/100);
            }   finalPrice += priceOfTulips * numFlowers; 
        break;
        case "Narcissus":
            if (numFlowers < 120 ) {
                finalPrice += priceOfNarcissus * numFlowers * (15/100);
            }   finalPrice += priceOfNarcissus * numFlowers;
        break;
        case "Gladiolus":
            if (numFlowers < 80 ) {
                finalPrice += priceOfGladiolus * numFlowers * (20/100);
            }   finalPrice += priceOfGladiolus * numFlowers; 
        break;
    }
    
        if (budget >= finalPrice) {
            const moneyLeft = budget - finalPrice;
            console.log(`Hey, you have a great garden with ${numFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`);
        } else {
            const moneyNeeded = finalPrice - budget;
            console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
        }
     
  
}

newHome(["Roses","55","250"]);
newHome(["Tulips","88","260"]);
newHome(["Narcissus","119","360"]);


