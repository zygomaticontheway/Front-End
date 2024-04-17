//Методы работы с массивом
const brothers = [
    {race:"hobbit", height:110 , age:45 , name: "Frodo Baggins"},
    {race:"human", height:185 , age:46 , name: "Aragorn"},
    {race:"elf", height:189 , age:110 , name: "Legolas"},
    {race:"dworf", height:140 , age:150 , name: "Gimly"},
    {race:"human", height:195 , age:200 , name: "Gandalf"},
]

// #Метод Map
//возвращает новый массив, созданный путем применения функции к каждому эл.
//не изменяет исходный массив

//пример 1
const names = brothers.map((brother)=>brother.name);//brother - это имя переменной для обращения к элементу, 
//удобно выбирать слово в единственном числе при названии массива множественным
//пример массива cars - элемент car
console.log(names);//[ 'Frodo Baggins', 'Aragorn', 'Legolas', 'Gimly', 'Gandalf' ]

//пример 2
const ages = brothers.map((brother)=>brother.age);
console.log(ages);//[ 45, 46, 110, 150, 200 ]

//пример 3
const racesNames = brothers.map((brother)=>brother.race + " " + brother.name);
console.log(racesNames);
//результат:
//[
//     'hobbit Frodo Baggins',
//     'human Aragorn',
//     'elf Legolas',
//     'dworf Gimly',
//     'human Gandalf'
//   ]

//пример 4
// высокий - выше или равно 170
 // маленький - ниже 170
 // массив из слов [маленький, высокий, высокий, маленький, высокий]

 const sizes = brothers.map((brother)=>{
    if(brother.height >= 170){
        return "высокий"
    }
    return "маленький"
 });
 console.log(sizes) //[ 'маленький', 'высокий', 'высокий', 'маленький', 'высокий' ]

 //пример 5
 //то же самое, только с тернарным оператором
 const sizesVer2 = brothers.map((brother)=>brother.height >=170 ? "высокий" : "низкий");
 console.log(sizesVer2); //[ 'низкий', 'высокий', 'высокий', 'низкий', 'высокий' ]

 // #Метод forEach
//метод меняет исходный массив

//Пример 1
//состарим всех на 1 год
brothers.forEach((brother) => brother.age += 1);
console.log(brothers);

//Пример 2
//переведем все имена в верхний регистр
brothers.forEach((brother) => brother.name = brother.name.toUpperCase());
console.log(brothers);

 // #Метод reduce
//с помощью цикла for

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum);// 551 = сумма [ 45, 46, 110, 150, 200 ]

//с помощью reduce - проходится по каждому элементу массива в зависимости от начального значения (если указано)
const sum2 = ages.reduce((acc /*Аккумулятор*/, current /*Текущий элемент*/) => acc + current, 0 /*initialValue*/);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200

// Аккумулятор (accumulator) - значение,
// которое накапливает результат применения функции.
// Текущий элемент массива (currentValue).
// Текущий индекс (currentIndex) элемента в массиве.
// Сам массив (array), к которому применяется метод reduce.
// Функция callback должна возвращать новое значение аккумулятора
// после обработки текущего элемента.

// initialValue (необязательный): Начальное значение аккумулятора.
// Если это значение указано,
//  то оно будет использовано в качестве начального значения аккумулятора
// при первом вызове функции callback.
// Если initialValue не указан, то первый элемент массива станет
// начальным значением аккумулятора.

//Пример 3 map + reduce
//общая высота наших героев

const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
console.log(totalHeight); //819

//можно сделать цепочку
const totalHeight2 = brothers
    .map((brother) => brother.height) //забираем высоту героев по ключу height в объектах brother
    .reduce((acc, height) => acc + height, 0);//складываем элементы
console.log(totalHeight2);

//Пример 4
// объединим все имена через пробел
const nameStr = brothers
    .map((brother) => brother.name) //получили массив имен
    .reduce((acc, name) => acc + " " + name);
console.log(nameStr);