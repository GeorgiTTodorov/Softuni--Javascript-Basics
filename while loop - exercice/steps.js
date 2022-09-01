function steps (input) {
    let goal = 10000;
    let index = 0;
    let steps = 0;
    let sum = 0;
    let command = input[index];

    while (sum < goal) {
        if (command === "Going home") {
            index++;
            steps = Number(input[index]);
            sum += steps;
            break;
        }
        steps = Number(input[index]);
        index++;
        sum += steps;
        
        command = input[index];
    }
        if (sum < goal) {
            diff = goal - sum;
            console.log(`${diff} more steps to reach goal.`)
        } else {
            let diff = sum - goal;
            console.log("Goal reached! Good job!");
            console.log(`${diff} steps over the goal!`);
        }
}

steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


