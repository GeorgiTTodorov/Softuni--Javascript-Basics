function suppliesforSchool(input) {
    const penPackPrice = 5.8;
    const markerPackPrice = 7.2;
    const detergentPrice = 1.2;

    const penPacksNumber = Number(input[0]);
    const markerPacksNumber = Number(input[1]);
    const cleaningDetergentNumber = Number(input[2]);
    const discountPrice = Number(input[3]);

    const totalPrice = penPacksNumber * penPackPrice + markerPacksNumber * markerPackPrice + detergentPrice * cleaningDetergentNumber;
    const finalPriceAfterDiscount = totalPrice - (discountPrice / 100) * totalPrice;
    console.log(finalPriceAfterDiscount);

}

suppliesforSchool(["2 ","3 ","4 ","25 "]);