function yardGreening(input) {
    let squareMeters = Number(input[0]);
    let totalPrice = squareMeters * 7.61;
    let discount = totalPrice * (18/100);
    let finalPrice = totalPrice - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"]);
yardGreening(["150"]);