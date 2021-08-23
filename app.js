/* Original example. Execution time is 5.7ms. console.time is used to monitor the execution time. */
console.time('exc')
//Create array will values 0 to 100
const arr = Array.from(Array(101).keys());
//Remove first element in the array, starting point is now 1
arr.shift();
//Create new array that iterates through and replaces multples with the corresponding word
const newArr = arr.map((ele) => {
    //Checking for multiples of 3
    const fizz = ele % 3 === 0;
    //Checking for multiples of 5
    const buzz = ele % 5 === 0;
    //Using a ternary operator to evaluate and return either the number of phrase. Could use an if else statement.
    const fizzBuzz = fizz && buzz ? 'FizzBuzz' : ele && fizz ? 'Fizz' : ele && buzz ? 'Buzz' : ele
    return fizzBuzz
})
//Using join with a regular expression to console log the correct string
console.log(newArr.join('\r\n'))
console.timeEnd('exc')


/*Shorter example, not as easy to read. Execution time is 7.6ms so not as good.*/

// console.time('forExc')
// for(let i = 1; i < 101; i++){
//     console.log((i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' : i && (i % 3 === 0)  ? 'Fizz' : i && (i % 5 === 0) ? 'Buzz' : i )
// }
// console.timeEnd('forExc')

