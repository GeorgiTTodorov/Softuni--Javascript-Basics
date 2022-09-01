function cinema(input) {
    const projectionType = input[0];
    const rows = Number(input[1]);
    const colls = Number(input[2]);

    let price = 0;

    switch (projectionType) {
        case "Premiere": price = 12.00; 
        console.log(`${(price * (rows * colls)).toFixed(2)} leva`); break;
        case "Normal": price = 7.50; 
        console.log(`${(price * (rows * colls)).toFixed(2)} leva`); break;
        case "Discount": price = 5.00;
        console.log(`${(price * (rows * colls)).toFixed(2)} leva`); break;
    }

}

cinema(["Premiere","10","12"]);
cinema(["Normal","21","13"]);
cinema(["Discount","12","30"]);
