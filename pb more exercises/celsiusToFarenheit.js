function celsiusToFarenheit(input) {

    const farenheit = Number(input[0]);
    const celsius = farenheit * 9/5 + 32;
    console.log(celsius.toFixed(2));

}

celsiusToFarenheit(["25"]);
celsiusToFarenheit(["0"]);
celsiusToFarenheit(["-5.5"]);
celsiusToFarenheit(["32.3"]);