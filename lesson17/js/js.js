function calc (a, b) {
    let sum = a + b;
    alert(sum);
}

function showmessage (from, text = calc(3, 5)) {
    if (text === undefined) {
        text = "no text";
    }
    alert(from + ": " + text);
}

showmessage("denis");