function computerFirm(input) {
    let numOfComputers = Number(input[0]);
    let index = 1;
    let num = '';
    let rating = '';
    let avgRatingAll = 0;
    let potentialSales = '';
    let salesMade = 0;
    let numOfRatings = 0;

    for ( let i = 0; i < numOfComputers; i++) {
        num = input[index];
        rating = Number(num.charAt(2));
        let wholeNum = "" + num.charAt(0) + num.charAt(1);
        potentialSales = Number(wholeNum);
        index++;
        
        switch (rating) {
            case 2: potentialSales *= 0 / 100;salesMade += potentialSales;  break;
            case 3: potentialSales *= 50 / 100;salesMade += potentialSales; break;
            case 4: potentialSales *= 70 / 100;salesMade += potentialSales; break;
            case 5: potentialSales *= 85 / 100;salesMade += potentialSales; break;
            case 6: potentialSales *= 100 / 100;salesMade += potentialSales; break;
        }
        avgRatingAll += rating;
        numOfRatings++;    
    }
    console.log(salesMade.toFixed(2));
    console.log((avgRatingAll/numOfRatings).toFixed(2));

}

computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])

