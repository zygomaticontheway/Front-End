// отлавливаем HTML элементы, это сохранение тегов в переменные, а не их значений, по этому const
const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterElement = document.getElementById("counter");
const plusTenBtnElement = document.getElementById("plus-ten");
const minusTenBtnElement = document.getElementById("minus-ten");

let counter = 0;

const plusHandler = () => {
    counter ++;
    counterElement.innerText = counter;
}
const minusHandler = () => {
    counterElement.innerText = --counter; //аналогично записи выше, но короче
}

const minusTenHandler = () => {
    counterElement.innerText = counter -= 10;
}
const plusTenTHandler = () => {
    counterElement.innerText = counter += 10;
}
//добавляем слушатель событый кнопок
plusBtnElement.addEventListener("click", plusHandler); //по 'click' выполняется функция plusHandler
minusBtnElement.addEventListener("click", minusHandler); //по 'click' выполняется функция minusHandler
plusTenBtnElement.addEventListener("click", plusTenTHandler);
minusTenBtnElement.addEventListener("click", minusTenHandler);