// строки
const firstName = 'Denis'
const lastName = 'Popov'
const age = 20
const str = 'Hello my name is Denis'

let value;

// конкатенация
value = firstName + ' ' + lastName
value += ' I am ' + age

value = value.length    //длина строки
value = firstName[2]    //получить элемент строки
value = lastName[lastName.length - 1]   //последний элемент строки

value = firstName.toLowerCase()     //все буквы маленькие
value = lastName.toUpperCase()      //все буквы большие

value = firstName.concat(' ', lastName) //конкатенация, принимает все строки которые надо добавить

value = str.indexOf('n')    //вернет индекс первого вхождения подстроки, если нету то -1, чуствительный к регистру
value = str.indexOf('n', 10) //поиск подстроки с определенного индекса. по умолчанию - 0, если отрицательное - поиск начиная с конца
value = str.lastIndexOf('n')  //то же самое но поиск начиная с конца строки

value = str.includes('my') //true или false  - проверяет или есть такая подстрока, чувствительный к регистру

value = str.slice(0, 5) //Hello - вырезать с 0 по 5 индекс не включая     slice - кусочек
value = str.slice(0) //получим всю строку, так же если не передадим аргумент
value = str.slice(5) //вырезать начиная с 5 индекса и да конца
value = str.slice(0, -3) //вырезать начала до 3 символа с конца
// value = str.substring()  --- ???
value = str.replace('Denis', 'Den') // Hello my name is Den -- замена что на что
console.log(value)