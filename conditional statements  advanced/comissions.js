function comissions(input) {
    const sales = Number(input[1]);
    const town = input[0];

    let personalComission = 0;
    let percent = 0;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia": percent = 5/100 ; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Varna": percent = 4.5/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Plovdiv": percent = 5.5/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia": percent = 7/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Varna": percent = 7.5/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Plovdiv": percent = 8/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (sales > 1000 && sales <= 10000 ) {
        switch(town) {
            case "Sofia": percent = 8/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Varna": percent = 10/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Plovdiv": percent = 12/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            default: console.log("error"); break;
        } 
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia": percent = 12/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Varna": percent = 13/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            case "Plovdiv": percent = 14.5/100; personalComission = sales * percent;
            console.log(personalComission.toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }


}

comissions(["Sofia","1500"]);
comissions(["Plovdiv","499.99"]);
comissions(["Varna","3874.50"]);
comissions(["Kaspichan","-50"]);



