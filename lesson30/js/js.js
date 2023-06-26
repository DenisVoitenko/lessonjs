let age = prompt("Сколько вам лет?", 18);

let welcome = (age >= 18) ? 
function () {
    alert("conect");
} :
function () {
    alert("disconect");
};

welcome();