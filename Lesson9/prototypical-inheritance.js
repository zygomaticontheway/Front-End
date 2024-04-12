//prototypical inheritance
//прототипное наследование - один объект будет выступать как прототип для другого

const bike = {
    brand: 'Turist',
    drive(){
        console.log("bsh, -br-br")
    }
};
const mountinBike = {
    __proto__: bike, // __proto__: objectName - синтаксис от кого наследуем
    brand: "Stels",
    gear: 20,
    price: 600
}
console.log(mountinBike); // { brand: 'Stels', gear: 20, price: 600 }
console.log(mountinBike.brand); //Stels
// console.log(mountinBike.drive()) //вывод в консоль метод, который выводит в консоль, при такой записи появляется в выводе дополнительно undefined
mountinBike.drive() //bsh, -br-br
