// ЦИКЛЫ - while, do while, for, for of, for in

// while
// let i = 0
// while(i<10){            // while(i++ < 10)  - можно и так написать, увеличит на след шаге
//     console.log(i)
//     i++
// }

// let k = 10
// while(k--){
//     console.log(k)
// }

// // do while
// let r = 10
// do{
//     console.log(r)
// }while(r--)

// for
for(let d = 0; d < 10; d+=2){
    console.log(d)
}

let str = 'Hello'
let res = ''
for(let i=0; i<str.length; i++){
    res+=str[i]+'*'
}
console.log(res)  // H*e*l*l*o*

let str2 = ['aser', 'dort', 'start']
for(let y=0; y<str2.length; y++){
    str2[y] = str2[y].toUpperCase()
}
console.log(str2)

// перебор массива обьектов
const users = [
    {
        name: 'Vlad',
        age: 56
    },
    {
        name: 'Kola',
        age: 45
    },
    {
        name: 'Jar',
        age: 89
    },
    {
        name: 'Tolik',
        age: 11
    }
]

for(let v = 0; v < users.length; v++){
    console.log(users[v])
}

// преобразовать масив в обьект - ключами в обьекте будут имена
const usersOdj = {}
for(let r = 0; r<users.length; r++){
    usersOdj[users[r].name] = users[r]
}
console.log(usersOdj)

// for in -- для перебора обьекта и получения его ключей
const user = {
    name: 'Vala',
    age: 44
}
for(let key in user){
    console.log(key)    // name...age...ключи обьекта по очереди
    console.log(user[key])    // Vala...44...значение ключей обьекта по очереди
}

// for of -- для удобного перебора масива
const g = ['aaa', 'bbb', 'ccc']
for(let r of g){
    console.log(r)          //вывод каждого элемента массива
}