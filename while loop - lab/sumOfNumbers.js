function sumOfNumbers(input) {
    let index = 0;
    let num = Number(input[0]);
    index++;
    
    let sum = 0;
    

    while (sum < num ) {
        let tempNumber = Number(input[index]);
        index++;
        
        sum += tempNumber;
    }

    console.log(sum);
}

sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

