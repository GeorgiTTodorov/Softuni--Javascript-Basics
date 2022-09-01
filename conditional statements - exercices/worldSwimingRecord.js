function worldSwimmingRecord (input) {
    const recordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSecFor1mDistance = Number(input[2]);

    const time = distanceInMeters * timeInSecFor1mDistance;
    const waterResistance = Math.floor(distanceInMeters / 15) * 12.5;
    const totalTime = time + waterResistance;
    let difference = totalTime - recordInSeconds;

    if (totalTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464","1500","20"]);
worldSwimmingRecord(["55555.67","3017","5.03"]);

