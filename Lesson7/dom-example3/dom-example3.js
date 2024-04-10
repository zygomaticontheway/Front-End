//можно создать элементы с нуля и прикрепить их к элементу html

//создадим пустой параграф
const newElement = document.createElement("p");

newElement.textContent = "Я был создан при помощи JS";
newElement.style.border = "4px solid red";
document.body.append(newElement);//добавить новый елемент в <body>

const targetElement = document.getElementById("target-element");//в dom-example3 был создан предварительно контейнер, куда мы предусмотрели создание новых элементов

const newBtn = document.createElement("button")
newBtn.type = "button";
newBtn.textContent = "Нажми на меня"

targetElement.append(newBtn)