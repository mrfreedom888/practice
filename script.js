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

const myArray = ['first', 'second', 'third'];
for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

myArray.forEach((element, index) => {
    console.log(element, index);
})