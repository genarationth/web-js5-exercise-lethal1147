// Exercise #1
// 1.1
// const peoples = ['Sofia','David','Juan'];
// console.log(peoples); // [ 'Sofia', 'David', 'Juan' ]

// // 1.2
// const addFirst = (arr,name) => {
//     arr.unshift(name);
// }

// addFirst(peoples,'Sara');
// addFirst(peoples,'Augustin');
// console.log(peoples); // [ 'Augustin', 'Sara', 'Sofia', 'David', 'Juan' ]

// // 1.3

// peoples.splice(4,0,'Renata');
// console.log(peoples); // [ 'Augustin', 'Sara', 'Sofia', 'David', 'Renata', 'Juan' ]
// peoples.push('Elena');
// console.log(peoples); // [ Augustin', 'Sara', 'Sofia', 'David', 'Renata', 'Juan', 'Elena' ]

// Exercise #2

// for (let i = 0; i <= 5; i++) {
//     let pattern = ""
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//       }
//       console.log(pattern);
// }

// Exercise #3

// 3.1
// let xValue = 10;
// while (xValue > 0) {
//     console.log(xValue)
//     xValue -= 0.5;
// }

// 3.2

// let number = 1;
// while (number <= 100) {
//     if (number % 2 !== 0) {
//         console.log(number)
//     }
//     number++;
// }

// 3.3

// const squareBracket = (number) => {
//     let counter = 1
//     const result = []
//     while (counter <= number) {
//         result.push(`[${counter}]`);
//         counter++
//     }
//     console.log(result.join(' '));
// }

// squareBracket(6);

// 3.4

const sum = num => {
    let counter = 1;
    let result = 0;
    while (counter <= num) {
        result += counter;
        counter++
    }

    console.log(result)
}

sum(5); // 15
sum(19); // 190