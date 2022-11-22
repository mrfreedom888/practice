// 'use strict'
// const month = 12;

// switch (month) {
//     case 12:
//         console.log('декабрь');
//         break;
//     case 1:
//         console.log('январь');
//         break;
//     case 2:
//         console.log('февраль');
//         break;
//     default:
//         console.log('не зимній місяць');
//     }


// const value = 11;

// value
//     ? console.log('условие истинно')
//     : console.lo0g('условие ложно');

// const value1 = 11;
// const value2 = 25;

// value1 && value2
//     ? myFunction1(value1, value2)
//     : myFunciont2();


// let value = 11;
// console.log(value >= 0 ? value : -value)

// value = -5;
// const res = value >= 0 ? value : -value;
// console.log(res);

// goal = 'dddd';
// console.log(typeof goal);

// goal = true;
// console.log(typeof goal);

// let i = 0;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;

// const myArray = [true, 'abc', 10];

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// };

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const myArray = ['first', 'second', 'third'];
// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }

// myArray.forEach((element, index) => {
//     console.log(element, index);
// })

// let i = 4;

// do{
//     console.log(i);
//     i++
// } while (i < 5)

// const myObj = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// for (const key in myObj){
//     console.log(myObj[key])
// }

// Object.keys(myObj).forEach(key => {
//     console.log(key, myObj[key])
// })

// Object.values(myObj).forEach( value => {
//     console.log(value);
// })

// const myArray = [true, 10, 'abc', null];

// for (const key in myArray) {
//     console.log(myArray[key])
// };

// myArray.forEach(key => {
//     console.log(key)
// })

// const myString = 'hey';

// for (const letter of myString) {
//     console.log(letter)
// }

// const myArray = [true, 10, 'abc', null];

// for (const element of myArray) {
//     console.log(element);
// }

// class Comment {
//     constructor(text){
//         this.text = text;
//         this.votesQty = 0
//     }
//     upvote(){
//         this.votesQty += 1;
//     }
// }

// const firstComment = new Comment ('First comment');
// const secondComment = new Comment ('Second comment');
// const thirdComment = new Comment ('Third comment');

// console.log(firstComment instanceof Object || Comment);

// firstComment.upvote();
// console.log(firstComment.votesQty);

// firstComment.upvote();
// console.log(firstComment.votesQty);

// firstComment.upvote();
// console.log(firstComment.votesQty);

// firstComment.upvote();
// console.log(firstComment.votesQty);

// secondComment.upvote();
// console.log(secondComment.votesQty);


// secondComment.upvote();
// console.log(secondComment.votesQty);


// secondComment.upvote();
// console.log(secondComment.votesQty);

// thirdComment.upvote();
// console.log(thirdComment.votesQty);


// class Comment {
//     constructor(text){
//         this.text = text;
//         this.votesQty = 0
//     }
//     upvote(){
//         this.votesQty += 1;
//     }
//     static mergeComments (first, second) {
//         return `${first} ${second}`
//     }
// }

// console.log(Comment.mergeComments('First comment.', 'Second comment.'));

// class NumbersArray extends Array {
//     sum() {
//         return this.reduce((el, acc) => acc += el, 0)
//     }
// }

// const myArray = new NumbersArray(2, 5, 7)

// console.log(myArray)
// console.log(myArray.sum());


// const myPromise = new Promise ((resolve, reject) => {
     
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error.message));


// const getData = (url) => 
//     new Promise ((resolve, reject) => 
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//     )

// getData('https://jsonplaceholder.typicode.com/todos/3')
//             .then(data => console.log(data))
//             .catch(error => console.log(error.massage))


// const asyncFn = async() => {
//     throw new Error('seccess!');
// } 

// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message));

// const timerPromise = () => 
//     new Promise((resolve, reject) => 
//         setTimeout(() => resolve(), 2000));

// const asyncFn = async() => {
//     console.log('timer starts');
//     const startTime = performance.now();
//     await timerPromise()
//     const endTime = performance.now()
//     console.log('timer ended', endTime - startTime);
// }

// asyncFn()

// const getData = async (url) => {
//     const res = await fetch(url);
//     const json = res.json();
//     return json
// }

// const url = 'https://jsonplaceholder.typicode.com/todos';
// try{
//     const data = await getData(url);
//     console.log(data);
// } catch(error){
//     console.log(error.message);
// }



// function mostCommon(a, b) {
//   const A = a.split('');
//   const B = b.split('');
//   const min = {
//     diff: A.length + B.length,
//     index: -A.length,
//     start: undefined,
//     finish: undefined,
//   };

//   for (let offset = -A.length; offset < B.length; offset++) {
//     let diff = Math.max(0, -offset) + Math.max(offset + A.length - B.length, 0);
//     const initialDiff = Math.max(0, -offset) + Math.max(offset + A.length - B.length, 0);
//     const start = Math.min(Math.max(0, offset), B.length);
//     const finish = Math.min(Math.max(0, offset + A.length), B.length);
//     let matchStart;
//     let matchFinish;
//     for (let i = start, isMatchStarted = false; i < finish; i++) {
//       if (B[i] !== A[i - offset]) diff++;
//       else {
//         if (!isMatchStarted) {
//           matchStart = i;
//           isMatchStarted = true;
//         }
//         matchFinish = i;
//       }
//     }

//     if (diff < min.diff) {
//       min.diff = diff;
//       min.index = offset;
//       min.start = matchStart;
//       min.finish = matchFinish;
//     }
//   }

//   console.log(min, b.substring(min.start, min.finish + 1));

//   return min;
// }

// mostCommon('xxx>abcABCxxx', 'bbbzzz>abcAXCiiiqqq');


let userName;
do{
    userName = prompt('What is your name?' ,'Oleh');
}while( userName === null || !userName.trim())


let userAge = +prompt('How old are you?' , 18);

if (userAge < 18) {
    alert('You are not allowed to visit this website');
} else if ( userAge === 18 || userAge <= 22) {
    let userAction = confirm('Are you sure you want to continue?');
    if ( userAction === true){
        alert(`Welcome, ${userName}`);
    } else{
        alert('You are not allowed to visit this website');
    }
}  else{
    alert(`Welcome, ${userName}`);
}
