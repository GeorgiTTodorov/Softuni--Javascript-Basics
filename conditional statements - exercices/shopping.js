function shopping(input) {
    const petarsBudget = Number(input[0]);
    const gpuCount = Number(input[1]);
    const cpuCount = Number(input[2]);
    const ramCount = Number(input[3]);
    const gpu = 250;

    const gpuPrice = gpu * gpuCount;

    const cpu = (35/100) * gpuPrice;
    const ram = (10/100) * gpuPrice;

    const cpuPrice = cpu * cpuCount;
    const ramPrice = ram * ramCount;

    let expenses = gpuPrice + cpuPrice + ramPrice;

    if (gpuCount > cpuCount) {
        expenses = expenses - expenses * (15/100);
    }

    const moneyLeft = Math.abs(petarsBudget - expenses);

    if (petarsBudget >= expenses) {
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }

}

shopping(["900","2","1","3"]);
shopping(["920.45","3","1","1"]);

