function fruitShop (input) {
    const fruit = input[0];
    const dayOfTheWeek = input[1];
    const quantity = Number(input[2]);

    let price = 0;

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {
        switch (fruit) {
            case "banana": price = quantity * 2.5; console.log(price.toFixed(2)); break;
            case "apple" : price = quantity * 1.2; console.log(price.toFixed(2)); break;
            case "orange": price = quantity * 0.85; console.log(price.toFixed(2)); break;
            case "grapefruit": price = quantity * 1.45; console.log(price.toFixed(2)); break;
            case "kiwi": price = quantity * 2.7; console.log(price.toFixed(2)); break;
            case "pineapple": price = quantity * 5.5; console.log(price.toFixed(2)); break;
            case "grapes": price = quantity * 3.85; console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
        switch (fruit) {
            case "banana": price = quantity * 2.7; console.log(price.toFixed(2)); break;
            case "apple" : price = quantity * 1.25; console.log(price.toFixed(2)); break;
            case "orange": price = quantity * 0.9; console.log(price.toFixed(2)); break;
            case "grapefruit": price = quantity * 1.6; console.log(price.toFixed(2)); break;
            case "kiwi": price = quantity * 3; console.log(price.toFixed(2)); break;
            case "pineapple": price = quantity * 5.6; console.log(price.toFixed(2)); break;
            case "grapes": price = quantity * 4.2; console.log(price.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
       console.log("error");
    }
    }
       

//fruitShop(["apple","Tuesday","2"]);
//fruitShop(["orange","Sunday","3"]);
//fruitShop(["kiwi","Monday","2.5"]);
//fruitShop(["grapes","Saturday","0.5"]);
//fruitShop(["tomato","Monday","0.5"]);
fruitShop(["apple",
"Workday",
"2"])





