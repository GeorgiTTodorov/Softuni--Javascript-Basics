function basketBallEquipment(input) {

    const taxPerYear = Number(input[0]);
    const basketballTrainers = taxPerYear - taxPerYear * 0.4;
    const basketballSuit = basketballTrainers - basketballTrainers * 0.2;
    const ballPrice = basketballSuit / 4;
    const basketballAccessories = ballPrice / 5;
    const equipmentTotalPrice = taxPerYear + basketballTrainers + basketballSuit + ballPrice + basketballAccessories;

    console.log(equipmentTotalPrice);

}

basketBallEquipment(["365 "]);
basketBallEquipment(["550 "]);