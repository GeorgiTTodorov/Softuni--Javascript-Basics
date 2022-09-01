function pool(input) {
    const numOfPeople = Number(input[0]);
    const priceOfVisit = Number(input[1]);
    const priceOfDeckChair = Number(input[2]);
    const priceOfUmbrella = Number(input[3]);

    let costOfEntry = numOfPeople * priceOfVisit;
    let deckChairCost = Math.ceil(75 / 100 * numOfPeople) * priceOfDeckChair;
    let umbrellaTotalCost = Math.ceil(50 /100 * numOfPeople) * priceOfUmbrella;
    let totalCost = (costOfEntry + deckChairCost + umbrellaTotalCost).toFixed(2);

    console.log(`${totalCost} lv.`);

}

pool([21, 5.5, 4.4, 6.2]);
