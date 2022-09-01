function vegetableMarket(input) {
    const vegetablesPricePerKilo = Number(input[0]);
    const fruitPricePerKilo = Number(input[1]);
    const vegetablesKg = Number(input[2]);
    const fruitsKg = Number(input[3]);
    const euro = 1.94;

    const vegetablesPrice = vegetablesPricePerKilo * vegetablesKg;
    const fruitsPrice = fruitPricePerKilo * fruitsKg;
    const totalPrice = (vegetablesPrice + fruitsPrice) / euro;

    console.log(totalPrice.toFixed(2));

}

vegetableMarket(["0.194","19.4","10","10"]);
vegetableMarket(["1.5","2.5","10","10"]);