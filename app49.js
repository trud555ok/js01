//  Деструктуризация
const users = {
    firstName: 'Den',
    lastName: 'Ivanov',
    age: 25
}
const users2 = {
    firstN: 'Den',
    lastN: 'Ivanov',
    age2: 25,
    info: {
        work: 'easyCoder',
        skills: ['html', 'css', 'js']
    }
}

const {firstName, lastName, age = 30} = users;
// age = 30 - значение по умолчанию если такого нету в обьекте
console.log(firstName)  //Den

const {firstN: name, lastN, age2: years = 30} = users2;
// firstN: name - если хотим другое имя, в name будет храниться значение, 
// firstN становится недоступным
// age2: years = 30 - по умолчанию и меняем имя

// работа со сложными обьектами
const {info: {work}} = users2;
// вытянули work с info

// деструктиризация масивов
const colors = ['black', 'white', 'red', '#23232']
const [b, w, red, green = 'green'] = colors      // важен порядок
console.log(b, w, red, green)  //black white red #23232

// если хочу пропустить что то в массиве
const nameMass = ['Ivan', 'Peter', 'Bob'];
const [, name2, name3] = nameMass
console.log(name2, name3)   //Peter Bob

// деструкторизация сложных массивов
const arrMe = ['Hello', ['key', 'value']];
const [, [key, value]] = arrMe
console.log(key, value) //key value

// если хотим получить один элемент а остальные в виде массива
const nameMass2 = ['Ivan', 'Peter', 'Bob'];
const [name1, ...namesOther] = nameMass2
console.log(namesOther) //['Peter', 'Bob']

//Скопировать масив (неглубокое копирование)
const [...newNmeMas2] = nameMass2;
console.log(newNmeMas2)     //['Ivan', 'Peter', 'Bob']
const newNameMass3 = [... nameMass2]
console.log(newNameMass3)   //['Ivan', 'Peter', 'Bob']
console.log(...newNameMass3)   //Ivan Peter Bob - выводится не как масив

// склеить масивы
const arr2 = ['some value',...colors, ...nameMass];
console.log(arr2)   //['some value','black', 'white', 'red', '#23232', 'Ivan', 'Peter', 'Bob']

//копировани обьектов
const newUser = {...users, age: 30} // age перезапишется

// смешаная деструктиризация
const {info:{
    skills:[html, css]
}
} = users2;
console.log(html, css)  //html css

// деструкторизация в функциях
function person({firstN, lastN, info:{skills}} = {}){
    console.log(firstN, lastN, skills)  //Den Ivanov ['html', 'css', 'js']
}
person(users2)

function test(x, y, ...others) {
  console.log(arguments); //не масив а псевдомасив arguments.map // ❌ undefined
  console.log([].slice.call(arguments)) //це старий спосіб перетворити arguments у масив
    //   slice копіює arguments у новий масив.
    // новый способ получить масив с псевдомасива arguments
    const [...arg] = arguments;
    console.log(arg)    //[1, 2, 3, 4, 5, 6]
    console.log(others) //[3, 4, 5, 6]

}

test(1, 2, 3, 4, 5, 6);

const numbers = [2, 3]
function test2(x, y){   //элементы масива присвоятся аргументам
    console.log(x + y) //5
}
test2(...numbers)



