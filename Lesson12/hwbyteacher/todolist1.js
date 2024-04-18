const formElement = document.getElementById("todo-form");
const listElement = document.getElementById("task-list");

const tasks =[];

const addTask = (event) => {
    event.preventDefault();
    // event.target             - эта вся форма
    // event.target.title       - это инпут <input type="text"
    // placeholder="title" name="title">
    // event.target.title.value - это что пользователь ввел в инпут

    //Получаем информацию из инпутов
    const title = event.target.title.value; 
    const description = event.target.description.value;

    // Очищаем поля
    event.target.title.value = "";
    event.target.description.value = "";

    //добавляем в массив новую задачу
    tasks.push({title, description, done: false}); 
    console.log(tasks);

    //отображаем список задач в html
    renderTasks();
}

function renderTasks(){
    //очистим ul от всего
    while (listElement.hasChildNodes()){
        listElement.firstChild.remove();
    };
    //добавим детей
    tasks.forEach((task) => {
        const li = document.createElement("li"); //<li></li>
        const checkBox = document.createElement("input"); //<input></input>
        checkBox.type = "checkbox";
        checkBox.checked = task.done; //есть ли галочка внутри квадрата: true = есть
        
        checkBox.onclick = () => {
            //меняем статус элемента в массиве на противоположный
            task.done = !task.done;
        }
        li.append(checkBox);//<li> <input type="checkbox"> </li>
        const textNode = document.createTextNode(
            `${task.title} ${task.description}`
        );
        li.append(textNode);
        listElement.append(li);
    })
};

formElement.addEventListener("submit", addTask);