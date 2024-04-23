const numbers = [33, 1, 7, 3, 56];
numbers.sort((a, b) => b-a); //сортировка по убыванию
numbers.sort((a, b) => a-b); //сортировка по возрастанию
console.log(numbers);

const names = ['Anna', 'anna', 'Anna', 'Ivan', 'anna', 'Anton', 'Pavel'];
names.sort((a, b) => a.localeCompare(b)) //при сравнении регистр учитывается
// names.sort((a, b) => b.localeCompare(a))
console.log(names);

//сортировка с помощью map
const nums = [5, 32, 334, 25, 58, 85];
const nums_map = nums.map(el => el).sort((a,b) => a-b)
console.log(nums_map);

// .reduce() = возвращает аккумулирующее значение
let acc = 0;
for(let i = 0; i < nums.length; i++) {
    acc += nums[i]
}
console.log(acc);

//то же самое, но со стрелочной функцией
const sum = nums.reduce((acc, el) => acc +el, 0)
console.log(sum);

//spread оператор (...) раскладывает массив на эл-ты
console.log(nums); //[ 5, 32, 334, 25, 58, 85 ]
console.log(...nums) //5 32 334 25 58 85