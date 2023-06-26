function ask (question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no()
    }
}

function showOk () {
    alert("yes");
};

function showCancel () {
    alert("no")
}

ask("Вы согласны", showOk, showCancel);