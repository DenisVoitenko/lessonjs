let access;

let age = prompt("you age?");

if (age < 18) {
    access = false;
} else if (age > 20) {
    access = false;
} else {
    access = true;
}

alert(Number(access));