function touristAgency(input) {
    const city = input[0];
    const typeOfStay = input[1];
    const vipHolder = input[2];
    let daysOfStay = Number(input[3]);
    let priceForADay = 0;

    let cityInput = false; 

    switch (city) {
        case "Bansko":
        case "Borovets": cityInput = true;
            if (typeOfStay === "noEquipment") {
                priceForADay = 80; 
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 5 / 100;
                }
            } else {
                priceForADay = 100;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 10 / 100;
                }
            }
        break;
        case "Varna":
        case "Burgas": cityInput = true;
            if (typeOfStay === "withBreakfast") {
                priceForADay = 130;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 12 / 100;
                }
            }  else {
                priceForADay = 100;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 7 / 100;
                }
            }
        break;       
    }
        let totalPrice = priceForADay * daysOfStay;
        if (daysOfStay >= 7) {
            totalPrice = priceForADay * (daysOfStay - 1);
        }

        if (!cityInput) {
            console.log("Invalid input!");
        }else if (daysOfStay < 1) {
            console.log("Days must be positive number!");
        } else {
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        }

}

touristAgency(["Gabrovo",
"noBreakfast",
"no",
3])
