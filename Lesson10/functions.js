// Functions declaration - объявление функций. 
function sum(a,b){
    return a + b;
}

// Calling function - вызов функции
let result = sum(50, 30);
console.log(result);

function print(){
    console.log("~~~Hello function!~~~~");
}
let res2 = print();
console.log(res2); //~~~Hello function!~~~~ undefined => undefined потому что нет return

// Function expression
const devide = function (a,b){
    return a/b;
}
console.log(devide(10,2));

// При этом вызов функции может находиться до объявления
print2();
function print2(){
    console.log("Print-2");
}
