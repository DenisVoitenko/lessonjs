function createUser (name, age) {
    return {
        name: name,
        age: age,
    }
}

let newName = prompt("you name?");
let newAge = prompt("you age?");

let user = createUser(newName, newAge);

let key = "age";

alert(key in user);