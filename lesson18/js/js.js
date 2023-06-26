// function checkAge (age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm("error");
//     }
// }

// let age = prompt("number");

// if (checkAge(age)) {
//     alert("conect");
// } else {
//     alert("disconect");
// }

function checkAge (age) {
    return (age >= 18) ? true : confirm("error");
}

let age = prompt("number");

(checkAge(age)) ? alert("conect") : alert("disconect");