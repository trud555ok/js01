// функции - обьекты
function foo(){
    console.log('Hello')
}

foo()
foo.field = 'Den' // мы как обьекту назначаем новое поле
console.log(foo.field)
// функции могут быть переданы как параметры в другие функции !!! все делать что и с переменныеми
// поэтому их называют функции первого порядка
// функция высшего порядка - та которая принимает или возвращает другую функцию

const arr = ['Sergey', 'Vala', 'Tom'];
// => [6, 4, 3]
let newArr = [];
for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].length);
}
console.log(newArr);

let newArr2 = []
for(let y = 0; y<arr.length; y++){
    newArr2.push(arr[y].toUpperCase())
}
console.log(newArr2)

// колбэки - функции которые переданы были как парамерты и вызваны в функции высшего порядка

// когда функции передают как параметр
function mapArray(arr, fn){
let res = []
for(let i = 0; i < arr.length; i++){
    res.push(fn(arr[i]))
} 
    return res;
}

function nameLength(el){
    console.log(el);
    return el;
}
function nameToUpper(el){
    return el.toUpperCase();
}
const result = mapArray(arr, nameLength)
console.log(result)
const result2 = mapArray(arr, nameToUpper)
console.log(result2)

// когда функция возращается с другой функции
function greeting(firstName){
    return function (lastName){
        return `Hello ${firstName} ${lastName}`
    }
}

const testGreting = greeting('Ваня')
const resGreet = testGreting('Иванов')
console.log(resGreet)

const resGret2 = greeting('Peter')('Kovalski')
console.log(resGret2)

function question(job){
    if(job === 'developer'){
        return function(name){
            return `${name} что такое js?`
        } 
        }else if (job === 'teacher'){
          return function(name){
            return `${name} какой предмет ведете?`
        }   
        }
    }

    const q1 = question('developer')
    console.log(q1('Ваня'))
    const q2 = question('teacher')
    console.log(q2('Peter'))

    // 2 вариант этого решения
    function question2(job){
        const prof = {
          developer: 'что такое js?',
          teacher: 'какой предмет ведете?'
        }
        return function(name){
            return `${name} ${prof[job]}`
        }
    }

    const rr = question2('developer')
    console.log(rr('Senka'))