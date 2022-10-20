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

class Comment {
    constructor(text){
        this.text = text;
        this.votesQty = 0
    }
    upvote(){
        this.votesQty += 1;
    }
}

const firstComment = new Comment ('First comment');
const secondComment = new Comment ('Second comment');
const thirdComment = new Comment ('Third comment');

// console.log(firstComment instanceof Object || Comment);

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);

firstComment.upvote();
console.log(firstComment.votesQty);

secondComment.upvote();
console.log(secondComment.votesQty);


secondComment.upvote();
console.log(secondComment.votesQty);


secondComment.upvote();
console.log(secondComment.votesQty);

thirdComment.upvote();
console.log(thirdComment.votesQty);
