function salaryCorrect (input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let stillHasMoney = true;
    
    for (let i = 0; i <= openTabs; i++) {
        let currentTab = input[index];
        index++;
    if (currentTab === "Facebook") {
        money -= 150;
    } else if (currentTab === "Instagram") {
        money -= 100;
    } else if ( currentTab === "Reddit") {
        money -= 50;
    }  
    if (money <= 0) {
        stillHasMoney = false;
        console.log("You have lost your salary."); break;
    }
}
    if (money > 0){
        console.log(money);
    }

}

salaryCorrect(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])

