// let user = {
//     name: 'John',
//     surname: 'Smith',
// };
//
// user.name='Pete';
// delete user.surname;
//
// console.log(user);
//


//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";
//
// console.log(user);

// Это будет работать, т.к. объект-это ссылочный тип и мы заменяем ссылку на значение

/*
У нас есть объект, в котором хранятся зарплаты нашей команды:



Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.*/

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum=0;

for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);
*/

/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

multiplyNumeric(menu);*/



/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let sum = 0;

function multiplyNumeric(){


   if(typeof menu=='number') {
for(let key in menu) {
    sum +=menu[key]*2
}
   } else{
console.log("There are no numbers");
   }
}

multiplyNumeric(menu)*/


//Почему возвращает There are no numbers?