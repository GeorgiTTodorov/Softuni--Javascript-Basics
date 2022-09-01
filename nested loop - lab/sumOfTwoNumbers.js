function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;

    let isFound = false;

    for (a = start; a <= end; a++) {
        for (n = start; n <= end; n++) {
            let sum = a + n;
            combinations++;

            if (sum === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combinations} (${a} + ${n} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
             if (!isFound) {
            console.log(`${combinations} combinations - neither equals ${magicNumber}`);
             } 

}

sumOfTwoNumbers(["88",
"888",
"1000"])

