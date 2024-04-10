const paragraphElement = document.getElementById("text");
const changeTextButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowersButtonElement = document.getElementById("btn-change-flowers");
const surikatElement = document.getElementById("Surikat");
const addSurikatImgButtonElement = document.getElementById("add-surikat");

//назначить обработчик (слушатель) событий. Изменим цвет фона параграфа на синий по нажатию на кнопку
changeTextButtonElement.addEventListener("click", ()=>{
    paragraphElement.style.backgroundColor="blue";
});

//поменяем текст внутри
changeFlowersButtonElement.addEventListener("click", ()=>{
    flowerElement.textContent="Ягодки, а не цветы теперь"
});

addSurikatImgButtonElement.addEventListener("click", ()=>{
    surikatElement.src = "https://a.d-cd.net/68dea02s-960.jpg"
});
surikatElement.style.width = "300px";

