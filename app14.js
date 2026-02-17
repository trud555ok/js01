// ввведение в обьекты

const user = {
    firstName: 'Den',
    age: 78,
    isAdmin: true,
    email: 'test@test.com',
    'user-adress': {
        city: 'Kyiv'
    },
    skills: ['html', 'css', 'js']
};

// название свойств в кавычках если оно через дефис или используются спец символы

let value;
value = user.firstName  //обращение через точку к свойству обьекта
value = user['isAdmin'] // обращение через скобки  -- для сложных названий свойств, те что в дужечках
value = user['user-adress'].city //когда свойство равно обьекту 
value = user['user-adress']['city'] //когда свойство равно обьекту

let prop = 'email'
value = user[prop] //при обращении через скобки - можно подставлять переменную

// перезапись свойства
user.firstName = 'Valik'
value = user['firstName'] //Valik

// Если несуществующему полю присвоить значение - оно создастся с этим значением
user.info = 'some info'

// если обратиться к вложеному свойству несуществующего поля - ошибка!
//user.plan.basic = 'basic'       user.plan -- undeFined


console.log(value)
console.log(user)