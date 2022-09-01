function fitnessCenter (input) {
    index = 0;
    let fitnessVisitors = Number(input[index]);
    index++;
    let ptBack = 0;
    let ptChest = 0;
    let ptLegs = 0;
    let ptAbs = 0;
    let psPurchase = 0;
    let pbPurchase = 0;
    let type = input[index];
    let totalPurchases = 0;
    let totalWorkouts = 0;

    for (n = fitnessVisitors; n > 0; n--) {
        switch (type) {
            case "Back": ptBack++;totalWorkouts++; break;
            case "Chest": ptChest++;totalWorkouts++; break;
            case "Legs": ptLegs++;totalWorkouts++; break;
            case "Abs": ptAbs++; totalWorkouts++; break;
            case "Protein shake": psPurchase++; totalPurchases++; break;
            case "Protein bar": pbPurchase++; totalPurchases++; break;
        }
        index++;
        type = input[index];
    }
    let percentageWorkouts = (totalWorkouts / fitnessVisitors) * 100  ;
    let percentagePurchases = (totalPurchases / fitnessVisitors) * 100;

    console.log	(`${ptBack} - back`)
    console.log	(`${ptChest} - chest`)
    console.log	(`${ptLegs} - legs`)
    console.log	(`${ptAbs} - abs`)
    console.log	(`${psPurchase} - protein shake`)
    console.log	(`${pbPurchase} - protein bar`)
    console.log	(`${percentageWorkouts.toFixed(2)}% - work out`)
    console.log	(`${percentagePurchases.toFixed(2)}% - protein`)

}

fitnessCenter([
7,
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
])