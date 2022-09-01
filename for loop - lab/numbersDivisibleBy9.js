function numbersDivisibleBy9(input) {

    const numA = Number(input[0]);
    const numB = Number(input[1]);
    let sum = 0;

    for (let i = numA; i <= numB; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }   console.log("The sum:"+ ' ' + sum)
    
    for (let i = numA; i <= numB; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }

}

numbersDivisibleBy9(["100", "200"]);