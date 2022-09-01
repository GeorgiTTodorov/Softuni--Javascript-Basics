function skiTrip(input) {
    const roomForOnePerson = 18;
    const apartment = 25;
    const presidentApartment = 35;

    const daysOfStay = Number(input[0]);
    const nights = daysOfStay - 1;
    const roomType = input[1];
    const evaluation = input[2];

    let totalPrice = 0;

    switch(roomType) {
        case "room for one person": totalPrice = roomForOnePerson * nights; break;
        case "apartment":
        if (daysOfStay < 10) {
            totalPrice = (apartment * nights) - ((apartment * nights) * 0.3);
        } else if ( daysOfStay >= 10 && daysOfStay <= 15) {
            totalPrice = (apartment * nights) - ((apartment * nights) * 0.35);
        } else {
            totalPrice = (apartment * nights) - ((apartment * nights) * 0.5);
        } break;
        case "president apartment":
        if (daysOfStay < 10) {
            totalPrice = (presidentApartment * nights) - ((presidentApartment * nights) * 0.1);
        } else if (daysOfStay >= 10 && daysOfStay <= 15) {
            totalPrice = (presidentApartment * nights) - ((presidentApartment * nights) * 0.15);
        } else {
            totalPrice = (presidentApartment * nights) - ((presidentApartment * nights) * 0.2);
        } break;
    }

    switch (evaluation) {
        case "positive": totalPrice += totalPrice * 0.25; break;
        case "negative": totalPrice -= totalPrice * 0.1; break;
    }
    console.log(totalPrice.toFixed(2));

}

//skiTrip(["14",
//"apartment",
//"positive"])
skiTrip(["30",
"president apartment",
"negative"])

