function onTimeForTheExam (input) {
    const timeOfTheExam = Number(input[0]);
    const minutesOfTheExam = Number(input[1]);
    const timeOfArrival = Number(input[2]);
    const minuteOfArrival = Number(input[3]);
    
    const totalExamMins = timeOfTheExam * 60 + minutesOfTheExam;
    const totalArrivalMins = timeOfArrival * 60 + minuteOfArrival;
    const difference = Math.abs(totalExamMins - totalArrivalMins);
    const hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;

    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
        minDiff = `0${minDiff}`;
    }

    if (totalExamMins === totalArrivalMins) {
        console.log("On time");
    } else if (totalArrivalMins > totalExamMins && difference < 60) {
        console.log("Late");
        console.log(`${minDiff} minutes after the start`);
    } else if (totalArrivalMins > totalExamMins && difference >= 60) {
        console.log("Late");
        console.log(`${hourDiff}:${minDiff} hours after the start`);
    } else if (difference <= 30) {
        console.log("On time");
        console.log(`${minDiff} minutes before the start`);
    } else if (difference > 30 && difference < 60) {
        console.log("Early");
        console.log(`${minDiff} minutes before the start`);
    } else {
        console.log("Early");
        console.log(`${hourDiff}:${minDiff} hours before the start`);
    }


   
}

onTimeForTheExam(["14",
"00",
"13",
"55"])

