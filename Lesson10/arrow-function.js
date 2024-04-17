//Simple function
function sum(a,b){
    return a + b;
}

// Arrow function Стрелочная функция, return не пишется
const sum2 = (a,b) =>{
    return a+b;
}

const sum3 = (a,b) => a+b;
const res = sum3(10,20);
console.log(res);

function calculate (a,b, operation){
    return operation(a,b)
}
function substract (a,b){
    return a - b;
}
console.log(calculate(9, 3,substract)); //6
console.log(calculate(9, 3,(a,b)=>a/b)); //3 - вариант зуказания стрелочной функции в качестве параметра объявляемой функции