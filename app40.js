//Что такое this. Контекст вызова функции.
function getThis(){
    console.log(this) //глобальный обьект Window а в строгом режиме??  undefined
}
getThis() 

// метод - функция которая передана как свойство в обьекте
const produkt = {
    name: 'Яблоко',
    price: 100,
    getPrice: function(){
        //console.log(this)   //если this в контексте обьекта - то получим сам обьект
        console.log(this.price)}, //получили доступ к цене
    info: {
        information: ['33333'],
        getInfo: function(){
            console.log(this)
        }
    },
    getPricik,
    getName(){                                  //можно и так просто записывать метод
        console.log(this.name)
    }
}

// функция которая передана в обьект и где this будет отображать этот обьект
function getPricik(){
    console.log(this.price)
}

produkt.getPrice()
produkt.info.getInfo()
produkt.getPricik()
produkt.getName()

const prod2 = {
    name: 'Комп',
    price: 89, 
}
// если хотим метод такой как в produkt
prod2.getName = produkt.getName;
prod2.getName()

// Переворачивание строки
let str = 'Привет, дед!'
const perev = str.split('').reverse().join(''); //если метода нету у обьекта - ошибка!
// console.log(perev)  //#!дед ,тевирП

function getName3(){
    console.log(this.name3)
}
function getPrice3(currency = '$'){
    console.log(currency + this.price3)
}

const prod3 = {
    name3: 'Машина',
    price3: 555,
    getName3,
    getPrice3
}
// prod3
    // .getName3() // вернет underfined так как нету return
    // .getPrice3() // ошибка - у underfined нету такого метода
// НО не будет ошибки тут если каждая из функций будет return this

// функции можем вызывать в нужном нам контексте!!!
const prod4 = {
    name3: 'Телик',
    price3: 222,
    // getName3,                    что бы не писать эти методы можем нужные функции вызывать в контексте 
    // getPrice3                    этого обьекта
}

getPrice3.call(prod4, '@')    //$222 вызываем метод getName3 в контексте(типа она там есть) обьекта prod4
// 1 аргум - в каком контексте вызывать getPrice3
// остальные аргументы - те что должны быть переданя в getPrice

getPrice3.apply(prod4, ['#']) //#222 - то же самое что и call но аргументы для функции передаются в масиве

// потеря контекста
const prod5 = {
    name3: 'Телик',
    price3: 222,
    getName3,                     
    getPrice3                    
}
setTimeout(prod5.getPrice3(), 1000)     // вызов метода через секунду
// $underfined - потому что setTimeout работает в контексте Window, а там нету prod5

// решение - bind
const getPriceBind = prod5.getPrice3.bind(prod5, '!') // bind - привязывает getPrice3 к контексту prod5
// 1 арг bind - контекст
// остальные арг - то что передать в метод getPrice
// getPriceBind - тут находится функция привязаная к контексту prod5
setTimeout(getPriceBind, 1000) // привязаная функция срабатывает через 1с в контексте prod5

// если привязать функцию то call apply не работают!!!

