let age = prompt("Сколько вам лет?", 18);

let welcome = (age >= 18) ?
    () => alert("conect") :
    () => alert("disconect");

welcome();