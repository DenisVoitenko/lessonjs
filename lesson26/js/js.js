function ask (quesion, yes, no) {
   (confirm(quesion)) ? yes() : no();
}

ask("Вы согласны",
    function () {alert("yes");},
    function () {alert("no");}
)