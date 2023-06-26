let age = prompt("Сколько вам лет?", 18);

let welcome;

if (age >= 18) {
    welcome = function () {
        alert("conect");
    }
} else {
    welcome = function () {
        alert("disconect");
    }
}

welcome();