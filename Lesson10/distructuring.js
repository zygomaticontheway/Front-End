//диструктуризация - разбиение массива на элементы с целью обработки этих элементов

const person = {
    name: "Frank",
    age: 21
}
console.log(person);

// #1 вручную по ключам
const age = person.age;
const name = person.name;
console.log(name, age);

// #2 деструктуризация с добавлением новых
const dog = {
    nick: "Bobb",
    breed: "Corgi"
}

const {nick1, breed, height = 10, color = "black"} = dog
console.log(nick1, breed, height); //undefined Corgi 10

