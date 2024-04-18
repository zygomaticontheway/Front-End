// Создать два интервала и добавить разное время
// Создать две функции таймаута

const interval = setInterval(() => {
    console.log('interval');
}, 1000);

const interval1 = setInterval (()=> {
    console.log('---> exterval');
}, 1800);


setTimeout(() => {
    clearInterval(interval1)
    clearInterval(interval)
}, 6000);

function timeout(){
    setTimeout (() => {
        console.log("timeout 5000");
    },5000);
};
timeout();

function timeout1(){
    setTimeout (() => {
        console.log("time is running out");
    },5500);
};
timeout1();