function lunchBreak(input) {
    const tvSeriesName = input[0];
    const durOfEpisode = Number(input[1]);
    const durOfBreak = Number(input[2]);

    const lunchTime = durOfBreak / 8;
    const relaxationTime = durOfBreak / 4;
    const timeLeft = durOfBreak - lunchTime - relaxationTime;
    const spareTime = Math.abs(timeLeft - durOfEpisode);

    if (timeLeft >= durOfEpisode) {
        console.log(`You have enough time to watch ${tvSeriesName} and left with ${Math.ceil(spareTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeriesName}, you need ${Math.ceil(spareTime)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones","60","96"]);
lunchBreak(["Teen Wolf","48","60"]);

