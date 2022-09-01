function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let failedClassCounter = 0;

    let i = 1;
    let sumGrade = 0;
    let isExcluded = false;

    while ( i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            failedClassCounter++;
            if (failedClassCounter > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`); break;
            }
        continue;
        }
        sumGrade += grade;
        i++;
    }
    if (isExcluded !== true) {
    console.log(`${name} graduated. Average grade: ${(sumGrade/12).toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

