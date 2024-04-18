const tick = setInterval(() => {
    console.log('tick');
}, 5000); //будет выполняться каждые 5 сек.

const interval = setInterval(() => {
    console.log('interval');
}, 1000);

setTimeout(() => {
    clearInterval(tick)
    clearInterval(interval)
}, 6000) //остановили выполнение interval по таймауту 6 сек.