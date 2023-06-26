function showmessage (from, text) {
    from = ".I." + from + ".I.";

    alert(from + ": " + text);  
}

let from = "Denis";

showmessage(from, "hello");

alert(from);