//Функции для загрузки данных с сервера
function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users") //сетевой запрос сюда, тут лежит API
        .then(resp => { //обработка ответа
            if (resp.status != 200){ //проверка ответа на ошибку
                throw new Error ("ERROR");
            }
            return resp.json(); //если не ошибка ( = 200), то обрабатываем ответ в JSON
        })
        .then (json =>{
            const result = document.getElementById('content');
            result.innerHTML = ""; //очистим содержимое перед обновлением данных
            const userList = document.createElement('ul');
            json.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name + " | " + user.email
                userList.appendChild(listItem)//проверяет, есть ли внутри эл. дочерние элементы и отрисовывает элемент вместе с дочерними
            })
            result.appendChild(userList)
        })
        .catch(error => {
            console.error(error)
        })
}
document.getElementById('updateButton').addEventListener('click', fetchData);