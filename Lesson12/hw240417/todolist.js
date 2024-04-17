const formElement = document.getElementById('form');
const listElement = document.getElementById('task-list');
const clearBtnElement = document.getElementById('clear');
const clearOneBtnElement = document.getElementById('clear-one');

const tasks = [];

const clearList = function(){
    while (listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}

const clearOne = function(){
    if (listElement.hasChildNodes()){
        listElement.firstChild.remove();
    }
}

function clearInputs(event){
    event.target.task.value = "";
}

function changeStatus(event){
    if(event.target.style.textDecoration === "line-through"){
        event.target.style.textDecoration ="none"
    }else{
        event.target.style.textDecoration = "line-through"
    }
}

clearBtnElement.addEventListener('click', clearList);

clearOneBtnElement.addEventListener('click', clearOne);

formElement.addEventListener('submit',(event)=>{
    event.preventDefault();// предотвращает переход на другую страницу
    
    const task = {name: event.target.task.value};
    
    tasks.push(task);
    
    const liElement = document.createElement("li");

    liElement.textContent = `${task.name}`;
    liElement.onclick = changeStatus;
    listElement.append(liElement);
    
    clearInputs(event);
})