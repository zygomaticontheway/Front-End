// #CATEGORY_FLEX_BLOCK  - это раздел сайта, а не точный id или class

// Эта часть кода создает карточки категорий и добавляет их в элемент category_flex_block.

// const category_flex_block = document.querySelector('#category_flex_block');
//: Выбирает элемент с идентификатором category_flex_block.

// const categories_flex_data: Содержит массив объектов,
//  каждый из которых представляет категорию с ее идентификатором, названием и URL-адресом изображения.

// categories_flex_data.forEach(...): Перебирает каждый объект в массиве categories_flex_data.
// Внутри цикла создается элемент div для каждой категории (cardElem),
// элемент div для изображения категории (imgElem) и элемент p для названия категории (categoryElem).
// Устанавливает текст categoryElem в название категории.
// Добавляет CSS-класс category_card к cardElem.
// Устанавливает фоновое изображение imgElem в URL-адрес изображения.
// Добавляет imgElem и categoryElem к cardElem.
// Добавляет cardElem в category_flex_block.

const category_flex_block = document.querySelector("#category_flex_block");

const categories_flex_data = [
    {
        id: 1,
        category: "Women's",
        img: 'media/category_women.png'
    },
    {
        id: 2,
        category: "Men's",
        img: 'media/category_men.png'
    },
    {
        id: 3,
        category: "Kids'",
        img: 'media/category_child.png'
    }
]

categories_flex_data.forEach(({category, img}) => {
const cardElem = document.createElement("div");
const imgElem = document.createElement("div");
const categoryElem = document.createElement("p");

cardElem.classList.add("category_card"); // classList это не ошибка, позже можем добавить еще классы
categoryElem.innerText = category;
imgElem.style.backgroundImage = `url("${img}")`;

cardElem.append(imgElem, categoryElem);
category_flex_block.append(cardElem);
})

//NEW_ARRIVALS_BLOCK - это раздел сайта, а не точный id или class

// Этот раздел создает карточки новых поступлений и добавляет их в элемент new_arrivals_container.

// const new_arrivals_container = document.querySelector('.new_arrivals_container');
//: Выбирает элемент с классом new_arrivals_container.

// const new_arrivals_data: Содержит массив объектов, каждый из которых представляет товар новых поступлений
// с его идентификатором, URL-адресом изображения, названием и ценой.

// new_arrivals_data.forEach(...): Перебирает каждый объект в массиве new_arrivals_data.
// Внутри цикла создается элемент div для каждого товара (cardElem),
// элемент div для изображения (imgElem), и элементы p для названия (titleElem),
// цены (priceElem) и иконки сердца (heartElem).

// Устанавливает фоновое изображение imgElem в URL-адрес изображения.
// Добавляет CSS-классы элементам для стилизации.

// Добавляет обработчик событий для иконки сердца (heartElem), чтобы переключать класс liked при клике.
// Устанавливает текст titleElem в название и priceElem в цену.
// Добавляет heartElem, titleElem и priceElem к imgElem.
// Добавляет imgElem к cardElem.
// Добавляет cardElem в new_arrivals_container

const new_arrivals_container = document.querySelector(".new_arrivals_container");

const new_arrivals_data = [
    {
        id: 1,
        img: 'media/cap.png',
        title: 'Black and white sport cap',
        price: '15.00'
    },
    {
        id: 2,
        img: 'media/glasses.png',
        title: 'Metal bridge sunglasses',
        price: '20.00'
    },
    {
        id: 3,
        img: 'media/body.png',
        title: 'Green baby romper',
        price: '18.95'
    },
    {
        id: 4,
        img: 'media/pants.png',
        title: 'Mid-rise slim cropped fit jeans',
        price: '98.10'
    },
    {
        id: 5,
        img: 'media/ears_rings.png',
        title: 'Red dangle earrings',
        price: '45.30'
    },
    {
        id: 6,
        img: 'media/child_shoes.png',
        title: 'Baby shoes with laces',
        price: '77.54'
    }
];
new_arrivals_data.forEach(({img, title, price}) => {
    const cardElem = document.createElement("div");
    const imgElem = document.createElement("div");
    const titleElem = document.createElement("p");
    const priceElem = document.createElement("p");
    const heartElem = document.createElement("p");

    imgElem.style.backgroundImage = `url("${img}")`;

    cardElem.classList.add("new_arrival_card");
    heartElem.classList.add("fa-regular"); // из источника <i class="fa-regular fa-heart"></i>
    heartElem.classList.add("fa-heart");
    heartElem.classList.add("heartElem"); //добавили наш класс
    titleElem.classList.add("new_arrival_title");
    priceElem.classList.add("new_arrival_price");

    heartElem.addEventListener("click", () => heartElem.classList.toggle("liked")); //heartElem.classList.toggle - меняет класс при нажатии

    titleElem.innerText = title;
    priceElem.innerText = `EUR ${price}`;

    imgElem.append(heartElem);
    cardElem.append(imgElem, titleElem, priceElem);

    new_arrivals_container.append(cardElem);
})

// #grid_banners_block

const grid_banners_block = document.querySelector("#grid_banners_block")

const grid_banners_data = [
    {
      id: 1, 
      back_img: 'media/b1.png',
      sub_title: 'Summer Collections',
      title: 'Sale Up to 70%',
      btn: 'Explore new prices'
    },
    {
      id: 2, 
      back_img: 'media/b2.png',
      sub_title: 'Deal of the week',
      title: 'Stay Warm With Our New Sweaters',
      btn: 'Shop now'
    },
    {
      id: 3, 
      back_img: 'media/b3.png',
      sub_title: 'New collection',
      title: 'Shoes & Bags autumn / winter 2020',
      btn: 'See offers'
    },
    {
      id: 4, 
      back_img: 'media/b4.png',
      sub_title: 'For All new Email Subscribers',
      title: 'Get 5% Off & Free Delivery'
    }
]

grid_banners_data.forEach(({back_img, sub_title, title, btn}) => {
    // grid_banners_data.forEach(...): Перебирает каждый объект в массиве grid_banners_data.
    const cardElem = document.createElement("div");
    const subTitleElem = document.createElement("p");
    const titleElem = document.createElement("h3");
    const btnElem = document.createElement("button");
    // Внутри цикла создается элемент div для каждого баннера (cardElem),
    // элементы p для подзаголовка (subTitleElem) и заголовка (titleElem) и элемент div для кнопки (btnElem).

    cardElem.style.backgroundImage = `url("${back_img}")`;
    // Устанавливает фоновое изображение cardElem в URL-адрес фонового изображения.
    subTitleElem.innerText = sub_title;
    titleElem.innerText = title;
    // Устанавливает текст subTitleElem и titleElem в подзаголовок и заголовок соответственно.
    
    btn === undefined ? "" : btnElem.innerText = btn; // убеждаемся, что в btn есть текст, этого ключа может и не быть
    // "Если переменная btn равна undefined, установить текст элемента btnElem в пустую строку,
    // в противном случае установить текст элемента btnElem равным значению переменной btn".
 
    //Это используется для того, чтобы проверить, определено ли значение переменной btn,
    // и присвоить ему значение элемента innerText только если переменная btn не равна undefined.
    // Если btn равен undefined, присваивается пустая строка.

    cardElem.append(subTitleElem, titleElem, btnElem);
    grid_banners_block.append(cardElem);
})


