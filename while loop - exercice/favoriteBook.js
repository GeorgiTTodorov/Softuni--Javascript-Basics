function favoriteBook(input) {
    let favoriteBook = input[0];
    let index = 1;
    let nextBook = input[index];
    let bookIsFound = false;

    while (nextBook !== "No More Books") {

        if (nextBook === favoriteBook) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }

    if (bookIsFound) {
        console.log(`You checked ${index - 1} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }


}

favoriteBook(["Troy", "Stronger", "Life Style", "Troy"]);
favoriteBook(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

