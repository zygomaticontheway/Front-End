//Массив - динамический, длину указывать не нужно

//#1 создания массива
const arr1 = [];

//#2 создания массива
const arr2 = new Array();

//добавление значение по индексу
const fruits = [];
fruits [0] = "Apple"; // добавили строку "Applle"
console.log(fruits);
fruits [1] = "Orange"; // добавили строку "Orange"
console.log(fruits);
fruits [1] = "Banana"; // добавили строку "Banana"
console.log(fruits);

//получение значения по индексу
console.log(fruits[1])
console.log(fruits.length)

//создание массива со значениями
const cars = ['BMW', "Mercedes", "Audi", 'Toyota', "VW", "Tesla"]; //кавычки значения не имеют
const cars2 = cars
console.log(cars)
cars[0] = "Honda";
console.log(cars2)

//методы работы с массивами
const students = [];

students.push("John") //добавили справа John
console.log(students) //[ 'John' ]

students.push("Tom"); //добавили справа Tom
console.log(students) //[ 'John', 'Tom' ]

students.unshift("Alex") //добавили слева Alex
console.log(students) //[ 'Alex', 'John', 'Tom' ]

//.pop - удаляет элемент с конца массива
const vik = students.pop(); //в переменную был присвоен этот удаленный элт
console.log(students); // [ 'Alex', 'John' ]
console.log(vik); // Tom

//shift - удаляет элемент слева массива - начало
const leon = students.shift(); //удаляет Alex и сохраняет его в переменную leon
console.log(students); //[ 'John' ]
console.log(leon);//Alex

console.log(('b' + 'a' + + 'a' + 'a').toLocaleLowerCase()); // в результате неявного преобразования baNaNa => banana

//сложение массивов
console.log([1,2,3] + [4,5,6]) //сначала массив преобразуется в строку, затем конкотинация и вывод в консоль строки: 1,2,34,5,6
const arr3 = [1,2,3];
const arr4 = [1,2,3];
const sumArr = arr3.concat(arr4);
console.log(sumArr) // выводится именно склеенный массив [ 1, 2, 3, 1, 2, 3 ]


