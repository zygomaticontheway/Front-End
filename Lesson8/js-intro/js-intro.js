//вывод в консоль
console.log("Hello js");

//создание переменных
let dog = "Sharik";
dog = "Tuzik";
dog = 12; //изменили тип данных и это норм
// const cat = "Barsik";
cat = "Murzik"; //изменили, но константы не меняются, так что впустую

//Примитивные типы данных
// #1 string

let str1 = "Можно в двойных";
let str2 = 'Можно в одинарных';

let str3 = "13"; //"Это строка"
let str4 = str1 + " " + str2;
console.log(str4);
console.log(str1.toUpperCase());//перевод в верхний регистр

//#2 number - числа до 2^53-1
let num1 = 9;
let num2 = 9.6;

//#3 bigInt - диапазон не гораничен
let num3 = 1239n;

// #4 boolean
let isDrunk = true;
    //Условная конструкцияя
    if (isDrunk) {
        console.log("Ты пьян")
    }
    const result = isDrunk ? "ты пьян":"ты трезв"//тернарный оператор

//#5 undefined
    let str5;
    console.log(str5);

//#6 null - отсутствие значения
    //например: document.getElementById ("не существует")
    // можем присвоить null вручную
    let empty = null;
    console.log(empty);

//#7 symbol - используется для создания уникальных значений внутри программы
    let s1 = Symbol("что-то")

// ПРЕОБРАЗОВАНИЕ ТИПОВ
//# Преобразование в строку
    //неявное
    let str7 = ''+9;
    console.log(typeof str7);

    //явное
    const num4 = 10;
    let str8 = String(num4); // результат будет "10"
    console.log(typeof str8 + " " + str8);

    //пример
    const res = 9 + 12 + "5"; // результат будет "215"
    console.log(res);

    const res1 = "5" + 9 + 12; // результат будет "5912"
    console.log(res1);

//# Преобразование в число
    //неявное
    const num5 = +"6" // результат будет 6
    const sum = +"9" + +"10"; // результат будет 19
    console.log(sum)

    //явное
    const num6 = Number("117") // результат будет 117

    //пример
    const num7 = Number ("129*#")// результат будет NaN = Not a Number - резальтат неудачного преобразования или вычисления
    console.log(typeof num7) //NaN - тип данных оказывается число ))

//# Преобразование в булевое значение

//число в булевое
const res4 = Boolean(9) // const res5 = Boolean(0)
const res5 = Boolean(0) // результат будет false = ноль это false, все числа, кроме нуля = true
const test5 = Boolean(-1) // const res5 = Boolean(0)
console.log(test5)

//строка в булевое
const res6 = Boolean(""); //результат будет false - ибо пустая строка = false
const res7 = Boolean(" ");//результат будет true - ибо пробел это символ
console.log(res7)
const res8 = Boolean(null); //результат будет false - ибо null, undefined = false

// РАВЕНСТВО: строгое и нестрогое
// знак === строгое равенство, учитывается тип данных
// знак == нестрогое равенство, НЕ учитывается тип данных
// знак = присвоение
console.log(9 === "9"); //результат будет false, ибо учитывается тип данных
console.log(9 == "9"); //результат будет true, ибо произойдет преобразование числа 9 в строку и потом сравнится

console.log(true == ""); //результат будет false, ибо 
console.log(true == "1"); //результат будет true, ибо 