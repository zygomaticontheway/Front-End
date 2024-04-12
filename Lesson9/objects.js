// #1 Создание объекта objectName{ключ: значение, ключ: значение, ...}
const student ={
    age: 22,
    name: 'Василий'
}
console.log(student.age); //22 - выводит  только одно из значений по ключу age
console.log(student.name);
console.log(student);

// #2 Создание объекта - ключ может состоять из двух слов
//если ключ имеет пробел, его нужно обернуть в кавычки
const product = {
    title: 'iPhone',
    price: 2000,
    "model of phone": 'XR'
}
console.log(product);
//получить значение по ключу
console.log(product.price);
console.log(product["model of phone"]);

//добавить значение в массив с вводом нового ключа
product.diagonale = 6.5;
product['type of adapter'] = 'usb-c'
//console.log(product);

// #3 Если есть переменная и мы хотим доставать значения из объекта по этой переменной
let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

const client = {
    firstname: 'John',
    wife: 'Maria'
};
const key1 = 'wife';
//достать из объекта значение по переменной
console.log(client.key1); //Получим - undefined ибо запись неправильная
console.log(client[key1]); //Получим Maria, верное обращение к переменной. 

// #4 создание объекта с помощью переменных
//допустим, у нас были переменные и мы хотим создать из них объект
const title = 'Titanic';
const capacity = 1500;

const titanic = {title, capacity}
console.log(titanic);

// #5
const name1 = 'Avrora';
const cap = 300;
const avrora = {title: name1, capacity: cap}
console.log(avrora);

// #6 метод внутри объекта
const dog = {
    nick: 'Tuzik',
    bark(){
        console.log('Гав, гав');
    }
};
dog.bark(); //вызов метода

//~~~~~~~~~~~~~~

