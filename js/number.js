// let num = 5
// // console.log(++num);
// console.log(num++);
// console.log(num++);




// let num = 4
// if(false){
//     console.log('true');
// }else{
//     console.log('false')
// }





// let num = 100
// if (num%2 === 0){
//     console.log('Its even');
// }else{
//     console.log('Its Odd');
// }




// let num = 5;
// while(num < 10){
//     console.log(num)
//     num++
// }



// do {
//     console.log(num);
//     num++
// }
// while(num < 0);







// for (let i = 1; i < 8; i++) {
//     console.log(i);
// };


// let num = 50
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++
// };





// for (let i = 1; i <= 10; i++){
//     if(i === 6) {
//         break
//         continue;
//     }
//     console.log(i);
    
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
        
//     }
// };



// let result = '';
// const length = 7;
// for  (let i = 1; i < length; i++){
//     for(let j = 0; j < i; j++){
//         result += "*"
//     }
//     result += '\n'
// }
// console.log(result);






// for (let i = 1; i < 24; i++) {
//     if(i%2 === 0)
//     console.log(i);
// };






// for (let i = 1; i < 22; i++) {
//     if(i%2 === 1)
//     console.log(i);
// };






// for (let i = 20; i >= 12; i--){
//     if(i === 12) {
//         break
//         // continue;
//     }
//     console.log(i);
    
// }







const arr1 = [1, 2, 3, 4, 5];
const result2 = new Array(arr.length); // создаем новый массив той же длины

for (let i = 0; i < arr.length; i++) {
    result2[i] = arr[i]; // копируем элементы
}

console.log(result2); // [1, 2, 3, 4, 5]







const arr2 = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        arr[i] = arr[i] * 2; // Увеличиваем число в 2 раза
    } else if (typeof arr[i] === 'string') {
        arr[i] = arr[i] + ' - done'; // Добавляем " - done" к строке
    }
}

console.log(arr); // [10, 20, 'Shopping - done', 40, 'Homework - done']









const data = [5, 10, 'Shopping', 20, 'Homework'];
const result3 = [];

for (let i = data.length - 1; i >= 0; i--) {
    result3.push(data[i]); // добавляем элементы в обратном порядке
}

console.log(result); // [ 'Homework', 20, 'Shopping', 10, 5 ]








const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);