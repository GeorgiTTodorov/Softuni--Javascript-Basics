function number(input) {
    const num = Number(input[0]);

    if (num !==0 && num <= 100 && num >= -100) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

number(["-25"]);
number(["0"]);
number(["25"]);