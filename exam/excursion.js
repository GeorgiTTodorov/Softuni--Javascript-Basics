function excursion(input) {
    const numOfPeopleInGroup = Number(input[0]);
    const numOfNights = Number(input[1]);
    const numOfTransportCards = Number(input[2]);
    const numOfMuseumTickets = Number(input[3]);

    let oneNight = 20;
    let transportCard = 1.6;
    let museumTicket = 6;

    let onePersonTotalNights = oneNight * numOfNights;
    let transportCards = transportCard * numOfTransportCards;
    let museumTicketsPrice = numOfMuseumTickets * museumTicket;

    let pricePerPerson = onePersonTotalNights + transportCards + museumTicketsPrice;
    let priceForWholeGroup = pricePerPerson * numOfPeopleInGroup;
    let totalPrice = priceForWholeGroup + priceForWholeGroup * 25 / 100;

    console.log(totalPrice.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"])

