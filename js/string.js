// string data type

var str1 = 'It\'s Tuesday today!';
console.log(str1);
var str2 = 'We are learning JavaScript';
console.log(str2);

var firstName = "Deidra"; //camelCase
//Use camelCase for main variable in project
console.log(firstName);

var last_name = "Wallert"; //snake 
//use snake for object key names
console.log(last_name);

//string concatination
//var fullName = firstName + ' ' + last_name;
//console.log(fullName);

//other way to concat
var fullName = firstName.concat(' ').concat(last_name);
console.log(fullName);

var fullName = firstName.concat(' ',last_name);
console.log(fullName);