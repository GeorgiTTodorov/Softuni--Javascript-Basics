function numberPyramid(input) {
    let n = Number(input[0]);
    let currNum = 0;
    let isFound = false;

    for (let rows = 1; rows <= n; rows++) {
        let printCrntLine = '';
        for (let cols = 1; cols <= rows; cols++) {
            currNum++;
            printCrntLine += currNum + " ";
            if (currNum === n) {
                isFound = true;
                break;
            }
        }
        console.log(printCrntLine);
        if (isFound) {
            break;
        }
    }


}

numberPyramid(["15"])