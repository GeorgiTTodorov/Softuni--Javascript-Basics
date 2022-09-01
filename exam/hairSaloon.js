function hairSaloon(input) {
    let index = 0;
    let goal = Number(input[index]);
    index++;
    let command = input[index];
    let income = 0;

    let mensHaircut = 15;
    let womenHaircut = 20;
    let kidsHaircut = 10;
    let touchUp = 20;
    let fullColor = 30;


    while (income < goal) {
        let typeOfService = input[index];
        switch (typeOfService) {
            case "mens": income += mensHaircut; break;
            case "ladies": income += womenHaircut; break;
            case "kids": income += kidsHaircut; break;
            case "touch up": income += touchUp; break;
            case "full color": income += fullColor; break;
        }
        command = input[index];
        index++;

        if (command === "closed") {
            break;
        }
    }
    if (income >= goal) {
        console.log("You have reached your target for the day!");
        console.log(`Earned money: ${income}lv.`);
    } else {
        console.log(`Target not reached! You need ${goal - income}lv. more.`);
        console.log(`Earned money: ${income}lv.`);
    }

}

hairSaloon(["50",
"color",
"full color",
"haircut",
"ladies"])

