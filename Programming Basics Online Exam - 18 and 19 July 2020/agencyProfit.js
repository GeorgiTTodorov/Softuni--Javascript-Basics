function agencyProfit(input) {
    const airlineName = input[0];
    const numOfTicketsAdults = Number(input[1]);
    const numOfTickesChildren = Number(input[2]);
    const netPriceAdults = Number(input[3]);
    const priceOfService = Number(input[4]);

    let priceOfKidTicket = netPriceAdults - netPriceAdults * 70 / 100;
    let adultTicketTotal = netPriceAdults + priceOfService;
    let kidTicketTotal = priceOfKidTicket + priceOfService;
    let total = adultTicketTotal * numOfTicketsAdults + kidTicketTotal * numOfTickesChildren;
    let airlineProfit = total * 20 /100;

    console.log(`The profit of your agency from ${airlineName} tickets is ${airlineProfit.toFixed(2)} lv.`);


}

agencyProfit(["WizzAir",
    15,
    5,
    120,
    40
    ])