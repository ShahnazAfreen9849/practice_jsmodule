var one = 65;
var two = "525250";
var three = false;
var four = 64.55;
var five = "Howdy!";
var six;

//Insert comments to explain what each console log below will log to the console
// Logs number

console.log(typeof one);
console.log(typeof two);
console.log(typeof three);
console.log(typeof four);
console.log(typeof five);
console.log(typeof six);

// Reassigns variables
four = "Hello!";
five = false;
six = 23;

// Insert comments to explain what each console log below will log to the console

console.log(typeof four);
console.log(typeof five);
console.log(typeof six);


///////////////////////////////

var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

// Evaluates to true

var expression1 = (b === e);

// Evaluates to false

var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
// Strict equality (===) returns false; Equality returns true (==)
console.log(a === b);

// b and e both hold number 50 and are strictly equal
console.log(b === e);

// c is greater than b returns true
console.log(c > b);

// d is less than 1 returns true
console.log(d < 1);

// Use logical operators so all expressions below log to the console as true
// Use || to return true

console.log(expression1 || expression2);

//Use ! and && to return true
console.log(expression1 && !expression2);

//Remove (!) from expression1 so one is true 
console.log(expression1 || expression2);

