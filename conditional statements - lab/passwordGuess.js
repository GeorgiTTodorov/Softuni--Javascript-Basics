function passwordGuess(input) {
    let password = input[0];
    const correctPassword = "s3cr3t!P@ssw0rd" ;
    if (password === correctPassword) {
        console.log("Welcome")
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);