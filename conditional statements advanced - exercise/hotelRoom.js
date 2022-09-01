function hotelRoom(input) {
    const month = input[0];
    const durationOfStay = Number(input[1]);

    let studio = 0 ;
    let apartment = 0;

    switch (month) {
        case "May":
        case "October": studio = 50; apartment = 65; 
        if (durationOfStay >= 7 && durationOfStay <= 14) {
            studio -= studio * 0.05; 
        } else {
            studio -= studio * 0.3;
        }
        break;
        case "June":
        case "September": studio = 75.2; apartment = 68.7; break;
        case "July":
        case "August": studio = 76; apartment = 77; break         
    }   
        if (durationOfStay >= 7 && durationOfStay <= 14 && month === "May" || month === "October") {
            studio -= studio * 0.05;
        } else if (durationOfStay >= 14 && month === "May" || month === "October") {
            studio -= studio * 0.3;
        }
        else if (durationOfStay > 14 && month === "June" || month === "September") {
            studio -= studio * 0.2;
        } else {
        }
        if ( durationOfStay > 14) {
            apartment -= apartment * 0.1;
        }
        
        console.log(`Apartment: ${(apartment * durationOfStay).toFixed(2)} lv.`);
        console.log(`Studio: ${(studio * durationOfStay).toFixed(2)} lv.`)

}

hotelRoom(["May",
"15"])
hotelRoom(["June",
"14"])
//hotelRoom(["August",
//"20"])

