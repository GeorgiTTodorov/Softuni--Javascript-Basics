function touristAgency(input) {
    const city = input[0];
    const typeOfStay = input[1];
    const vipHolder = input[2];
    let daysOfStay = Number(input[3]);
    let priceForADay = 0;
    let totalPrice = 0;
 
    let isTrue = false;
    
    switch (city) {
        case "Bansko":
        case "Borovets": 
            switch (typeOfStay) {
                case "noEquipment":
                priceForADay = 80;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 5 / 100;
                } isTrue = true; break;
            case "withEquipment":
                priceForADay = 100;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 10 / 100;
                } isTrue = true; break;
            }
        break;
        case "Varna":
        case "Burgas":
            switch (typeOfStay) {
                case "withBreakfast": priceForADay = 130;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 12 / 100;
                } isTrue = true; break;
                case "noBreakfast":
                priceForADay = 100;
                if (vipHolder === "yes") {
                    priceForADay -= priceForADay * 7 / 100;
                } isTrue = true; break;
            }   
        break;      
    } 

        totalprice = priceForADay * daysOfStay;
    if ( daysOfStay >= 7) {
        totalprice = priceForADay * (daysOfStay - 1);
    }

            if (!isTrue) {
                console.log("Invalid input!");
            break;
            } else if (daysOfStay < 1) {
                console.log("Days must be positive number!");
            } else {
                console.log(`The price is ${totalprice.toFixed(2)}lv! Have a nice time!`);
            }
        }    
    
    


touristAgency(["Gabrovo","noBreakfast","no",3]);
    