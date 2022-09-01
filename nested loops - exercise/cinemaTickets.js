function cinemaTickets(input) {
   let index = 0;
   let inputLine = input[index];
   let standardTicketCount = 0;
   let studentTicketCount = 0;
   let kidTicketCount = 0;

    while (inputLine !== "Finish") {
        let movieName = input[index];
        index++;
        let totalTicketCount = Number(input[index]);
        let freeSpaces = totalTicketCount;
        index++;
        let typeOfTicket = input[index];
        while (typeOfTicket !== "End" ) {
            switch (typeOfTicket) {
                case "standard":
                    standardTicketCount++; break;
                case "student": 
                    studentTicketCount++; break;
                case "kid":
                    kidTicketCount++; break;        
            }
            freeSpaces--;
            if (freeSpaces === 0) {
                break;
            }
            index++;
            typeOfTicket = input[index];
        }
        let boughtTickets = totalTicketCount - freeSpaces;
        let percentageFull = boughtTickets / totalTicketCount * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        index++;
        inputLine = input[index];
    }
        let allBoughtTickets = standardTicketCount + kidTicketCount + studentTicketCount;
        console.log(`Total tickets: ${allBoughtTickets}`);
        console.log(`${(studentTicketCount / allBoughtTickets * 100).toFixed(2)}% student tickets.`);
        console.log(`${(standardTicketCount / allBoughtTickets * 100).toFixed(2)}% standard tickets.`);
        console.log(`${(kidTicketCount / allBoughtTickets * 100).toFixed(2)}% kids tickets.`);
        
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
