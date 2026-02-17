// Коментарий однострочный ctrl+/
/*
Коментарий 
многострочный
*/
/**
 *  JSDoc коментарий
 */

// Консоль ctrl+shift+I
// Очистить консоль ctrl+l

/**
 * Типы данных
 * 1.Примитивные
 * Number: 2019, 1.5, NaN, Infinity
 * String: 'Hello', "Hello", `Hello`
 * Boolean: true, false
 * Null: null
 * Undefined: undefined
 * Symbol()
 */
/**
 * Типы данных
 * 2.Объекты (Reference type) Передаются по ссылке
 * Object: {name:'Denis', age: 15}
 * Arrey: [1,2,3]
 * Function: function foo(){}
 * Date: new Date()
 * ......
 */

console.log(2015, 1.5)
console.log(20 * 'aaaaa')     //NaN - это не число, ошибка  при вычислении
console.log(20 / 0)     //Infinity

console.log("Hello", 'Hello', `Hello`) // стоки, в `` можем подставлять переменные

console.log(true, false)

console.log(null) // значение неизвестно
console.log(undefined) // переменная ничему не равна, ей ничего не присвоено

console.log({name: 'Denis', age: 25})
console.table({name: 'Denis', age: 25})  // вывод в консоли в виде таблицы
console.log([1,2,3,4]) //массив