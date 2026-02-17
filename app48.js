// Методы объектов про которые часто забывают.
// обьекты могут копироваться глубоко и неглубоко
// неглубокое копирование
let obj1 = {
    name: 'Den',
};
let obj2 = {
    age: 23,
};
let newObj = obj1 // это не копирование, создается еще одна ссылка
console.log(newObj === obj1) //true - ссылки на один и тот же обьект

newObj = Object.assign({}, obj1)
// 1 арг - обьект в который будем копировать (например пустой)
// 2,3 ... арггументы - обьекты которые копируем
console.log(newObj === obj1)    //false - это разные обькты

newObj = Object.assign({}, obj1, obj2)  // последний перезаписует и дополняет предыдущий
console.log(newObj)  //{name: 'Den', age: 23}
// свойства с обоих обьектов попадет в newObj

// если первым аргументом obj1
newObj = Object.assign(obj1, obj2) // obj2 копируем в obj1 и присваеваем newObj
console.log(newObj === obj1)  //true - тогда ссылки на один обьект

// assing перезапишет одинаковые свойства!!!! если таковы есть

let obj11 = {
    name: 'Volter',
    info: {
        skills:['html', 'css'],
    },
}

let newObj2 = Object.assign({}, obj11)
console.log(newObj2)   //все скопировалось НО
console.log(newObj2.info === obj11.info)    // true - один и тот же обьект, неглубокое копирование

// неглубокое копирование можно еще делать с помощью диструкторизации?

// JSON - для работы с форматом который отправляется и принимается на сервер
console.log(JSON.stringify(newObj2)) //{"name":"Volter","info":{"skills":["html","css"]}}

// Глубокое копирование
// 1 - превратить в тип json
// 2 - распарсить json обратно в обьект
let objJSON = JSON.stringify(obj11)
newObj2 = JSON.parse(objJSON)
console.log(newObj2)
console.log(newObj2 === obj11) //false
console.log(newObj2.info === obj11.info) //false - разные обьекты

// еще методы обьектов
// Object.keys - вернет масив с ключами обьекта
const keys = Object.keys(obj11)
console.log(keys) //['name', 'info']

// Object.values - вернет масив со значаниями ключей обьекта
const val = Object.values(obj1)
console.log(val)    //['Den', 23]

// Object.entries - вернет масив масивов в каждом 2 элемента - ключ, его значение
const ent = Object.entries(obj1)
console.log(ent) // [['name', 'Den'], ['age', 23]]

// Object.fromEntries - противоположное entries, с масива масивов делает обьект
const fromEn = Object.fromEntries([['name', 'Tolik'], ['age', 30]])
console.log(fromEn) //{name: 'Tolik', age: 30}
