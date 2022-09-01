function fishTank(input) {

    const lengthCm = Number(input[0]);
    const widthCm = Number(input[1]);
    const heigthCm = Number(input[2]);
    const percent = Number(input[3]) / 100;

    const volume = lengthCm * widthCm * heigthCm;
    const volumeInLitres = volume / 1000;
    const litresNeeded = volumeInLitres * (1 - percent);

    console.log(litresNeeded);

}

fishTank(["85 ","75 ","47 ","17 "]);
fishTank(["105 ","77 ","89 ","18.5 "]);