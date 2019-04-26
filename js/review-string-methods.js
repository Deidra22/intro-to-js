var str = 'Hello World!';
console.log(str);

var str2 = str.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[1].split('!')[0]);
console.log(str.slice(6));

console.log(str.substring(0));
console.log(str.substring(0, 5));
//beginning index, end index
console.log(str.substring(06, str.length -1));
//beg index, length from that index
console.log(str.substr(0, 5));
console.log(str.substr(6, str.length - 1));

var make = 'Ford';
 
var model = 'Escape';

var myCar = make + ' ' + model;
console.log(myCar);