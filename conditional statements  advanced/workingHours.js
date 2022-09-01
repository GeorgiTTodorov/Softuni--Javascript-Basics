function workingHours(input) {
    const hourOfDay = Number(input[0]);
    const dayOfTheWeek = input[1];

   switch (dayOfTheWeek) {
       case "Monday":
       case "Tuesday":
       case "Wednesday":
       case "Thursday":
       case "Friday":
       case "Saturday":
    if (hourOfDay >= 10 && hourOfDay <= 18) {
        console.log("open");
    } else {
        console.log("closed") 
    } break;
        case "Sunday":
            console.log("closed");   
   }
   
}

workingHours(["11","Monday"]);
workingHours(["19","Friday"]);
workingHours(["11","Sunday"]);

