function addBags(input) {
    let priceOfBag = Number(input[0]);
    const weightOfBag = Number(input[1]);
    const daysUntilDeparture = Number(input[2]);
    const numOfBags = Number(input[3]);
    

    if (weightOfBag < 10) {
        priceOfBag = priceOfBag * 20 / 100;
    }
    else if (weightOfBag >= 10 && weightOfBag <= 20) {
            priceOfBag = priceOfBag * 50 / 100;
    } else {
         priceOfBag = Number(input[0]);
    }

   if (daysUntilDeparture > 30) {
       priceOfBag += priceOfBag * 10 / 100;
   } else if (daysUntilDeparture >= 7 && daysUntilDeparture <= 30) {
       priceOfBag += priceOfBag * 15 / 100;
   } else {
       priceOfBag += priceOfBag * 40 / 100;
   }

   let totalCost = priceOfBag * numOfBags;
   console.log(` The total price of bags is: ${totalCost.toFixed(2)} lv. `);
}

addBags(["63.80",
"23",
"3",
"1"])
