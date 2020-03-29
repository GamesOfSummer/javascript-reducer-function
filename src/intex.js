var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var l = function (value) {
    console.log('====');
    console.log(value);
    console.log('====\n');
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var array1 = [1, 2, 3, 4];
var reducerFxn = function (accumulator, currentValue) { return accumulator + currentValue; };
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
var n = 8;
var array = __spreadArrays(Array.from(Array(n).keys()), [n]);
var newValue = array.reduce(function (a, b) { return a + b; }, 0);
l(newValue);
