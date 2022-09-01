function foodDelivery (input) {
    const chickenMenu = 10.35;
    const fishMenu = 12.4;
    const vegetarianMenu = 8.15;
    const desert = 0.2;
    const delivery = 2.5;

    const chickenMenuNumber = Number(input[0]);
    const fishMenuNumber = Number(input[1]);
    const vegetarianMenuNumber = Number(input[2]);

    const chickenMenuPrice = chickenMenu * chickenMenuNumber;
    const fishMenuPrice = fishMenu * fishMenuNumber;
    const vegetarianMenuPrice = vegetarianMenu * vegetarianMenuNumber;
    const menusTotalCost = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    const desertPrice = menusTotalCost * desert;
    const totalPrice = menusTotalCost + desertPrice + delivery;

    console.log(totalPrice);
    
}

foodDelivery(["2 ","4 ","3 "]);
foodDelivery(["9 ","2 ","6 "]);