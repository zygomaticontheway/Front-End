const formElement = document.getElementById ("form");
const listElement = document.getElementById ("persons-list");
const clearBtnElement = document.getElementById("clear");
const clearOneBtnElement = document.getElementById("clear-one");

// Сперва получаем данные из формы с помощью метода getElementById
// formElement - это объект формы c идентификатором "form"
// listElement - это объект списка с идентификатором "persons-list"
// clearBtnElement - это объект кнопки с идентификатором "clear" - очистить весь список
// clearOneBtnElement - это объект кнопки с идентификатором "clear-one" - очистить один элемент списка

const persons = [];

const clearList = function (){
    while (//для очистки всего списка задач
        listElement.hasChildNodes() //hasChildNodes метод, проверяет есть ли внутри дочерние элементы и возвращает true/false 
    )
        {
            listElement.firstChild.remove(); //удаляет первый элемент списка до тех пор, пока hasChildNodes не вернет false
        } 
}

const clearOne = function (){
    if (listElement.hasChildNodes()){
        listElement.firstChild.remove(); //удаляет первый элемент списка если он есть
    } 
}

//Функция для clearInputs сброса значения полей ввода после добавления
function clearInputs (event){ //event дает доступ к атрибутам
    event.target.nickname.value = "";//вставляет пустую строку вместо значения поля nickname
    event.target.place.value = "";
}

//Функция changeStatus 
function changeStatus (event){
    if (event.target.style.textDecoration === "line-through") {//получаем доступ к стилям и проверяем зачеркнут ли текст
        event.target.style.textDecoration = "none"; //если зачеркнут, то убираем зачеркивание
    }
    else {
        event.target.style.textDecoration = "line-through"; //иначе, зачеркиваем текст
    }
}

//
clearBtnElement.addEventListener("click", clearList); //очистка списка
clearOneBtnElement.addEventListener("click", clearOne); //удаление одного эл


//Объект person добавляется в массив persons
// Данные из формы извлекаются с помощью свойства target и сохраняются в объект person
// Объект имеет два свойства name и place которые содержат данные из формы
formElement.addEventListener("submit", (event) => {
    event.preventDefault(); //применяем метод preventDefault который предотвращает открытие новой страницы
    const person = {
        name: event.target.nickname.value,
        location: event.target.place.value
    };
    persons.push(person) //добавляем объект person в массив persons
})

const liElement = document.createElement("li");// создали тег li
    liElement.textContent = `${person.name} ${person.place}🥷🏻`;// добавили текст в li
    liElement.onclick = changeStatus;// добавили обработчик события на li

    listElement.append(liElement); // добавили li в конец списка
    clearInputs(event);// очистили форму