console.log("welcome to JS");

//создать переменную в JS
let name = "Anna";
name = 33;
console.log(name);

let x;
x = Boolean;

const age = 55;

// age = 33;
console.log(age);

const age2 = age; //в переменную засунули объект, т.о. в переменной хранится ссылка на данный объект, а не его значения
console.log(age2);

const boxElement = document.getElementById("box-1");
console.log(boxElement);

boxElement.style.color = "gold";
boxElement.style.padding = "10px";
boxElement.style.backgroundColor = "blue";
boxElement.textContent = "Hello";