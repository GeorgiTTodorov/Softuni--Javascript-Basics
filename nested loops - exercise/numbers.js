function numbers(input) {
    let index = 0;
    let primeNumbers = 0;
    let nonPrimeNumbers = 0;

    while (input[index] !== "stop") {
        let currNum = Number(input[index]);
        index++;
        if (currNum < 0) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;
            for (i = 2; i < currNum; i++) {
                if (currNum % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeNumbers += currNum;
            } else {
                nonPrimeNumbers += currNum;
            }
            
        }

    }
    console.log(`Sum of all prime numbers is: ${primeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumbers}`); 


}

numbers(["30",
"83",
"33",
"-1",
"20",
"stop"])



