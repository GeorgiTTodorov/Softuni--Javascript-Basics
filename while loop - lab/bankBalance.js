function bankBalance(input) {
    let index = 0;
    let payment = Number(input[index]);
    let totalBalance = 0;
    let command = input[index];

    while (command !== "NoMoreMoney") {
        payment = Number(input[index]);
    if (payment < 0) {
        console.log("Invalid operation!"); break;
    }  else if (payment === "NoMoreMoney") {
            break;
        } else {
        totalBalance += Number(input[index]);
        index++;
        console.log(`Increase: ${payment.toFixed(2)}`);
        }
    }
        console.log(`Total Balance: ${totalBalance.toFixed(2)}`)

}

bankBalance(["120",
"45.55",
"-150"])

