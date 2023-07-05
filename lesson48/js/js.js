function makeUser (name, age) {
    return {
        name,
        age
    }
}

let user = makeUser("denis", 26);

alert(user.name);
alert(user.age);