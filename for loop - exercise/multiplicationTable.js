function multiplicationTable(input) {
    const num = Number(input[0]);
    let sum = 0;
    let result = 0;

    for (let i = 1; i <= 10; i++) {
        result = i * num;
        sum = (`${i} * ${num} = ${result}`);
        console.log(sum)
    }
    
}

multiplicationTable(["5"]);