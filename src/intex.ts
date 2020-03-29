const l = (value: any) => {
    console.log('====');
    console.log(value);
    console.log('====\n');
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const array1 = [1, 2, 3, 4];
const reducerFxn = (accumulator: number, currentValue: number) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducerFxn));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducerFxn, 5));
// expected output: 15


//=========
// The reduce() method executes the callback once for each assigned value present in the array, taking four arguments:
//     accumulator
//     currentValue
//     currentIndex
//     array
//============


const n = 10;
const array = [...Array.from(Array(n).keys()), n];
const newValue = array.reduce((a, b) => a + b, 0);
l(newValue);



