let fruit = prompt("Какой фрукт купить?", "apple");

const bag = {
    [fruit + "computed"]: 5,
}

alert(bag.applecomputed);
