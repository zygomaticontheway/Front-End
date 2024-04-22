const flowersContainerElement = document.getElementById("flowers-container");
async function loadFlowers() {
    const response = await fetch ("https://alisherkhamidov.github.io/book-api/flowers.json");
    const flowers = await response.json();
    flowers.forEach((flower) => {
        const {name, color, description, image, maxHeight} = flower;
        const cardElement = document.createElement("div");
        cardElement.className = "card"; //позволяет добавить один класс
        const nameElement = document.createElement ("span");
        nameElement.classList.add("card-el", "title"); //позволяет добавить несколько классов
        const imgElement = document.createElement ("img");
        imgElement.className = "card-el";
        nameElement.textContent = name;
        imgElement.src = image;
        //собираем все воедино
        cardElement.append(nameElement, imgElement);
        flowersContainerElement.append(cardElement);
    });
}
loadFlowers();