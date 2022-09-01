function cinemaTicket (input) {
    const dayOfTheWeek = input[0];
    let price = 0;

    switch (dayOfTheWeek) {
        case "Monday":
        case "Tuesday": price = 12;
        console.log(price); break;
        case "Wednesday": 
        case "Thursday": price =14;
        console.log(price); break;
        case "Friday": price = 12;
        console.log(price); break;
        case "Saturday": 
        case "Sunday": price = 16;
        console.log(price);  
    }
}

cinemaTicket(["Monday"]);
cinemaTicket(["Friday"]);
cinemaTicket(["Sunday"]);
