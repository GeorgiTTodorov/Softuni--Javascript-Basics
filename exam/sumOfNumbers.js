function sumOfNumbers(input) {
    let n = Number(input[0])
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let res = '';
    let sum = 0;
    let multiplier = 0;
    let numN = input[0];
    let endN = Number(numN.charAt(2));

    let isFound = false;

    for ( a = 1; a <= 9; a++) {
        if (isFound) {
            break;
        }
        for ( b = 9; b >= a; b--) {
            if (isFound) {
                break;
            }
            for ( c = 1; c <= 9; c++) {
                if (isFound) {
                    break;
                }
                for ( d = 9; d >= c; d--) {
                    res = Number(`${a}${b}${c}${d}`);
                    sum = a + b + c + d;
                    multiplier = a * b * c * d;
                    let sumOfMulti = Math.floor(multiplier / sum);
                    if (sum === multiplier && endN === 5) {
                        isFound = true;
                        console.log(`${a}${b}${c}${d}`);
                        break;
                    } else if (sumOfMulti === 3 && n % 3 === 0) {
                        isFound = true;
                        console.log(`${d}${c}${b}${a}`);
                        break;
                    } else {
                        continue;
                    }

                }
            }
        }   
    }           if (!isFound) {
                console.log("Nothing found");
                
    }
               
            
}

sumOfNumbers(["214"])