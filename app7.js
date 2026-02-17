// переменные var, let, const
var name = "Vera"
console.log(name)

var age
console.log(age)  //undefined - переменная есть но ей ничего не присвоено!

// проблемы с var
// можно было несколько раз обьявить и это не было ошибкой
var car = "bmw"
var car = "audi"
console.log(car) //audi - последнее значение
// можно законсолить до обьявления -- переменная выносится вверх, var soda; а в коде всего лишь определяется - эффукт Хостинга
console.log(soda) //undefined -- при этом ошибки нету!!!
var soda = "Митя"
console.log(soda) //Митя

// const - нельзя переопределить и определить без значения, но можно переопределить элементы массивов, обьектов...
const tor = {
    nik: "Den",
    agik: 26
}
tor.agik = 53
console.log(tor)  //{nik: 'Den', agik: 53}