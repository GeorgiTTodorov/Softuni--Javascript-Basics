function areaOfFigures(input) {
    const figure = input[0];

    if (figure === "square") {
        const a = Number(input[1]);
        const result = a * a;
        console.log(result.toFixed(3));
    } else if (figure === "rectangle") {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const result = a * b;
        console.log(result.toFixed(3));
    } else if (figure === "circle") {
        const r = Number(input[1]);
        const result = (r * r) * Math.PI;
        console.log(result.toFixed(3));
    } else if (figure === "triangle") {
        const a = Number(input[1]);
        const b = Number(input[2]);
        const result = (a * b) / 2;
        console.log(result.toFixed(3));

    }  
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle","7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);


