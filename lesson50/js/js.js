function makeUser (name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeUser("denis", 26);

alert("first name" in user);
alert("name" in user);

alert(user.banana === undefined);