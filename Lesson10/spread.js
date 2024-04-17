const fruits = ["apple", "orange", "mango"];
const fruits2 = fruits;

fruits2[1] = "kiwi";

console.log(fruits);
console.log(fruits2);

let srt1 = "hello";
// let srt2 = str1;

str1 = "goodbye";
console.log(str1);
// console.log(str2);

const cars = ["BMW", "Mercedes", "Audi"]

//spread - копирует данные массива, в новый массив, НЕ ссылку на объект, а данные
const carsCopy = [...cars];
carsCopy[0] = "Opel";
console.log(cars);
console.log(carsCopy);

//Объединение массивов
const cities1 = ["Berlin", "Paris"];
const cities2 = ["London", "Budapest"];
const joinedCities = [...cities1, ...cities2]
console.log(joinedCities);

//Копирование элементов с добавлением нового элемента массива в конец
const vegetanles = ["cucumber", "tomato"];
const newVegetables = ["carrot", ...vegetanles, "potatoes"]
console.log(newVegetables);

//Пример 1
const arr1 = ["one", "two"]
const arr2 = ["three", "four"]
const arr3 = [...arr1, ...arr2]
console.log(arr3);

//Пример 2
const arr4 = [...arr1]
console.log(arr4);