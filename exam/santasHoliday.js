function santasHoliday(input) {
    const daysOfStay = Number(input[0]);
    const typeOfStay = input[1];
    const review = input[2];

    const roomForOnePerson = 18;
    const appartment = 25;
    const presidentAppartment = 35;

    let totalPrice = 0;

    switch (typeOfStay) {
        case "room for one person": totalPrice = roomForOnePerson * daysOfStay - roomForOnePerson; break;
        case "apartment" : totalPrice = appartment * daysOfStay - appartment;
        if (daysOfStay < 10) {
            totalPrice -= totalPrice * 30 / 100; 
        } else if (daysOfStay >= 10 && daysOfStay <= 15) {
            totalPrice -= totalPrice * 35 / 100;
        } else {
            totalPrice -= totalPrice * 50 / 100;
        } break;
        case "president apartment": totalPrice = presidentAppartment * daysOfStay - presidentAppartment;
        if (daysOfStay < 10) {
            totalPrice -= totalPrice * 10 / 100;
        } else if (daysOfStay >= 10 && daysOfStay <= 15) {
            totalPrice -= totalPrice * 15 / 100;
        } else {
            totalPrice -= totalPrice * 20 / 100;
        } break;
    }

    if (review === "positive") {
        totalPrice += totalPrice * 25 / 100;
    } else {
        totalPrice -= totalPrice * 10 / 100;
    }

    console.log(totalPrice.toFixed(2));
}

santasHoliday(["30",
"president apartment",
"negative"])

