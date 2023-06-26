function min (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let a = +prompt("number a");
let b = +prompt("number b");

if (min(a, b)) {
    alert(a);
} else {
    alert(b);
}