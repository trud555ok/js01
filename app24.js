// arguments - иттерируемая последовательность, коллекция, псевдомассив (не массив), 
// в ней все аргументы которые были переданы в функцию

function foo(x){
    console.log(x)
    console.log(arguments)  // вывод всех аргументов
    console.log(arguments[1])   // вывод второго аргумента

    // перебор arguments в цыкле
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
foo(11, 'aaa', [1,2,3])
// в современной разработке arguments не пользуются!!!
// arguments - обькт а не массив -- не имеет методов массива!!!
// arguments в стрелочных функциях не существует!
