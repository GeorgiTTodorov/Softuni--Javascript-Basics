function salary(input) {
    const tabsCount = Number(input[0]);
    const payCheck = Number(input[1]);
    let fine = 0;
    let moneyLeft = 0;

    for ( i = 2; i < tabsCount; i++) {
        let sites = input[i];
        moneyLeft = payCheck - fine;
        if (moneyLeft === 0) {
            console.log("You have lost your salary"); break; }
        switch (sites) {
        case "Facebook": fine += 150; break; 
        case "Instagram": fine += 100; break;
        case "Reddit": fine += 50; break;
        }
    }   if (moneyLeft !== 0) {
        console.log(moneyLeft);
    }     
    
}

salary(["10",
"750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
