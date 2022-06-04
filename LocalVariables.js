// function that console logs a local and global variable
// use numbers
// fuction must multiply the local and global variable
// Test with console logs to demostrate availability

var globalNumber = 3;

const numbersFunction = () => {
    let localNumber1 = 10;
    let localNumber2 = localNumber1 * globalNumber;
    return `Final number is ${localNumber2}`;
}

console.log(numbersFunction());

// console.log(localNumber1, localNumber2, globalNumber);
// console.log(localNumber2, globalNumber);
console.log(globalNumber);