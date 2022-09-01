function trekkingMania(input) {
    let index = 0;
    let groupsNumber = Number(input[index]);
    index++;
    let peopleInGroup = Number(input[index]);
    let musalaPercClimbers = 0;                                                      
    let monblanPercClimbers = 0;                                                   
    let kilimajnaroPercClimbers = 0;                                                   
    let k2PercClimbers = 0;                                                    
    let everestClimbers = 0;                                                    
                                                            

    for (let i = 0; i < groupsNumber; i++) {
        peopleInGroup = Number(input[index]);
        index++;
        if (peopleInGroup <= 5) {
            musalaPercClimbers += peopleInGroup;
        } else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            monblanPercClimbers += peopleInGroup;
        } else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimajnaroPercClimbers += peopleInGroup;
        } else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            k2PercClimbers += peopleInGroup;
        } else {
            everestClimbers += peopleInGroup;
        }
    }      let climbers = musalaPercClimbers + monblanPercClimbers + kilimajnaroPercClimbers +
    k2PercClimbers + everestClimbers;

    console.log(`${(musalaPercClimbers / climbers * 100).toFixed(2)}%`);
    console.log(`${(monblanPercClimbers / climbers * 100).toFixed(2)}%`);
    console.log(`${(kilimajnaroPercClimbers / climbers * 100).toFixed(2)}%`);
    console.log(`${(k2PercClimbers / climbers * 100).toFixed(2)}%`);
    console.log(`${(everestClimbers / climbers * 100).toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

