let ask = (question, yes, no) => { 
    (confirm(question)) ? yes() : no();
}

ask("Вы согласны",
    () => alert("conect"),
    () => alert("disconect")
);