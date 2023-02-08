
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let user = [
     {name:'zero', age: 30, status:false},
     {name:'one', age: 31, status:true},
     {name:'two', age: 32, status:false},
     {name:'three', age: 33, status:true},
     {name:'four', age: 34, status:false},
     {name:'five', age: 35, status:true},
     {name:'six', age: 36, status:false},
     {name:'seven', age: 37, status:true},
     {name:'eight', age: 38, status:false},
     {name:'nine', age: 39, status:true}
];
for (let i = 0; i <9; i++) {
    document.write  (`<div>${user[i].name} ${user[i].age}</div>`)
};
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: true},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}

];
let i = 0;
while (i < users.length) {
    let user = users[i]
    document.write(`<h1>${users[i].name}</h1>`)
    i++;
}
