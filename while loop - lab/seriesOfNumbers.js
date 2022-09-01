function seriesOfNumbers(input) {
    let num = 1;
    let finalNum = Number(input[0]);

    while (num <= finalNum){
        console.log(num)

        num *= 2;
        num++;
    }

    
}

seriesOfNumbers(["8"])