function triangleFace(input) {
    const a = Number(input[0]);
    const h = Number(input[1]);
    const area = a * h/2;
    console.log(area.toFixed(2));
}

triangleFace(["20","30"]);
triangleFace(["15","35"]);
triangleFace(["7.75","8.45"]);
triangleFace(["1.23456","4.56789"]);