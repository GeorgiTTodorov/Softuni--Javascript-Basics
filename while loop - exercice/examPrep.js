function examPrep(input) {
  let numOfUnwantedGrades = Number(input[0]);
  let index = 1;
  let currentGrade = 0;
  let averageScore = 0;
  let currentProblem = input[index];
  let sumOfProblems = 0;
  let badGradeCounter = 0;
  let lastProblem = "";

  while (currentProblem !== "Enough") {
    lastProblem = currentProblem = input[index];
    sumOfProblems++;
    index++;
    currentGrade = Number(input[index]);
    averageScore += currentGrade;

    if (currentGrade <= 4) {
      badGradeCounter++;
    }
    if (badGradeCounter >= numOfUnwantedGrades) {
      console.log(`You need a break, ${badGradeCounter} poor grades.`);
      break;
    }
    index++;
    currentProblem = input[index];
  }
  if (currentProblem === "Enough") {
    averageScore = (averageScore / sumOfProblems).toFixed(2);
    console.log("Average score:" + " " + averageScore);
    console.log("Number of problems:" + " " + sumOfProblems);
    console.log("Last problem:" + " " + lastProblem);
  }
}

examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
