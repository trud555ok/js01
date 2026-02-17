// 44. Перебирающие методы массивов
// forEach 
// filter 
// map 
// reduce 
// same / every 
// sort 
// find 

const users = [
    {
        _id: "124578",
        index: 0,
        isActive: false,
        balans: 456.23,
        age:45,
        gender: 'female'
    },
    {
        _id: "789632",
        index: 1,
        isActive: true,
        balans: 897.12,
        age:23,
        gender: 'female'
    },
    {
        _id: "458912",
        index: 2,
        isActive: false,
        balans: 78.15,
        age:16,
        gender: 'male'
    },
    {
        _id: "889956",
        index: 3,
        isActive: true,
        balans: 99.99,
        age:56,
        gender: 'male'
    },
    {
        _id: "142536",
        index: 4,
        isActive: true,
        balans: 89.22,
        age:72,
        gender: 'female'
    }
]

// forEach
// users.forEach((user, i, arr) => {
//     console.log(user, i, arr)
// })
// если ненужны все аргументы
// users.forEach(user => {
//     console.log(user)
// })

// filter
const userLess30 = users.filter((user, i, arr) => user.age < 30)
//если возращаемая часть стр функц вернет true - user войдет в новую выборку
console.log(userLess30)
const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

// map
const userName = users.map((user, i, arr) => user._id)
console.log(userName)   //получаем масив _id
const userNewArr = users.map(user => ({name: user._id, nomer: user.index}))
console.log(userNewArr)     //получим новый масив

// reduce 
// если например надо посчитать сколько денег есть у всех юзеров
const totalBalance = users.reduce((acc, user, i, arr) => {
    console.log(acc)
    return acc += user.balans
}, 0)
// 1 аргум - колбэк
// 2 аргум - начальное значение
// acc - акумулятор, результат вычеслений предыдущих иттераций
console.log(totalBalance)
// если надо создать обьект новый
const usersObj = users.reduce((acc, user) => {
    acc[user._id] = user
    return acc
}, {})
console.log(usersObj)

// some / every
// есть ли хоть 1 мужчина
const isMale = users.some((user, i, arr) => user.gender === 'male')
console.log(isMale) //true
// каждый ли является мужчиной
const isAllMale = users.every((user, i, arr) => user.gender === 'male')
console.log(isAllMale)  //false
// всем ли больше 15 лет
const is15 = users.every(user => user.age > 15)
console.log(is15)   //true

// find - вернет нужный элемент
const newUser = users.find(user => user._id === "458912")
console.log(newUser)

// sort - сортирует лексически, изменяет начальный массив
const strArr = ["Den", "Bob", "Anna"]
strArr.sort()
console.log(strArr) //['Anna', 'Bob', 'Den'] - строки сортирует правильно
const numArr = [10, 7, 44, 32]
// numArr.sort()
// console.log(numArr)  //[10, 32, 44, 7] - сортировка по первым числам
numArr.sort((prev, next) => prev - next ) // а в обратном порядке next-prev
console.log(numArr)  //[7, 10, 32, 44]
// сортировка users по возрасту
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age)
console.log(users)