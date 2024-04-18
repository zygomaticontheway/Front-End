function getSeven(){
    return new Promise(
        function (resolve, reject){
            setTimeout(()=> { //эмулируем задержку на ответ сервера
                resolve (7);
            }, 4000) 
        }
    )
}

const promise = getSeven();
console.log(promise);

// От Препода:
// function getSeven(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(7)
//         },4000)
//     })
// }
// const promise = getSeven();
// console.log(promise)

/*Чтобы отработать задержу ответа сервера, можно делать проверки на ошибки,
должен быть Status Code === 200, проверка на остальные ошибки */

//.then - метод promis'а для обработки его событий
promise.then((data) => {
    console.log(data);
});

function getSevenReject(){
    return new Promise (
        function(resolve, reject){
            setTimeout(() => {
                reject (new Error("Ошибка сервера"));
            }, 1000);
        }
    );
};

const promise2 = getSevenReject();
promise2.then((data) => {
    console.log(data)
})
.catch((e) => { //для перехвата ошибки. Приходит reject от функции getSevenReject, выводит код ошибки из указанного в Error текста
    console.log(e);
})

function getAgeOfUserByName (name){
    return new Promise (function(resolve,reject){
        if (name === "John"){
            setInterval(() => {
                resolve (20)
            },3000);
        }
        else {
            setInterval(() => {
                reject (new Error("Нет такого имени"))
            }, 3000);
        }
    })
}

getAgeOfUserByName ("John")
    .then((data) => console.log(data))
    .catch((e) => console.log(e))

getAgeOfUserByName ("Tom")
    .then((data) => console.log(data))
    .catch((e) => console.log(e))

setTimeout(() => {
    clearInterval(getAgeOfUserByName())
}, 4000)