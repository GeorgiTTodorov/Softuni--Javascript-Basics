function test(input) {
    const timeOfTheExam = Number(input[0]);
    const minutesOfTheExam = Number(input[1]);
    const timeOfArrival = Number(input[2]);
    const minuteOfArrival = Number(input[3]);
    
    const totalExamMins = timeOfTheExam * 60 + minutesOfTheExam;
    const totalArrivalMins = timeOfArrival * 60 + minuteOfArrival;
    const difference = Math.abs(totalExamMins - totalArrivalMins);
    const hourDiff = Math.floor(difference / 60);
    let minDiff = difference % 60;

    console.log(`${hourDiff}:${minDiff}`)

}

test(["9",
"30",
"9",
"50"])