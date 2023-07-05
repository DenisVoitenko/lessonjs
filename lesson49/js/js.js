function makeUser (num1, num2, num3) {
    return {
        for1: num1,
        for2: num2,
        return: num3,
    }
}

let result = makeUser(2, 4, 6);

alert(result.for1 + result.for2 + result.return);