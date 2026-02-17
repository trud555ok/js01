// стрелочная функция
const plus = (x, y) => x+y;
// то же самое
function plusToo(x, y){
    return x+y;
}

const plusRes = plus(1, 2)
console.log(plusRes)

// без аргументов
const withoutArgs = () => console.log('Привет, дядя!')
// если только один аргумент
const singleArgs = x => x*2;
const singleArgs2 = (x = 1) => x*2; //если по умолчанию
// если много действий
const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}
// когда стрелочная функция вернет обьект
const returnObj = (str = '') => {
    return {
        name: str,
        length: str.length
    }
}
console.log(returnObj('Hello!!!')) //{name: 'Hello!!!', length: 8}

// можно сократить нарисание такой функции, () заменят return
const returnObj2 = (str = '') => ({
        name: str,
        length: str.length
    })

// Отличие от обычной функции
// 1. у обычной функции есть arguments
function woo(x, y){
    console.log(arguments) //вывод всех параметров
    return x+y;
}
woo(1,2,3,'sas') //Arguments(4) [1, 2, 3, 'sas', callee: ƒ, Symbol(Symbol.iterator): ƒ]
// получили аргументы в псевдомассиве Arguments (типа масив но не масив)

// 2 в стрелочных функциях нету контекста а значит нету своего this (берется на уровень выше)
const obj = {
    firstName: 'Den',
    age: 30,
    getFirstName(){
        console.log(this)   //есть контекст -  obj
    },
    getAge: () => console.log(this),     //при вызове - Window
    getAgeArrow: null,                  //промежуточное значение
    getAge2(){
        this.getAgeArrow = () => console.log(this)  //так будет контекст
        setTimeout(() => console.log(this))     //тоже получим правильный контекст
    }
}
   