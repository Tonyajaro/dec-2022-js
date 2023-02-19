//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectanglearea (a,b) {
    let result = a*b;
    return result;
}

console.log(rectanglearea(10,10));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

function circlearea(radius) {
    let result = 2*Math.PI*radius;
    return result;
}

console.log(circlearea(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderarea (h,r) {
    let result = 2*Math.PI*r*(h+r);
    return result;
}
console.log(cylinderarea(5,5));


//- створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function x (arr) {
    for (const element of arr){
        console.log(element);
    }

}
x(users);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph () {
    console.log(arguments)
}
paragraph('text','text');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foo(li) {
    let text = `<div> <ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>
    </div>`
    document.write(text);
    console.log(arguments)

}
foo ('lala');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function foobar(li) {
    let text = `<div> <ul>
<li>${li}</li>
<li>${li}</li>
<li>${li}</li>
</ul>
    </div>`
    document.write(text);
    console.log(arguments);


}
foobar ('lolo');

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function user(a) {
    console.log(a);
}

b = [1, 2, 3]
user(b)

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250