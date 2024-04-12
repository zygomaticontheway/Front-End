// Классы в JS
class Animal{ //наименование класса всегда с большой буквы
    constructor(age, name, color){
        this.age = age; //инициализация полей обязательна
        this.name = name;
        this.color = color;
    }
    info(){ //инициализация метода в классе
        console.log(`Мнея зовут ${this.name}. Возраст: ${this.age}. Цвет: ${this.color}`);
    }
}
const panda = new Animal (14, 'Po', 'black-white'); //создание объекта по классу
panda.info();

//Наследование
//создаем производный класс Bird
//добавим поля: высота полета - heightOfFlight, рацион - ration
class Bird extends Animal{
    constructor(age, name, color, heightOfFlight, ration){
        super(age, name, color); //инициализация наследуемых полей
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;
    }
}
const colibri = new Bird (3, 'Po Ka', 'colorful', 100, "flowers");
console.log(colibri);
colibri.info();