var fruit = ['apple', 'strawberry', 'pineapple'];

console.log(fruit);

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);

fruit.push ('mandarin');
console.log(fruit);

fruit.unshift('blueberry');
console.log(fruit);

fruit.splice(2, 1, 'watermelon');
console.log(fruit);

fruit.splice(1, 1);
console.log(fruit);

var fruity = fruit.slice();
console.log(fruity);

