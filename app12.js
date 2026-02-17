// шаблонные строки

const firstName = 'Denis'
const lastName = 'Popov'
const age = 56

let str = `
    <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name: ${lastName}</li>
        <li>Age: ${age}</li>
        <li>Math.random: ${Math.random()}</li>
        <li>5+5: ${5+5}</li>
    </ul>
`;

document.body.innerHTML = str

// ${...} -- конструкция для вставки переменной, вызова функции и т.д.