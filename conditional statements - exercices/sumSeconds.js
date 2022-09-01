function sumSeconds(input) {
    const timeFirst = Number(input[0]);
    const timeSecond = Number(input[1]);
    const timeThird = Number(input[2]);
    let timeTotal = timeFirst + timeSecond + timeThird;
    let minutes = Math.floor(timeTotal / 60);
    let seconds = timeTotal % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["35","45","44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50","50","49"]);
sumSeconds(["14", "12","10"]);



