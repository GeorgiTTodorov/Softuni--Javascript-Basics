function bracletStand(input) {
    const pocketMoney = Number(input[0]);
    const incomeForSales = Number(input[1]);
    const totalPeriodCosts = Number(input[2]);
    const giftPrice = Number(input[3]);

    let days = 5;

    let pocketMoneySaved = pocketMoney * days;
    let incomeForSalesSaved = incomeForSales * days;
    let moneySaved = pocketMoneySaved + incomeForSalesSaved;
    let moneyAfterTax = moneySaved - totalPeriodCosts;

    if (moneyAfterTax >= giftPrice) {
        console.log(`Profit: ${moneyAfterTax.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrice - moneyAfterTax).toFixed(2)} BGN.`);
    }

}

bracletStand(["2.10",
"17.50",
"20.20",
"148.50"])

