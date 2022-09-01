function smallShopIF (input) {
    const product = input[0];
    const town = input[1];
    const quantity = Number(input[2]);

    let price = 0;

    if (town === "Varna") {
        switch (product) {
            case "coffee": price = 0.45; break;
            case "water" : price = 0.7;  break;
            case "beer"  : price = 1.1;  break;
            case "sweets": price = 1.35; break;
            case "peanuts": price = 1.55; break;
        }
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = 0.40; break;
            case "water" : price = 0.7;  break;
            case "beer"  : price = 1.15;  break;
            case "sweets": price = 1.3; break;
            case "peanuts": price = 1.5; break;    
        }
    } else {
        switch (product) {
            case "coffee": price = 0.5; break;
            case "water" : price = 0.8;  break;
            case "beer"  : price = 1.2;  break;
            case "sweets": price = 1.45; break;
            case "peanuts": price = 1.6; break;
        }
    }
    let realPrice = quantity * price;

    console.log(realPrice);

}

smallShopIF(["coffee","Varna",2]);
smallShopIF(["peanuts","Plovdiv",1]);
smallShopIF(["beer","Sofia",6]);
smallShopIF(["water","Plovdiv",3]);
smallShopIF(["sweets","Sofia",2.23]);