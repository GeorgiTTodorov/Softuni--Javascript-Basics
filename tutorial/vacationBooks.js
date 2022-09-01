function vacationBooks(input) {
    const totalPages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const numOfDays = Number(input[2]);

    const hourPerDay = totalPages / pagesPerHour / numOfDays;
    console.log(hourPerDay);

}

vacationBooks(["212","20","2"]);