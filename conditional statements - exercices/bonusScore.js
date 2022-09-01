function bonusScore(input) {
    const score = Number(input[0]);
    let bonus = "";

    if (score <= 100) {
        bonus = 5;
    } else if (score > 100, score <= 1000) {
        bonus = score * (20 / 100);
    } else if (score > 1000) {
        bonus = score * (10 / 100);
    }
    if (score % 2 === 0) {
        bonus += 1;
    } else if (score % 10 === 5) {
        bonus += 2;
    }
    console.log(bonus);
    console.log(score + bonus);

}

bonusScore(["20"]);
bonusScore(["175"]);
bonusScore(["2703"]);
bonusScore(["15875"]);