const names = ["Семен", "Иван", "Петр", "Татьяна"];
const ages = [12, 27, 74, 34];

const namesAges = [];
for (let i = 0; i<names.length; i++){
    namesAges[i] = `${names[i]} ${ages[i]} лет`; // ` ` -  шаблонная строка, позволяет склеивать, backticks
}
console.log(namesAges);

const name = "Семен";
const age = 33;
const text = `Меня зовут ${name} и мне ${age} лет. Я изучаю JS`;
console.log(text)

//выведем массив в обратном порядке
const reversed = [];
for (let i =0; i<namesAges.length; i++){
    reversed.unshift(namesAges[i])//unshift - обратный порядок
}
console.log(reversed);//обратный порядок
console.log(namesAges);//массив без изменений