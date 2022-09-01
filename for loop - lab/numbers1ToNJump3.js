function numbers1ToNJump3(input) {

    const n = Number(input[0]);

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numbers1ToNJump3([10])