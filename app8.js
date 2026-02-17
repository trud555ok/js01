let value
value = 12
console.log(typeof value)   //number - число

// Number to string
let d = String(value)
console.log(typeof d)   //string
let r = (40).toString() //вариант преобразования в строку, если есть точка и вконце скобки - это метод
let r1 = value.toString()  // преобразование через переменную

// Boolean to string
let s1 = String(true)
console.log(typeof s1)  //string

// Array to string
m = String([1,2,3])
console.log(m, typeof m)    //1,2,3 string

// Object to string
f = String({pot: "fff"})
console.log(f, typeof f)  //[object Object] string - нюанс js

// Неявное преобразование в строку
let g = 30 + ''
let g1 = 30 + ''+30  //3030
let g11 = 30 + ''+ undefined  //30undefined  string  -- при конкатынации любой тип преобразовывается в строку
let g2 = 30 - ''  //30  number -- '' преобразуется в 0
let g3 = 30 - 'asddffe'  //NaN - не число, потому что 'asddffe' не может преобразовано быть в число
let g4 = 30 - '5'  //25 number -- "5" было преобразовано в число
console.log(g, typeof g)  //30 string

let h = true + 10 // 11 -- true преобразуется в 1
let h2 = true + undefined // NaN number - потому что undefined это не число и не может быть преобразовано в число


// String to number
let k = Number('23') //23 number
let k2 = Number(true) //1 number
let k3 = Number(false) //0 number
let k4 = Number(null) //0 number
let k5 = Number('njnljnnewon') //NaN number  -- не может быть преобразовано в число
let k6 = Number([1,2,3]) //NaN number  -- не может быть преобразовано в число

let z = parseInt('200') //200 number
let z1 = parseInt('200swdqdw') //200 number  -- все равно выделит число
let z2 = parseInt('asa200') //NaN number  -- не может віделить число
let zz = parseFloat('23.25bkehkgu') //23.25 - дробное число

// to Boolean
let x = Boolean('sasasa') // true
let x1 = Boolean(' ') // true
let x2 = Boolean('') // false
let x3 = Boolean(0) // false
let x4 = Boolean(45) // true
let x5 = Boolean(undefined) // false
let x6 = Boolean(null) // false
let x7 = Boolean({}) // true
let x8 = Boolean([]) // true