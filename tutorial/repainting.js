
function repainting(input) {
    const nylonPerSqMeter = 1.5;
    const paintPerLiter = 14.5;       
    const thinerPerLiter = 5;
    const extraPaintPercent = 0.1;
    const bagPrice = 0.4;

    const nylon = Number(input[0]);
    const paint = Number(input[1]);
    const thiner = Number(input[2]);
    const totalHours = Number(input[3]);

    const nylonCost = (nylon + 2) * nylonPerSqMeter;
    const paintCost = (paint + (paint * extraPaintPercent)) * paintPerLiter;
    const thinerCost = thiner * thinerPerLiter;
    const materialsCost = nylonCost + paintCost + thinerCost + bagPrice;
    const workingHours = (materialsCost * 0.3) * totalHours;
    const totalCost = materialsCost + workingHours;

    console.log(totalCost);

}
repainting(["10 ","11 ","4 ","8 "]);
repainting(["5 ","10 ","10 ","1 "]);