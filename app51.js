//  Object descriptor - дискрипторы для обьектов
const auto = {
    brand: 'audi',
    year: 2019
}
//определить свойства для обьекта и его свойств
Object.defineProperty(auto, 'year', {
    //configurable: false, //нельзя удалить свойство year + нельзя конфигурировать(применять тут другие свойства), но можно перезаписать
})
// 1 арг - обьект
// 2 арг - свойство
// 3 арг - дискриптор - обьект с настройками

// по умолчанию в дискрипторе все настройки (свойства обьекта - 3 аргумента) - true

Object.defineProperty(auto, 'year', {
    //enumerable: false //свойство year становится неиттерируемым - не будет видно в цикле 
    // Object.keys(auto) - вернет только ['brand']
    // Object.value(auto) - вернет только ['audi']
})
console.log(auto.propertyIsEnumerable('year')) //false - проверяем настройку enumerable
console.log(auto.hasOwnProperty('year')) //true - свойство есть но мы его не можем иттерировать


Object.defineProperty(auto, 'year', {
    writable: false     //запрещает перезапись, но можно удалить
})

// Геттеры и Сеттеры
Object.defineProperty(auto, 'age', {    //используем новое свойство
    get: function(){                //для удобного возвращения 
        return `Машина выпущена в ${this.year}`
    }
})
console.log(auto.age)   //Машина выпущена в 2019
console.log(auto)   //{brand: 'audi', year: 2019}  -- age НЕТУ, типо свойство


// get и set - можно обьявлять через обьект без Object.defineProperty
const auto2 = {
    brand: 'bmw',
    year: 2020,
    get age2(){
        return `Машина выпущена в ${this.year}`
    },
    set age2(value){    //для переопределения какогото свойства в обьекте
        this.year = value
    }
}
console.log(auto2)  //{brand: 'bmw', year: 2020} - но get усть как метод
console.log(auto2.age2)  //Машина выпущена в 2020

auto2.age2 = 1999
console.log(auto2)  //{brand: 'bmw', year: 1999} - переопределили year
console.log(auto2.age2)  //Машина выпущена в 1999

// get set - НЕ копируются между обьектами

// Если какая то функция создает глобальную переменную или перезаписывает ее, и ломает весь код

Object.defineProperty(window, 'globalVar', {    //определять в начале кода
    set: function(val){
        console.log(val);
        debugger;       //выбросит с консоли в соурс и покажет откуда было определено globalVar
        // вкладка Call Stack - все места вызова переменной
    } 
})

function foo(){
    globalVar = 10
}
foo()
console.log(globalVar)  //10
console.log(window.globalVar)  //10 - можно к window применить  Object.defineProperty (код выше вставляем)

