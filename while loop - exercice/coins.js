function coins(input) {
    let change = input[0];
    let convertedChange = parseInt(change * 100);
    let coins = 0;

    while (convertedChange > 0) {
        if (convertedChange - 200 >= 0) {
            convertedChange -= 200;
            coins++;
        } else if (convertedChange - 100 >= 0) {
            convertedChange -= 100;
            coins++;
        } else if (convertedChange - 50 >= 0) {
            convertedChange -= 50;
            coins++;
        } else if (convertedChange - 20 >= 0) {
            convertedChange -= 20;
            coins++;
        } else if (convertedChange - 10 >= 0) {
            convertedChange -= 10;
            coins++;
        } else if (convertedChange - 5 >= 0) {
            convertedChange -= 5;
            coins++
        } else if (convertedChange - 2 >= 0) {
            convertedChange -= 2;
            coins++;
        } else {
            convertedChange -= 1;
            coins++;
        }
    }
        console.log(coins);
}

coins(["1.23"]);