// операторы сравнения
// > < >= <= == === != !==

let value

value = 1 == '1'  //true -- не проверяется тип, а преобразовывается и сравнивается
value = 1 == true  //true -- не проверяется тип, а преобразовывается и сравнивается
value = 'a' > 'A'  //true -- сравниваются юникоды
value = 'a' > 'ab'  //false -- сравниваются кол символов

value = 'sas'.charCodeAt() //97 - код в юникоде
console.log(value)

value = null
// console.log(!value) -- true - ! преобразует в противоположное булевое значение
// console.log(!!value) -- false - !! преобразует в исходное булевое значение

// проверка есть ли что то в массиве
// value = []
// if(value.length){
//     console.log(value)
// } else {
//     console.log('appay is empty')
// }

// проверка является ли массивом
v = []
if(Array.isArray(v)){
    console.log('is array')
} else {
    console.log('NO')
}

// проверка есть ли значение свойства обьекта
const user = {
    name: '59'
}
if(user.name){
    console.log('tak')      // если есть свойство но оно равно пустой строке - то эта проверка не сработает
}

// проверка есть ли такое свойство у обьекта
if(user.hasOwnProperty('name')){
    console.log('tak2')
}

//   || - или - вернет первую ПРАВДУ, если ее нету - последнюю ложь
const f = 1 || 2
console.log(f) //1 - нашел первую правду и вернул
const f1 = 0 || 0 || 2   //2
console.log(f1)
const f2 = 0 || 0 || null       //null - если нету true, то вернет последний false
console.log(f2)

// проверка есть ли значение переменной
const gor = 'sss'
value = gor || 'Значение по умолчанию'    // если пустая строка то будет присвоено дефолтное значение

// && - пытается вернуть false, если нету тогда вернет последнее true
value = 1 && 0 && 3  //0 - запинается на лжи
value = 1 && 2 && 3  //3 - false нету, вернет последнее true

console.log(value) 

let sss = 0 || 7
console.log(sss)