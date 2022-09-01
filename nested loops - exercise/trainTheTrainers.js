function trainTheTrainers(input) {
    let index = 0;
    let juryNum = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let countOfGrades = 0;
    let avgGrade = 0;

    while (command !== "Finish") {
        countOfGrades++;
        let presentationName = command;
        let tempAvgGrade = 0;
        for (i = 0; i < juryNum; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempAvgGrade += tempGrade;
        }
        tempAvgGrade = tempAvgGrade / juryNum;
        let presentationResult = `${presentationName} - ${tempAvgGrade.toFixed(2)}.`;
        console.log(presentationResult);
        avgGrade += tempAvgGrade;
        command = input[index];
        index++;
    }
        let studentsFinalAssessment = avgGrade / countOfGrades;
        console.log(`Student's final assessment is ${studentsFinalAssessment.toFixed(2)}.`);
}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

