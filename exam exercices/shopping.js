function shopping(input) {
    const petarsBudget = Number(input[0]);
    const gpuNum = Number(input[1]);
    const cpuNum = Number(input[2]);
    const ramNum = Number(input[3]);

    const gpuPrice = 250;
    let totalGpus = gpuNum * gpuPrice;
    let totalCpus = cpuNum * (35 / 100 * totalGpus);
    let totalRam = ramNum * (0.1 * totalGpus);
    
    let totalCost = totalGpus + totalCpus + totalRam;

    if ( gpuNum > cpuNum) {
        totalCost -= totalCost * 15 / 100;
    }

    if (totalCost <= petarsBudget) {
        let budgetLeft = petarsBudget - totalCost;
        console.log(`You have ${budgetLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalCost - petarsBudget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }




}

shopping([920.45,
    3,
    1,
    1
    
])