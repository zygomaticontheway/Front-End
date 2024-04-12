// Создайте класс Alcohol с полями:
// - title
// - strength - крепость
// - volume - объекм бутылки
//  с методом info - выводт в консоль фразу
//  "Ни дня без <название алкоголя>" | "Надо и меру знать"
// Создайте производный класс Brendy
// - age - выдержка
// - country - страна производства
// Создайте производный класс Liquor
// - sugarAmount - количество сахара

class Alcohol{ 
    constructor(title, strength, volume){
        this.title = title; //инициализация полей обязательна
        this.strength = strength;
        this.volume = volume;
    }
    info(){
        console.log(`Ни дня без  ${this.title}| Надо и меру знать`);
    }
}

const vodka = new Alcohol ('vodka', 40, 0.5)

class Brandy extends Alcohol{
    constructor(title, strength, volume, age, country){
        super(title, strength, volume);
        this.age = age; 
        this.country = country;
    }
}

const marengo = new Brandy ('Marengo', 30, 0.7, 3, 'Argentina')

class Liquor extends Alcohol{
    constructor(title, strength, volume, sugarAmount){
        super(title, strength, volume);
        this.sugarAmount = sugarAmount; 
    }
}

const jagermeister = new Liquor ('Jagermeister', 30, 0.7, 45)

marengo.info();
jagermeister.info();