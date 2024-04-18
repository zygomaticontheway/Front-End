function printClap(){
    console.log('clap');
}

function printBravo(){
    console.log('bravo');
}

function clapHands(){
    setTimeout(printClap, 2000);
    setTimeout(printBravo, 4000);
}

clapHands();