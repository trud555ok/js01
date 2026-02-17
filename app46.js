// замыкания
function getFullName(firstName, lastName){
    console.log(firstName, lastName)
    return function(){
        return `${firstName} ${lastName}`
    }
}

const getName = getFullName('Bob', 'Reen')
console.log(getName)        // хранится сама функция
console.log(getName())      //Bob Reen - то что вернет функция

function updateValue(val = 0){
let x = val;
return function(num){
    return x+=num;
    }
}
const uv = updateValue(2)   //x=2
const uv2 = updateValue(4)  //при новом вызове контекст создается новый
console.log(uv(1))          //3     x+=1
console.log(uv(0))          //3     x+=0       предыдущее значение x=3 запомнилось

console.log(uv2(4)) //8

// пример
function checkCred(){
    const login = 'test';
    const pass = '1234';
    return{
        checkLog(val){
            return login === val;
        },
        checkPass(val){
            return pass === val;
        }
    }
}
const cc = checkCred()
console.log(cc) // обьект с 2 методами
console.log(cc.checkLog('qqqq'))    //false - логин неправильный
console.log(cc.checkPass('1234'))    //true - пароль правильный

// пример2
function closureExample(){
    const arrOfFunc = [];
    let value = '';
    for(let i = 0; i < 10; i++) {
        value += i
        arrOfFunc.push(function(){
            console.log(value, i)
        })
    }
    return arrOfFunc;
}

const res = closureExample()
console.log(res)        // масив из 10 функций
res[0]() // вызываем 1 функцию и получим - 0123456789 0
res[5]() //0123456789 5
// value - внешняя переменная - получаем результат после работы цыкла
// i - имеет let, не всплывает и является внутренней переменной цыкла, при var всплывает и получим 10 как конечны результат!!!