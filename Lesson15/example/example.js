// 1. Отправить запрос по ссылке https://dummyjson.com/users
// и получить массив с данными о пользователях
// 2. Из полученных данных отрисовать карточки пользователей
// (аватар, имя + фамилия, возраст)
// 3. Стилизовать карточки + сделать из контейнера грид
// 4. Отсортировать по возрасту
// 5. Отсортировать по фамилии (в алфавитном порядке)

const containerElt = document.querySelector(".container");

fetch ("https://dummyjson.com/users")
    .then(res => res.json())
    .then((json) => render(json.users))

    const render = array => {
        array
            .slice()
            // Метод slice() возвращает новый массив, копируя указанный диапазон элементов исходного массива.
            // Начало и конец диапазона определяются индексами элементов.
            // Исходный массив при этом не изменяется.
            // .slice().sort((a, b) => a.age - b.age)
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            //Этот код сортирует массив объектов по значению их свойства lastName
            // с использованием метода sort() и функции сравнения.
            // Функция сравнения localeCompare() (имя функции которое придумали сами) сравнивает строки в соответствии с
            // правилами языка, что позволяет правильно сортировать строки на разных языках.
            // В данном случае, массив объектов сортируется в алфавитном порядке по свойству lastName.
            .forEach(({firstName, lastName, age, image}) => {
                const cardElem = document.createElement("div")
                const nameElem = document.createElement("p")
                const ageElem = document.createElement("p")
                const avatarElem = document.createElement("img")

                avatarElem.src = image;
                avatarElem.alt = `${firstName} ${lastName}`;

                nameElem.innerText = `${firstName} ${lastName}`;

                ageElem.innerText = `${age} y.o.`;

                cardElem.append(avatarElem, nameElem, ageElem);
                containerElt.append(cardElem);
            })
    }

    //примеры сортировки:
    [...array].sort((a,b) => a.age - b.age)
    array.map(el => el).sort((a, b) => a.age - b.age)
    array.slice().sort((a, b) => a.age - b.age)