function test(input) {
    const city = input[0];
    const typeOfStay = input[1];
    const vipHolder = input[2];
    let daysOfStay = Number(input[3]);
    let priceForADay = 0;
    let totalPrice = 0;

    let info = true;

    if (city === "Bansko" || city === "Borovets") {
        switch (typeOfStay) {
            case "noEquipment": priceForADay = 80;
            if (vipHolder === "yes") {
                priceForADay -= priceForADay * 5 / 100;
            } break;
            case "withEquipment": priceForADay = 100;
            if (vipHolder === "yes") {
                priceForADay -= priceForADay * 10 / 100;
            } break;
            default: info = false; console.log("Invalid input!"); break;
        }
    } else {
        switch (typeOfStay) {
            case "withBreakfast": priceForADay = 130;
            if (vipHolder === "yes") {
                priceForADay -= priceForADay * 12 / 100;
            } break;
            case "noBreakfast": priceForADay = 100;
            if (vipHolder === "yes") {
                priceForADay -= priceForADay * 7 / 100;
            } break;
            default: info = false; console.log("Invalid input!"); break;
        }
    }
        if (!info) {
            break;
        } else if (daysOfStay < 1) {
            console.log("Days must be positive number!");
        } else {
            totalPrice = daysOfStay * priceForADay;
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        }
}

test(["Borovets",
"noEquipment",
"yes",
6])