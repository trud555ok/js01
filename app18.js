//Тернарный оператор. Конструкция switch case

let a = 1
let b = 0
// if(a > 0){
//     b = a
// }else{
//     b+=1
// }
// console.log(b)

// Структура тернарного оператора - выражение ? если true : если false
// a > 0 ? b = a : b += 1;   --- но он возращает результат b = a или b += 1
b = a > 0 ? a : b + 1;
console.log(b)
// тернарник можно расширять и делать сложные конструкции
b = a > 0 ? 11 : a < 0 ? 22: 0
console.log(b)

// switch - case
let color = 'red'
switch(color){
    case 'red':
        console.log('is red')
        break
    case 'green':
        console.log('is green')
        break
    default:
        console.log('?????')
}

let color1 = 'red'
switch(color1){
    case 'red':
    case 'green':
        console.log('is green || red')
        break
    default:
        console.log('?????')
}