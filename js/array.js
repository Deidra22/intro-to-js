//array data type
var arr1 = []; //empty array
var arr2 = [1, 2]; // has 2 elements
console.log(arr2);
console.log(arr2[1]); // index = 1
console.log(arr2[2]); // no index = 2

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[arr3.length - 1]);

arr3.push('welcome'); // will push an outside item into the end of an array
console.log(arr3);
console.log(arr3[arr3.length - 1]);

arr3.unshift('greetings'); // will push an outside string into the beginning of an array
console.log(arr3);

arr3.splice(2, 1, 'Deidra'); // will remove 1 item at index 2 & add 'Deidra' there
console.log(arr3);

arr3.splice(2, 2, 'Deidra', 'Wallert'); // remove 2 items at index 2 & 3 and insert 'Deidra' 'Wallert' @ index 2, 3
console.log(arr3);

arr3.splice(2, 0, 'hola');
console.log(arr3);

var arr4 = [10, 40, 'abc', 'xyz', true]; // Don't do this
console.log(arr4);

arr4.pop(); //removes last item of array
console.log(arr4);

arr4.shift(); //removes first item of array
console.log(arr4);

var arr5 = arr4.slice(); // makes a copy
console.log(arr5);
var arr6 = arr4; // not a copy but exact value

arr4.push(false);
console.log(arr4);
console.log(arr5);
console.log(arr6);

var arr7 = arr4.slice(1, 3); // starts at index 1 stops at index 2 captures everything before index 3
console.log(arr7);