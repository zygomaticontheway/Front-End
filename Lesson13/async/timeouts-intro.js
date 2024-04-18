//асинхронный код / синхронный код

console.log('apple'); // это синхронынй код, он имеет приоритет

setTimeout (() => {
    console.log("banana1");
}, 0)//таймаут , 5000мс. Даже при нулевой задержке код выполнится после синхронного кода
console.log("banana");

//JS однопоточный язык программирования

function getSix(){
    setTimeout(() => {
        return 6;
    }, 3000);
};

const x = getSix();
console.log(x);