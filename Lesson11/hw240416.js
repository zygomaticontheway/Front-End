const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

// Задание 1
// Создайте на основе страрого массива новый массив объектов по образу: 
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]
const carsIsDiesel = cars.map(car => ({
    brand: car.brand,
    isDiesel: car.isDiesel
}));
console.log(carsIsDiesel);

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const onlyDieselCars = cars.filter(car => car.isDiesel === true);
console.log(onlyDieselCars);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const notDieselCars = cars.filter(car => car.isDiesel != true);
console.log(notDieselCars);

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
const totalNotDieselPrice = notDieselCars
    .map((elt) => elt.price)
    .reduce((acc, price) => acc + price, 0);
console.log(totalNotDieselPrice);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.
const newPriceCars = cars.map(car => ({
    brand: car.brand,
    price: car.price * 1.2,
    isDiesel: car.isDiesel
}));
console.log(newPriceCars);

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const teslaInsteadOfDiesel = cars.map((car)=>{
    if(car.isDiesel === true){
        return {
            brand: car.brand = "Tesla",
            price: car.price = 25000,
            isDiesel: car.isDiesel = false
        }
    }
    return car;
 });
console.log(teslaInsteadOfDiesel);

// решение от препода

// Задание 1
const newCars = cars.map((car) => {
    return {brand: car.brand, isDiesel: car.isDiesel};
});
console.log(newCars);

// Задание 2
const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);

// Задание 3
const nonDieselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDieselCars);

// Задание 4
const sum = cars
    .filter((car) => !car.isDiesel) //получили выборку не дизельны хмашин
    .map((car) => car.price)
    .reduce((acc, price) => acc + price, 0);
    console.log(sum);

// Задание 5
cars.forEach((car) => car.price *= 1.2);
console.log(cars);

// Задание 6
const cars2 = cars.map((car) => {
    if (car.isDiesel) {
        return {brand: "Tesla", price: 25000, isDiesel: false};
    }
    return car;
});
console.log(cars2);

// Задание 6 через тернарный оператор
const cars3 = cars.map((car) => 
    car.isDiesel ? {brand: "Tesla", price: 25000, isDiesel: false} : car
);
console.log(cars2);