function building(input) {
    let floors = Number(input[0]);
    let livingSpaces = Number(input[1]);

    for ( let i = floors; i > 0; i--) {
        let result = '';
        for (let r = 0; r < livingSpaces; r++) {
        if (i === floors) {
            result += `L${i}${r} `;
            } else if ( i % 2 === 0) {
                result += `O${i}${r} `;
            } else {
                result += `A${i}${r} `;
            }
        }
        console.log(result)
    }
}

building(["6", "4"])