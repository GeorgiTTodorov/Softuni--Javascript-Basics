function sumOfNumbers(input) {
    let textNumber = input[0];
    let sum = 0;

    for (i = 0; i < textNumber.length; i++) {
        let num = Number(textNumber[i]);
        sum += num;
    }

    console.log(`The sum of the digits is:${sum}`);


    
}


sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);