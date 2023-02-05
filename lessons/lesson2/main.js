// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let names = ['Ola', 'Sveta', 'Max', 'Jn', 'Anna', 'Mark', 'Dima', 'Juli', 'Lucy', 'Nastia'];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
console.log(names[6]);
console.log(names[7]);
console.log(names[8]);
console.log(names[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let books = {
    title: 'Pride and Prejudice',
    pageCount: 400,
    genre: 'romance'
};
console.log(books);

let books1 = {
    title: 'The Adventures of Sherlock Holmes',
    pageCount: 1392,
    genre: 'Detective'
};
console.log(books1);

let books2 = {
    title: 'The Catcher in the Rye',
    pageCount: 156,
    genre: 'Novel'
};
console.log(books2);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let book = {
    title:'Harry Potter',
    pageCount: 3500,
    genre:'fantasy',
    authors: [
        'name:J.K.Rowling',
        'age:57'],

};
console.log(book);

let book1 = {
    title: 'The Little Prince',
    pageCount: 128,
    genre:'fantasy',
    authors:[
        'name:Antoine Exupery',
        'age:1900-1944'
    ],
};
console.log(book1);

let book2 = {
    title:'Alice in wonderland',
    pageCount: 52,
    genre:'fantasy',
    authors:[
        'name:Lewis Karol',
        'age:1832-1898'
    ],
};
console.log(book2);

//- Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    zero =  {name:'zero', username:'zer',password:'zz'},
    one = {name:'one',username:'on',password:'oo'},
    two = {name:'two',username:'tw',password:'tt'},
    three = {name:'three',username:'thr',password:'thh'},
    four = {name:'four',username:'fo',password:'ff'},
    five = {name:'five',username:'fi',password:'fii'},
    six = {name:'six',username:'si',password:'ss'},
    seven = {name:'seven',username:'sv',password:'svv'},
    eight = {name:'eight',username:'ei',password:'ee'},
    nine = {name:'nine',username:'ni',password:'nn'}
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3


//let x=1;
//let x =0;
let x = -3;

if(x!==0){
    console.log('вірно')
}
else {
    console.log('невірно')
}

//Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 33;

if (time>=0 &&  time<=14)
    console.log('first');
if (time>=15 && time<=29)
    console.log('second');
if (time>=30 && time<=44)
    console.log('third');
if (time>=45 && time<=59)
    console.log('fourth');

//- У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 3;
if (day>=1 && day<=11)
    console.log('first');
if (day>=12 && day<=21)
    console.log('second');
if (day>=22 && day<=31)
console.log('third');

// Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let week = 'enter day'

switch (week){
    case '1':
        console.log('Monday');
            break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = 1;
let b = 2;

if (a===b){
    console.log(a, b, 'однакові');
} else if (a>b){
    console.log(a, 'більше за', b);
} else if (a<b) {
    console.log(a,'меньше', b);
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
// якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//За допомоги іф перевірити кожен його елемент на тривалість навчання.
//У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration:4},

];
