function petShop(input) {
    let numberOfDogFoodPacks = Number(input[0]) * 2.5;
    let numberOfCatFoodPacks = Number(input[1]) * 4;
    let totalCost = numberOfDogFoodPacks + numberOfCatFoodPacks;
    console.log(totalCost);
    
}

petShop(["5","4"]);
petShop(["13","9"]);