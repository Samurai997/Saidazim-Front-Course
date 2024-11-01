"use strick"



for (let i = 1; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    }else{
        console.log(i);
    }
}

    function evens() {
        for(let i = 0 ; i <= 20; i++){
            if(i === 16) continue
     
            if(i % 2 === 0){
                console.log(i);
            }
         }  
    }

    evens()
function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask()

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()

let str = 'sometext'
let arr = [1, 2, 3, 5, 6, 7, 8, 9]
console.log(arr.length);
console.log(str.length);


let result = []
for (let i = 0; i < arr.length; i ++){
    result[i] = arr[i]
}
console.log(arr);
console.log(result);

1 Заполните новый массив (result) числами из старого (arr). Количество
 элементов в массиве можно получить как arr.length, а к 
 элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив

2 Измените данный массив так, чтобы все числа были увеличены в 2 раза,
 а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

3 Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]



Место для первой задачи

let arr =  [3, 5, 8, 16, 20, 23, 50];
let str = 'testtext';


for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}



function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    for(let i = 0; i < arr.length; i++){
        result[i] = arr[i];
    }
    // Не трогаем
    return console.log(result);;
}
firstTask()


// Место для второй задачи
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    
    for (let i = 0; i < data.length; i++){
        if(typeof(data[i]) === 'number'){
            data[i] = data[i] * 2
        }else if ((typeof(data[i]) === 'string')){
            data[i] += ' - done!'
        }
    }
    
    console.log(data);
}


function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for(let i = 1; i <= data.length; i++){
        result[i - 1] = data[data.length - i];
    }
    // Не трогаем
    return console.log(result);
    // console.log(data[data.length - 1]);
}


thirdTask()



const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)






