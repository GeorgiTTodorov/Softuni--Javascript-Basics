function club (input) {
    let index = 0;
    let incomeGoal = Number(input[index]);
    index++;
    let cocktail = input[index];
    let income = 0;

    while (cocktail !== "Party!") {
        let price = cocktail.length;
        index++;
        let amount = Number(input[index]);
        let currentPrice = 0;
        currentPrice += price * amount;
        if (currentPrice % 2 === 1) {
            currentPrice -= currentPrice * 25/100;
        }
        income += currentPrice;
        if (income >= incomeGoal) {
            console.log("Target acquired.");
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;
        }  
        index++;
        cocktail = input[index];   
    }
    
    if (income < incomeGoal) {
    console.log(` We need ${(incomeGoal - income).toFixed(2)} leva more.`);
    console.log(` Club income - ${income.toFixed(2)} leva.`);

    }
    
}

club([
    500,
    "Bellini",
    6,
    "Bamboo",
    7,
    "Party!"   
])