// Задание 1
// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.

const student = {name: "Anri", age: "32"};

function getStudent(){
    return new Promise(
        function (resolve, reject){
            setTimeout(()=> {
                resolve (student);
            }, 4000) 
        }
    )
}
const studentAnri = getStudent()
console.log(studentAnri);

getStudent()
    .then(console.log(student.name));
