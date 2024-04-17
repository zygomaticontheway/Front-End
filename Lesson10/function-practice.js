// Создать метод universalGreeting, этот метод будет приветствовать на рахных языках
// Пусть метод принимает в качестве параметров 
// -имя
// - функция приветствия

// Напишите две функции приветствия
// - одна пусть приветствует  на английском englishGreeting: "Hello, name " 
// вторая пусть будет на японском japaneseGreeting: "Konnichiwa, name " 

//Вызовите метод universalGreeting

//Решение через функцию => моё
const universalGreeting = {
    name: "Alex",
    helloEng: "Hello,",
    helloJpn: "Konnichiwa,"
}

function englishGreeting (name, helloEng){
    return `${universalGreeting.helloEng} ${universalGreeting.name}`;
}
console.log(englishGreeting(universalGreeting)); //Hello, Alex


function japaneseGreeting (name, helloJpn){
    return `${universalGreeting.helloJpn} ${universalGreeting.name}`;
}
console.log(japaneseGreeting(universalGreeting)); //Konnichiwa, Alex

// от препода
function universalGreeting1(name,greetingFunction){
    return greetingFunction (name);
}
function englishGreeting1(name){
    return `Hello, ${name}`; //  шаблонная строка - бэктикс
}
const res2 = universalGreeting1("John",englishGreeting1);
console.log(res2);
const res3 = universalGreeting1("Sayochi", (name =>`Konnichiwa, ${name}`) );
console.log(res3);

///----------------------

//для вставки кода в консоль в браузере набрать команду 
//allow pasting
//всплывающее окно браузера с вопросом и строкой ввода:
const years = prompt("Сколько вам лет?"); 
alert("Вам" + years + "лет") //всплывающее окно браузера с введенным текстом

//всплывающее окно браузера с вопросом и кнопками подтверждения: cancell, ok .
const isAdmin = confirm("Вы администратор?");
alert (isAdmin) //возвращает ответ: true/false
