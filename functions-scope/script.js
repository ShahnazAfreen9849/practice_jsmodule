// isEqual using function declaration

function isEqual(x, y) {
    if (x === y) {
        console.log('They are equal in type and value');

    } else if (x == y) {
        console.log('They are equal in value');

    } else {
        console.log('They are not equal');
    } return;
}

/// Logs "They are equal in type and value"
isEqual(10, 10);
// Logs "They are equal in value"
isEqual('10', 10);

// isEqualTakeTwo using function expression 

var isEqualTakeTwo = function (x, y) {
    if (x === y) {
        console.log('They are equal in type and data');

    } else if (x == y) {
        console.log('They are equal in value');

    } else {
        console.log('They are not equal');
    } return;
};

// Logs "They are not equal"
isEqualTakeTwo(10, true);

//////////////// Scope activity

// Shout is declared in the global scope and is available to both functions 
var shout =" Shout";

function justShout(){
    console.log(shout + " ," + shout);
    return;
}

function shoutItAllOut(){
    console.log(shout + " it all out! ");
    return;
}

justShout();
shoutItAllOut();

// Lions is declared locally so it is available only to the sayLions function

function sayLions(){
    var animal ="Lions";
    console.log(animal);
    return;
}

// Tigers is declared locally so it only available to the sayTigers function 

function sayTigers(){
    var animal="Tigers";
    console.log("and " + animal + " and ");
    return;
}

// Variables of the same name should not be declared in global and local scope
// Kept global scope
var bears = "Bears";

// Removed local scope
function sayBears(){
    console.log(bears + "! OH MY!");
    return;
}

sayLions();
sayTigers();
sayBears();

// Declaring sing in the outer function makes it available to the inner and outer function
function singAlone(){
    var sing ="Sing";
    console.log(sing + ",");
    var singASong= function(){
        console.log(sing + "a Song.");
    };
    singASong();

} singAlone(); 