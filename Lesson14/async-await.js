//Вариант #1 работы с Promise

function getName(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("John")
        }, 1000)
    })
}
console.log(getName());//Promise { <pending> }

//Обработка с помощью then
getName().then((data) => {
    console.log(data); //John
})

//Вариант #2 работы с Promise

async function f (){
    const response = await getName();  //await в связке с async (говорит что функция асинхронная) говорит, чтобы мы дожидались ответа
    console.log(response);
}

//Две одинаковые функции, возвращающие 5
    // 1)
function getFive(){
    return new Promise (function(resolve, reject){
        resolve (5)
    })
}
console.log(getFive()); //Promise { 5 }

    // 2)
async function getFiveVer1(){ //ели не написать async, то выведет 5 => обработка асинхронного кода, нужно всегда, когда есть непонятки с временем получения ответа, например fetch или Promise
    return 5;
}
console.log(getFiveVer1()); //Promise { 5 }