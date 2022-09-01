function usernameAndPwd(input) {
    let username = input[0];
    let pwd = input[1];
    let index = 3;
    let data = input[2];

    while (data !== pwd) {

        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);


}

usernameAndPwd(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
