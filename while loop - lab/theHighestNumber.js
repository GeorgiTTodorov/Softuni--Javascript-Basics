function theHighestNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let number = Number(command);

        if (maxNumber < number ) {
            maxNumber = number;
        }
        command = input[index];
        index++;
    }
    console.log(maxNumber);
}

theHighestNumber(["-1",
"-2",
"Stop"])



