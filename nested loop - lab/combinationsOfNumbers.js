function combinationsOfNumbers(input) {
    let num = Number(input[0]);
    let combinationsCounter = 0;

    for (let x1 = 0; x1 <= num; x1++) {
        for (let x2 = 0; x2 <= num; x2++) {
            for (let x3 = 0; x3 <= num; x3++) {
                let validCombination = x1 + x2 + x3;
                if (validCombination === num) {
                combinationsCounter++;
                }
            }
        }
    }
            console.log(combinationsCounter);
}

combinationsOfNumbers(["25"])