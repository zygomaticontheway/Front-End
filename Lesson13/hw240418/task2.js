// Задание 2 (Дополнительно)

// Напишите функцию getDriverLicence, которая принимает в себя два аргумента success и failure.
    // Сделайте внутри этой функции проверку: 
        // если выпадет какое-то число, которое будет > 0.1, то вызовется success со строкой "успех!". 
        // В иных случаях вызови failure со строкой "упс, неудача :("

    // Подсказка: используйте Math.random()

// Ниже, под этой функцией, опишите аргументы success и failure, которые, в свою очередь, тоже являются функциями.
    // Функция success принимает в себя аргумент, например result, 
    // и выводит в консоль текст "Успешно завершено с результатом (и указать, каким результатом)".

// Функция failure принимает в себя аргумент, например error, 
    // и выводит в консоль текст "Завершено с ошибкой(и указать, какой ошибкой)".

    // Ниже вызвать функцию getDriverLicence, передав в нее аргументами две другие функции.

let result = Math.random();
console.log("result is " + result);


function getDriverLicence (success, failure){
    if (result >0.1){
        return success("успех!");
    }
    else {
        return failure("упс, неудача :(");
    }
}

function success (result){
    console.log(`Успешно завершено с результатом ${result} ` );
}

function failure (error){
    console.log(`Завершено с ошибкой ${error}`);
}

getDriverLicence (success, failure);