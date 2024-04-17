//1. Сформировать из массива с числами новый, в кот. все числа будут в 3 степени.

const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];
const resArray = [];

for (let i = 0; i<numbers.length; i++){
    resArray[i] = numbers[i]**3;
}
console.log(resArray);
// [
//     64,   216,    1,
//   4913,   729, 3375,
//  19683, 79507,  343
// ]

//Решение препода #1
const numbersPow0 = [];
for (let i = 0; i<numbers.length; i++){
    numbersPow0.push(numbers[i]**3);
}
console.log(numbersPow0);

//Решение препода #2 map
const numbersPow1 = numbers.map(el => el **3);
console.log(numbersPow1);

//Решение препода #3 forEach
const numbersPow2 = [];
numbers.forEach(el => numbersPow2.push(el **3));
console.log(numbersPow2);


// Сформировать новый массив, в кот попадут все последние цифры каждого из чисел элемента
// const numbersEndArray = [];

//Решение от GPT (не работает)
const numbersEndArray = numbers.map(num => {
    const numStr = num.toString(); // Преобразуем число в строку для работы с ним как с текстом
    const lastDigit = numStr.charAt(numStr.length - 1); // Получаем последний символ строки, который и будет последней цифрой числа
    parseInt(lastDigit);// Преобразуем последнюю цифру обратно в число и возвращаем её
  });
  console.log(numbersEndArray);


//От препода
const lastDigits = numbers.map(el => el%10);
console.log(lastDigits);


// 3. Сформировать новый массив, в который попадут все элементы из исходного массива.
// Если длина элемента меньше 6 (<), то добавить к этой строке 1
const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];
const stringsLesSix = strings.map((string) => string.length < 6 ? string +1 : string);
console.log(stringsLesSix);
// [
//     'hello1',
//     'apple1',
//     'orange',
//     'good morning',
//     'danke1',
//     'duck1',
//     'dinosaure'
//   ]

//Функции взаимодействия с пользователем:
// prompt
// alert
// confirm
alert ("Вы на странице")

//для вставки кода в консоль в браузере набрать команду 
//allow pasting
//всплывающее окно браузера с вопросом и строкой ввода:
const years = prompt("Введите свой возраст"); 
alert("Вы ввели данные с типом " + typeof years) //всплывающее окно браузера с введенным текстом

//всплывающее окно браузера с вопросом и кнопками подтверждения: cancell, ok .
const isAdmin = confirm("Вы администратор?");
alert (isAdmin) //возвращает ответ: true/false

    console.log(undefined > 5); //false
console.log(70< false); 
console.log(1 <= true);
console.log(1 >= 9);

//если >18, то Hi
//если =18, то Ok
//если <18, то Goodbye
const years1 = prompt("Введите свой возраст"); 

if (years1 > 18){
    console.log( "Hi");
}
else if (Number (years1) === 18){ //Number - преобразование | === - равно с учетом типа данных
    console.log( "Ok");
}
else {
    console.log( "Goodbye");
}
