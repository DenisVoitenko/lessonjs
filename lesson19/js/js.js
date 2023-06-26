function checkAge(age) {
    return (age >= 18) ? true : confirm("error"); 
}

let age = prompt("number");

(checkAge(age)) ? alert("conect") : alert("disconect");