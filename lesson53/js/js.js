function createUser (name, age) {
    return {
        name: name,
        age: age,
    }
}

let newName = prompt("Укажите своё имя?");
let newAge = prompt("Сколько вам лет");

const user = createUser(newName, newAge);

let key = "age";

alert(key in user);